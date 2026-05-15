declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
    "/create-subscription": {
        $post: {
            input: {
                json: {
                    plan?: "pro" | "premium" | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                json: {
                    plan?: "pro" | "premium" | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                json: {
                    plan?: "pro" | "premium" | undefined;
                };
            };
            output: {
                subscriptionId: string;
                approvalUrl: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/subscription": {
        $get: {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {};
            output: {
                plan: "basic" | "pro" | "premium";
                subscriptionId: string | null;
                subscriptionStatus: "active" | "cancelled" | "expired" | null;
                subscriptionCurrentPeriodEnd: string | null;
                paypalData: any;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/cancel-subscription": {
        $post: {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 400;
        };
    };
} & {
    "/verify-subscription": {
        $post: {
            input: {
                json: {
                    subscriptionId: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                json: {
                    subscriptionId: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                json: {
                    subscriptionId: string;
                };
            };
            output: {
                plan: "basic" | "pro" | "premium";
                subscriptionStatus: "active" | "cancelled" | "expired" | null;
                activated: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/webhook": {
        $post: {
            input: {
                json: any;
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                json: any;
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                json: any;
            };
            output: {
                received: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/credits": {
        $get: {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {};
            output: {
                creditsRemaining: number;
                creditsUsed: number;
                creditLimit: number;
                plan: string;
                nextResetAt: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/">;
export default router;
