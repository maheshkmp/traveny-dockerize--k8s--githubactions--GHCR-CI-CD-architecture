import { MiddlewareHandler } from "hono";
import { APIBindings } from "./types";
/**
 * Middleware that:
 * 1. Ensures the user is authenticated.
 * 2. Checks the user has at least 1 credit remaining (auto-resets if new month).
 * 3. Deducts 1 credit before passing to the next handler.
 * 4. Sends an email if credits just reached 0.
 *
 * Attach this to any route that costs 1 credit (QR, Crop, Signature).
 */
export declare const requireCredits: MiddlewareHandler<APIBindings>;
