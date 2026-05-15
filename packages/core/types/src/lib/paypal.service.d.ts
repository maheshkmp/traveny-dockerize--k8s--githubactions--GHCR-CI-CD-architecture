/**
 * PayPal Subscription Service
 * Handles all PayPal API interactions including subscription creation and webhook verification
 */
/**
 * Get PayPal OAuth2 access token
 */
export declare function getPayPalAccessToken(): Promise<string>;
/**
 * Create a PayPal subscription
 * @param customId - An opaque value (e.g. the app user's id) that PayPal echoes
 *                   back in every webhook event, used to reliably identify the user.
 */
export declare function createPayPalSubscription(planId: string, returnUrl: string, cancelUrl: string, customId?: string): Promise<{
    subscriptionId: string;
    approvalUrl: string;
}>;
/**
 * Get subscription details from PayPal
 */
export declare function getPayPalSubscription(subscriptionId: string): Promise<unknown>;
/**
 * Cancel a PayPal subscription
 */
export declare function cancelPayPalSubscription(subscriptionId: string, reason?: string): Promise<void>;
/**
 * Verify PayPal webhook signature
 * This ensures webhook events are authentically from PayPal
 */
export declare function verifyPayPalWebhook(headers: Headers | Record<string, string>, body: unknown): Promise<boolean>;
/**
 * Parse PayPal plan from Plan ID
 */
export declare function getPlanFromPayPalPlanId(planId: string): "basic" | "pro" | "premium";
