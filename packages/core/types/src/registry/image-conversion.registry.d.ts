declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
    "/convert": {
        $post: {
            input: {
                json: {
                    from_format: string;
                    to_format: string;
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
                    from_format: string;
                    to_format: string;
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
                    from_format: string;
                    to_format: string;
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
                    from_format: string;
                    to_format: string;
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
                    from_format: string;
                    to_format: string;
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
