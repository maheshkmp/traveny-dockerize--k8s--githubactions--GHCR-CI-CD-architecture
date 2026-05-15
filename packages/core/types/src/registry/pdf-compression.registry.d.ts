declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
    "/usage": {
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
                total: number;
                limit: number;
                remaining: number;
                isPro: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/compress": {
        $post: {
            input: {
                json: {
                    file_name?: string | undefined;
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
                    file_name?: string | undefined;
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
                    file_name?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 422;
        } | {
            input: {
                json: {
                    file_name?: string | undefined;
                };
            };
            output: {
                success: boolean;
                credits_remaining: number;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    file_name?: string | undefined;
                };
            };
            output: {
                message: string;
                upgradeUrl?: string | undefined;
            };
            outputFormat: "json";
            status: 403;
        };
    };
}, "/">;
export default router;
