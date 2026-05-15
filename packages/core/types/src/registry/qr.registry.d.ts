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
    "/": {
        $post: {
            input: {
                json: {
                    url: string;
                    color: string;
                    backgroundColor: string;
                    size?: number | undefined;
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
                    color: string;
                    backgroundColor: string;
                    size?: number | undefined;
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
                    url: string;
                    color: string;
                    backgroundColor: string;
                    size?: number | undefined;
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
                    url: string;
                    color: string;
                    backgroundColor: string;
                    size?: number | undefined;
                };
            };
            output: {
                code: {
                    url: string;
                    color: string;
                    backgroundColor: string;
                    size: number;
                    id: string;
                    userId: string;
                    createdAt: string;
                    updatedAt: string | null;
                };
                meta: {
                    total: number;
                    limit: number;
                    remaining: number;
                    isPro: boolean;
                };
            };
            outputFormat: "json";
            status: 201;
        } | {
            input: {
                json: {
                    url: string;
                    color: string;
                    backgroundColor: string;
                    size?: number | undefined;
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
