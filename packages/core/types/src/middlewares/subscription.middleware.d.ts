import { MiddlewareHandler } from "hono";
import { APIBindings } from "./types";
/**
 * Middleware to require Pro subscription
 * Use this on routes that should only be accessible to Pro users
 */
export declare const requireProSubscription: MiddlewareHandler<APIBindings>;
/**
 * Middleware to require specific plan (basic, pro, or premium)
 */
export declare const requirePlan: (allowedPlans: Array<"basic" | "pro" | "premium">) => MiddlewareHandler<APIBindings>;
