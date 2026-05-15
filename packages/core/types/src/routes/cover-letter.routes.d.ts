import { z } from "@hono/zod-openapi";
export declare const saveCoverLetter: {
    tags: string[];
    summary: string;
    path: "/save";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        title: z.ZodString;
                        targetCompany: z.ZodOptional<z.ZodString>;
                        targetRole: z.ZodOptional<z.ZodString>;
                        fullName: z.ZodString;
                        email: z.ZodString;
                        phone: z.ZodOptional<z.ZodString>;
                        location: z.ZodOptional<z.ZodString>;
                        linkedIn: z.ZodOptional<z.ZodString>;
                        github: z.ZodOptional<z.ZodString>;
                        letterDate: z.ZodOptional<z.ZodString>;
                        salutation: z.ZodDefault<z.ZodString>;
                        body: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            content: z.ZodString;
                        }, z.core.$strip>>;
                        closing: z.ZodDefault<z.ZodString>;
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
                        success: z.ZodBoolean;
                        id: z.ZodString;
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
    };
} & {
    getRoutingPath(): "/save";
};
export declare const listCoverLetters: {
    tags: string[];
    summary: string;
    path: "/list";
    method: "get";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        letters: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            title: z.ZodString;
                            targetCompany: z.ZodNullable<z.ZodString>;
                            targetRole: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodNullable<z.ZodString>;
                            updatedAt: z.ZodNullable<z.ZodString>;
                        }, z.core.$strip>>;
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
    };
} & {
    getRoutingPath(): "/list";
};
export declare const getCoverLetter: {
    tags: string[];
    summary: string;
    path: "/:id";
    method: "get";
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
                    schema: any;
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
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const updateCoverLetter: {
    tags: string[];
    summary: string;
    path: "/:id";
    method: "put";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        title: z.ZodString;
                        targetCompany: z.ZodOptional<z.ZodString>;
                        targetRole: z.ZodOptional<z.ZodString>;
                        fullName: z.ZodString;
                        email: z.ZodString;
                        phone: z.ZodOptional<z.ZodString>;
                        location: z.ZodOptional<z.ZodString>;
                        linkedIn: z.ZodOptional<z.ZodString>;
                        github: z.ZodOptional<z.ZodString>;
                        letterDate: z.ZodOptional<z.ZodString>;
                        salutation: z.ZodDefault<z.ZodString>;
                        body: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            content: z.ZodString;
                        }, z.core.$strip>>;
                        closing: z.ZodDefault<z.ZodString>;
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
                        success: z.ZodBoolean;
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
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const deleteCoverLetter: {
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
                        success: z.ZodBoolean;
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
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const downloadCoverLetter: {
    tags: string[];
    summary: string;
    path: "/:id/download";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/pdf": {
                    schema: {
                        type: "string";
                        format: string;
                    };
                };
            };
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
    };
} & {
    getRoutingPath(): "/:id/download";
};
export declare const aiGenerateCoverLetter: {
    tags: string[];
    summary: string;
    path: "/ai/generate";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        targetRole: z.ZodString;
                        targetCompany: z.ZodOptional<z.ZodString>;
                        tone: z.ZodDefault<z.ZodEnum<{
                            professional: "professional";
                            enthusiastic: "enthusiastic";
                            concise: "concise";
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
                        paragraphs: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            content: z.ZodString;
                        }, z.core.$strip>>;
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
    };
} & {
    getRoutingPath(): "/ai/generate";
};
export type SaveCoverLetterRoute = typeof saveCoverLetter;
export type ListCoverLettersRoute = typeof listCoverLetters;
export type GetCoverLetterRoute = typeof getCoverLetter;
export type UpdateCoverLetterRoute = typeof updateCoverLetter;
export type DeleteCoverLetterRoute = typeof deleteCoverLetter;
export type DownloadCoverLetterRoute = typeof downloadCoverLetter;
export type AiGenerateCoverLetterRoute = typeof aiGenerateCoverLetter;
