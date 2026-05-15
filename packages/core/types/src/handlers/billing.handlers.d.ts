import { APIRouteHandler } from "./types";
import type { CreateSubscriptionRoute, CancelSubscriptionRoute, GetSubscriptionRoute, VerifySubscriptionRoute, WebhookRoute, GetCreditsRoute } from "./routes/billing.route";
/**
 * Create a new PayPal subscription
 */
export declare const createSubscription: APIRouteHandler<CreateSubscriptionRoute>;
/**
 * Get current user's subscription details
 */
export declare const getSubscription: APIRouteHandler<GetSubscriptionRoute>;
/**
 * Cancel user's subscription
 */
export declare const cancelSubscription: APIRouteHandler<CancelSubscriptionRoute>;
/**
 * Verify and activate a subscription directly after PayPal redirect.
 *
 * PayPal webhooks can be delayed by several seconds. This endpoint lets the
 * success-page immediately confirm the subscription status by querying PayPal
 * and, if ACTIVE, writing the plan upgrade to the database right away, so the
 * user doesn't have to wait for the async webhook to land.
 */
export declare const verifySubscription: APIRouteHandler<VerifySubscriptionRoute>;
/**
 * PayPal webhook handler
 * Processes subscription lifecycle events
 */
export declare const webhook: APIRouteHandler<WebhookRoute>;
/**
 * Get current user's credit balance
 */
export declare const getCredits: APIRouteHandler<GetCreditsRoute>;
