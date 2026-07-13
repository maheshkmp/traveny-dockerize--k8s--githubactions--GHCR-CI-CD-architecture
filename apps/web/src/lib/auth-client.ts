import {
  adminClient,
  apiKeyClient,
  organizationClient,
  emailOTPClient
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

let rawClientInstance: ReturnType<typeof createAuthClient> | null = null;
let wrappedClientInstance: any = null;

const origin = typeof window !== "undefined" ? window.location.origin : undefined;

const isStandardKey = (key: string | symbol) => {
  if (typeof key !== "string") return true;
  return (
    key === "toJSON" ||
    key === "toString" ||
    key === "valueOf" ||
    key === "constructor" ||
    key === "inspect" ||
    key === "options" ||
    key === "fetchOptions" ||
    key === "bind" ||
    key === "call" ||
    key === "apply" ||
    key.startsWith("__")
  );
};

const createProxyWrapper = (obj: any, context?: any): any => {
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return obj;
  }
  
  return new Proxy(obj, {
    get(target, prop) {
      if (prop === "bind" && typeof target === "function") {
        return Function.prototype.bind.bind(target);
      }
      if (prop === "call" && typeof target === "function") {
        return Function.prototype.call.bind(target);
      }
      if (prop === "apply" && typeof target === "function") {
        return Function.prototype.apply.bind(target);
      }
      if (isStandardKey(prop)) {
        return undefined;
      }
      const value = Reflect.get(target, prop);
      return createProxyWrapper(value, target);
    },
    apply(target, thisArg, argArray) {
      if (typeof target === "function") {
        return Reflect.apply(target, context || target, argArray);
      }
    }
  });
};

const getClient = () => {
  if (!wrappedClientInstance) {
    const resolvedBaseURL = origin 
      ? `${origin}/api/auth` 
      : (process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000/api/auth");

    const OriginalProxy = globalThis.Proxy;

    // Temporarily patch Proxy to wrap the get trap of the better-auth client Proxy during initialization.
    // This intercepts lookups made on the client by closures (like react hooks).
    const PatchedProxy = function (target: any, handler: any) {
      if (handler && typeof handler.get === "function") {
        const originalGet = handler.get;
        handler.get = function (t: any, prop: any, receiver: any) {
          if (prop === "bind" && typeof t === "function") {
            return Function.prototype.bind.bind(t);
          }
          if (prop === "call" && typeof t === "function") {
            return Function.prototype.call.bind(t);
          }
          if (prop === "apply" && typeof t === "function") {
            return Function.prototype.apply.bind(t);
          }
          if (isStandardKey(prop)) {
            return undefined;
          }
          const result = originalGet.call(this, t, prop, receiver);
          return createProxyWrapper(result, t);
        };
      }
      return new OriginalProxy(target, handler);
    };

    // Copy static methods and prototype to behave like the original Proxy constructor
    Object.setPrototypeOf(PatchedProxy, OriginalProxy);
    PatchedProxy.prototype = OriginalProxy.prototype;

    globalThis.Proxy = PatchedProxy as any;

    try {
      rawClientInstance = createAuthClient({
        // Always use the Next.js proxy URL (same origin as the web app).
        // This ensures cookies are same-origin in the browser.
        // The proxy at /api/[[...path]] forwards requests to the backend.
        baseURL: resolvedBaseURL,

        plugins: [adminClient(), apiKeyClient(), organizationClient(), emailOTPClient()],
        fetchOptions: {
          onRequest: (ctx) => {
            console.log("[authClient] Requesting:", ctx.url);
            // Disable compression on every request. Vercel/Hono returns Brotli by
            // default; Node.js fetch (undici) cannot decompress it → BrotliDecompressionError.
            // Browsers treat accept-encoding as a forbidden header and ignore it safely.
            ctx.headers.set("accept-encoding", "identity");
          },
          onResponse: (ctx) => {
            // Log successful responses to track cookie setting
            if (ctx.response?.ok) {
              const setCookie = ctx.response.headers.get('set-cookie');
              console.log("[authClient] Response OK:", {
                url: ctx.response.url,
                hasSetCookie: !!setCookie,
                setCookiePreview: setCookie?.substring(0, 50)
              });
            }
          },
          onError: (ctx) => {
            // Suppress known/handled errors to prevent console spam
            const isSessionFetch = ctx.response?.url?.includes('/get-session');
            
            // Extract error message from various formats
            let errorMessage = "Unknown error";
            if (ctx.error) {
              if (typeof ctx.error === "string") {
                errorMessage = ctx.error;
              } else if (ctx.error instanceof Error) {
                errorMessage = ctx.error.message;
              } else if (typeof ctx.error === "object") {
                // Handle error objects with message property
                const errorObj = ctx.error as Record<string, unknown>;
                if ("message" in errorObj && typeof errorObj.message === "string") {
                  errorMessage = errorObj.message;
                } else if ("error" in errorObj && typeof errorObj.error === "string") {
                  errorMessage = errorObj.error;
                } else if (Object.keys(errorObj).length === 0) {
                  // Empty object - try to get more context from response
                  errorMessage = `Request failed to ${ctx.response?.url || "unknown"}`;
                } else {
                  // Stringify the error object
                  errorMessage = JSON.stringify(errorObj);
                }
              }
            }
            
            // These are user-facing errors already shown as toasts – no need to log
            const isHandledAuthError =
              isSessionFetch ||
              errorMessage.includes("already exists") ||
              errorMessage.toLowerCase().includes("invalid email or password") ||
              errorMessage.toLowerCase().includes("invalid credentials") ||
              errorMessage.toLowerCase().includes("user not found") ||
              errorMessage.toLowerCase().includes("incorrect password") ||
              errorMessage.toLowerCase().includes("email not verified") ||
              errorMessage.toLowerCase().includes("not verified") ||
              errorMessage.toLowerCase().includes("verify your email");

            if (!isHandledAuthError) {
              console.error("BetterAuth Error:", errorMessage, {
                url: ctx.response?.url || "unknown",
                status: ctx.response?.status,
                statusText: ctx.response?.statusText
              });
            }
          },
          credentials: "include",
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        }
      });
    } finally {
      // Restore original Proxy constructor
      globalThis.Proxy = OriginalProxy;
    }

    // Wrap the raw client in our Proxy wrapper to prevent better-auth's Proxy
    // from turning standard property accesses into API paths.
    wrappedClientInstance = createProxyWrapper(rawClientInstance);
  }
  return wrappedClientInstance;
};

// Export a Proxy that delegates all accesses to the lazily instantiated client.
// This defers `createAuthClient` until client-side execution, bypassing SWC build-time
// constant-folding of window checks.
export const authClient = new Proxy({} as any, {
  get(target, prop) {
    if (isStandardKey(prop)) {
      return undefined;
    }
    const client = getClient();
    const value = Reflect.get(client, prop);
    return createProxyWrapper(value, client);
  }
});
