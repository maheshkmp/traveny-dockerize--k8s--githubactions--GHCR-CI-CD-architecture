declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
    "/analytics": {
        $get: {
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
            status: 500;
        } | {
            input: {};
            output: {
                totalSignatures: number;
                totalUsage: number;
                mostUsed: {
                    id: string;
                    userId: string;
                    name: string;
                    type: "type" | "draw" | "upload";
                    imageUrl: string;
                    isDefault: boolean;
                    usageCount: number;
                    lastUsedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                } | null;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                message: string;
                upgradeUrl?: string | undefined;
            };
            outputFormat: "json";
            status: 403;
        };
    };
} & {
    "/": {
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
                data: {
                    id: string;
                    userId: string;
                    name: string;
                    type: "type" | "draw" | "upload";
                    imageUrl: string;
                    isDefault: boolean;
                    usageCount: number;
                    lastUsedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
                meta: {
                    total: number;
                    limit: number;
                    remaining: number;
                    isPro: boolean;
                    canDelete: boolean;
                };
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
                    name: string;
                    type: "type" | "draw" | "upload";
                    imageUrl: string;
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
                    name: string;
                    type: "type" | "draw" | "upload";
                    imageUrl: string;
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
                    name: string;
                    type: "type" | "draw" | "upload";
                    imageUrl: string;
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
                    name: string;
                    type: "type" | "draw" | "upload";
                    imageUrl: string;
                };
            };
            output: {
                id: string;
                userId: string;
                name: string;
                type: "type" | "draw" | "upload";
                imageUrl: string;
                isDefault: boolean;
                usageCount: number;
                lastUsedAt: string | null;
                createdAt: string;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 201;
        } | {
            input: {
                json: {
                    name: string;
                    type: "type" | "draw" | "upload";
                    imageUrl: string;
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
} & {
    "/:id": {
        $delete: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                param: {
                    id: string;
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
} & {
    "/:id/default": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                id: string;
                userId: string;
                name: string;
                type: "type" | "draw" | "upload";
                imageUrl: string;
                isDefault: boolean;
                usageCount: number;
                lastUsedAt: string | null;
                createdAt: string;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                param: {
                    id: string;
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
} & {
    "/:id/use": {
        $post: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                id: string;
                userId: string;
                name: string;
                type: "type" | "draw" | "upload";
                imageUrl: string;
                isDefault: boolean;
                usageCount: number;
                lastUsedAt: string | null;
                createdAt: string;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/pdf/embed": {
        $post: {
            input: {
                json: {
                    pdfBase64: string;
                    signatureBase64: string;
                    x: number;
                    y: number;
                    page?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
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
                    pdfBase64: string;
                    signatureBase64: string;
                    x: number;
                    y: number;
                    page?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
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
                    pdfBase64: string;
                    signatureBase64: string;
                    x: number;
                    y: number;
                    page?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
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
                    pdfBase64: string;
                    signatureBase64: string;
                    x: number;
                    y: number;
                    page?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                };
            };
            output: {
                pdfBase64: string;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    pdfBase64: string;
                    signatureBase64: string;
                    x: number;
                    y: number;
                    page?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
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
