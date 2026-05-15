import { z } from "@hono/zod-openapi";
export declare const list: {
    tags: string[];
    summary: string;
    path: "/";
    method: "get";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        data: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            userId: z.ZodString;
                            name: z.ZodString;
                            type: z.ZodEnum<{
                                type: "type";
                                draw: "draw";
                                upload: "upload";
                            }>;
                            imageUrl: z.ZodString;
                            isDefault: z.ZodBoolean;
                            usageCount: z.ZodNumber;
                            lastUsedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodDate;
                            updatedAt: z.ZodNullable<z.ZodDate>;
                        }, z.core.$strip>>;
                        meta: z.ZodObject<{
                            total: z.ZodNumber;
                            limit: z.ZodNumber;
                            remaining: z.ZodNumber;
                            isPro: z.ZodBoolean;
                            canDelete: z.ZodBoolean;
                        }, z.core.$strip>;
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
    getRoutingPath(): "/";
};
export declare const create: {
    tags: string[];
    summary: string;
    path: "/";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        name: z.ZodString;
                        type: z.ZodEnum<{
                            type: "type";
                            draw: "draw";
                            upload: "upload";
                        }>;
                        imageUrl: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
    responses: {
        201: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        id: z.ZodString;
                        userId: z.ZodString;
                        name: z.ZodString;
                        type: z.ZodEnum<{
                            type: "type";
                            draw: "draw";
                            upload: "upload";
                        }>;
                        imageUrl: z.ZodString;
                        isDefault: z.ZodBoolean;
                        usageCount: z.ZodNumber;
                        lastUsedAt: z.ZodNullable<z.ZodString>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodNullable<z.ZodDate>;
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
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                        upgradeUrl: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        422: {
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
    getRoutingPath(): "/";
};
export declare const remove: {
    tags: string[];
    summary: string;
    path: "/:id";
    method: "delete";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    };
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
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                        upgradeUrl: z.ZodOptional<z.ZodString>;
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
    getRoutingPath(): "/:id";
};
export declare const setDefault: {
    tags: string[];
    summary: string;
    path: "/:id/default";
    method: "patch";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        id: z.ZodString;
                        userId: z.ZodString;
                        name: z.ZodString;
                        type: z.ZodEnum<{
                            type: "type";
                            draw: "draw";
                            upload: "upload";
                        }>;
                        imageUrl: z.ZodString;
                        isDefault: z.ZodBoolean;
                        usageCount: z.ZodNumber;
                        lastUsedAt: z.ZodNullable<z.ZodString>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodNullable<z.ZodDate>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                        upgradeUrl: z.ZodOptional<z.ZodString>;
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
    getRoutingPath(): "/:id/default";
};
export declare const use: {
    tags: string[];
    summary: string;
    path: "/:id/use";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        id: z.ZodString;
                        userId: z.ZodString;
                        name: z.ZodString;
                        type: z.ZodEnum<{
                            type: "type";
                            draw: "draw";
                            upload: "upload";
                        }>;
                        imageUrl: z.ZodString;
                        isDefault: z.ZodBoolean;
                        usageCount: z.ZodNumber;
                        lastUsedAt: z.ZodNullable<z.ZodString>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodNullable<z.ZodDate>;
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
    getRoutingPath(): "/:id/use";
};
export declare const analytics: {
    tags: string[];
    summary: string;
    path: "/analytics";
    method: "get";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        totalSignatures: z.ZodNumber;
                        totalUsage: z.ZodNumber;
                        mostUsed: z.ZodNullable<z.ZodObject<{
                            id: z.ZodString;
                            userId: z.ZodString;
                            name: z.ZodString;
                            type: z.ZodEnum<{
                                type: "type";
                                draw: "draw";
                                upload: "upload";
                            }>;
                            imageUrl: z.ZodString;
                            isDefault: z.ZodBoolean;
                            usageCount: z.ZodNumber;
                            lastUsedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodDate;
                            updatedAt: z.ZodNullable<z.ZodDate>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                        upgradeUrl: z.ZodOptional<z.ZodString>;
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
    getRoutingPath(): "/analytics";
};
export declare const pdfEmbed: {
    tags: string[];
    summary: string;
    path: "/pdf/embed";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        pdfBase64: z.ZodString;
                        signatureBase64: z.ZodString;
                        page: z.ZodDefault<z.ZodNumber>;
                        x: z.ZodNumber;
                        y: z.ZodNumber;
                        width: z.ZodDefault<z.ZodNumber>;
                        height: z.ZodDefault<z.ZodNumber>;
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
                        pdfBase64: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        message: z.ZodString;
                        upgradeUrl: z.ZodOptional<z.ZodString>;
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
        422: {
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
    getRoutingPath(): "/pdf/embed";
};
export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type RemoveRoute = typeof remove;
export type SetDefaultRoute = typeof setDefault;
export type UseRoute = typeof use;
export type AnalyticsRoute = typeof analytics;
export type PdfEmbedRoute = typeof pdfEmbed;
