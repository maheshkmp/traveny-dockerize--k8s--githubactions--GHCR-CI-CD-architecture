import { z } from "@hono/zod-openapi";
export declare const createSubscription: {
    tags: string[];
    summary: string;
    path: "/create-subscription";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        plan: z.ZodDefault<z.ZodEnum<{
                            pro: "pro";
                            premium: "premium";
                        }>>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        subscriptionId: z.ZodString;
                        approvalUrl: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        401: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/create-subscription";
};
export declare const getSubscription: {
    tags: string[];
    summary: string;
    path: "/subscription";
    method: "get";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        plan: z.ZodEnum<{
                            basic: "basic";
                            pro: "pro";
                            premium: "premium";
                        }>;
                        subscriptionId: z.ZodNullable<z.ZodString>;
                        subscriptionStatus: z.ZodNullable<z.ZodEnum<{
                            active: "active";
                            cancelled: "cancelled";
                            expired: "expired";
                        }>>;
                        subscriptionCurrentPeriodEnd: z.ZodNullable<z.ZodString>;
                        paypalData: z.ZodNullable<z.ZodAny>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        401: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        404: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/subscription";
};
export declare const cancelSubscription: {
    tags: string[];
    summary: string;
    path: "/cancel-subscription";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        401: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        400: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/cancel-subscription";
};
export declare const verifySubscription: {
    tags: string[];
    summary: string;
    path: "/verify-subscription";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        subscriptionId: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        plan: z.ZodEnum<{
                            basic: "basic";
                            pro: "pro";
                            premium: "premium";
                        }>;
                        subscriptionStatus: z.ZodNullable<z.ZodEnum<{
                            active: "active";
                            cancelled: "cancelled";
                            expired: "expired";
                        }>>;
                        activated: z.ZodBoolean;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        401: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/verify-subscription";
};
export declare const webhook: {
    tags: string[];
    summary: string;
    path: "/webhook";
    method: "post";
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.ZodAny;
                };
            };
            required: true;
        };
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        received: z.ZodBoolean;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        401: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/webhook";
};
export declare const getCredits: {
    tags: string[];
    summary: string;
    path: "/credits";
    method: "get";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        creditsRemaining: z.ZodNumber;
                        creditsUsed: z.ZodNumber;
                        creditLimit: z.ZodNumber;
                        plan: z.ZodString;
                        nextResetAt: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        401: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        404: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/credits";
};
export type CreateSubscriptionRoute = typeof createSubscription;
export type GetSubscriptionRoute = typeof getSubscription;
export type CancelSubscriptionRoute = typeof cancelSubscription;
export type VerifySubscriptionRoute = typeof verifySubscription;
export type WebhookRoute = typeof webhook;
export type GetCreditsRoute = typeof getCredits;
