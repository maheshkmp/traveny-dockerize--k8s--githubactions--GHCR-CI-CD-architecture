import { z } from "zod";
export declare const saveFacebookRoute: {
    path: "/save";
    method: "post";
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        userId: z.ZodString;
                        pageId: z.ZodString;
                        pageName: z.ZodString;
                        pageAccessToken: z.ZodString;
                    }, z.core.$strip>;
                };
            };
        };
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        success: z.ZodBoolean;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        401: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        success: z.ZodBoolean;
                        error: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/save";
};
export declare const getFacebookStatusRoute: {
    path: "/status";
    method: "get";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        connected: z.ZodBoolean;
                        pageName: z.ZodOptional<z.ZodString>;
                        pageId: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/status";
};
export declare const disconnectFacebookRoute: {
    path: "/disconnect";
    method: "delete";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        success: z.ZodBoolean;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/disconnect";
};
export declare const publishFacebookRoute: {
    path: "/publish";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                    }, z.core.$strip>;
                };
            };
        };
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        success: z.ZodBoolean;
                        postId: z.ZodOptional<z.ZodString>;
                        postUrl: z.ZodOptional<z.ZodString>;
                        error: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        400: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        500: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/publish";
};
