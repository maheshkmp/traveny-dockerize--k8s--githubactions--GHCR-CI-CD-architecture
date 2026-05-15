declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, import("hono/types").MergeSchemaPath<{
    "/save": {
        $post: {
            input: {
                json: {
                    userId: string;
                    pageId: string;
                    pageName: string;
                    pageAccessToken: string;
                };
            };
            output: {
                success: boolean;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    userId: string;
                    pageId: string;
                    pageName: string;
                    pageAccessToken: string;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                json: {
                    userId: string;
                    pageId: string;
                    pageName: string;
                    pageAccessToken: string;
                };
            };
            output: {
                success: boolean;
                error?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/status": {
        $get: {
            input: {};
            output: {
                connected: boolean;
                pageName?: string | undefined;
                pageId?: string | undefined;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/disconnect": {
        $delete: {
            input: {};
            output: {
                success: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/publish": {
        $post: {
            input: {
                json: {
                    message: string;
                };
            };
            output: {
                success: boolean;
                postId?: string | undefined;
                postUrl?: string | undefined;
                error?: string | undefined;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    message: string;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                json: {
                    message: string;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
}, "/facebook">, "/">;
export default router;
