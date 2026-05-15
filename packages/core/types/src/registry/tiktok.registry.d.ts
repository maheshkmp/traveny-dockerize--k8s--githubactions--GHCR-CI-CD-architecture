declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
    "/stats": {
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
                count: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/fetch": {
        $post: {
            input: {
                json: {
                    url: string;
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
                    url: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                json: {
                    url: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                json: {
                    url: string;
                };
            };
            output: {
                thumbnailUrl: string;
                title: string;
                authorName: string;
                authorUrl: string;
                thumbnailWidth: number;
                thumbnailHeight: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/download": {
        $get: {
            input: {
                query: {
                    url: string;
                };
            };
            output: Response;
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        } | {
            input: {
                query: {
                    url: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                query: {
                    url: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                query: {
                    url: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        };
    };
}, "/">;
export default router;
