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
            status: 400;
        } | {
            input: {
                json: {
                    url: string;
                };
            };
            output: {
                videoId: string;
                thumbnails: {
                    resolution: "default" | "maxres" | "hq" | "sd" | "mq";
                    url: string;
                    width: number;
                    height: number;
                    label: string;
                    available: boolean;
                }[];
                title?: string | undefined;
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
        };
    };
}, "/">;
export default router;
