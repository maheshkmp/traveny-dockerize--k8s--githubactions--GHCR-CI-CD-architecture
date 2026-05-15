import { z } from "@hono/zod-openapi";
declare const submitServiceRequestRoute: {
    method: "post";
    path: "/request";
    tags: string[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        clientName: z.ZodString;
                        clientEmail: z.ZodString;
                        clientCompany: z.ZodOptional<z.ZodString>;
                        clientWebsite: z.ZodOptional<z.ZodString>;
                        projectType: z.ZodEnum<{
                            portfolio: "portfolio";
                            saas: "saas";
                            landing: "landing";
                            ecommerce: "ecommerce";
                            tool: "tool";
                            other: "other";
                        }>;
                        projectTitle: z.ZodString;
                        projectDescription: z.ZodString;
                        budgetRange: z.ZodEnum<{
                            under500: "under500";
                            "500to1k": "500to1k";
                            "1kto3k": "1kto3k";
                            "3kto5k": "3kto5k";
                            "5kplus": "5kplus";
                        }>;
                        timeline: z.ZodEnum<{
                            asap: "asap";
                            "1month": "1month";
                            "3months": "3months";
                            flexible: "flexible";
                        }>;
                        referralSource: z.ZodOptional<z.ZodEnum<{
                            google: "google";
                            social: "social";
                            other: "other";
                            friend: "friend";
                            ghostcod_tool: "ghostcod_tool";
                        }>>;
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
                        request: z.ZodObject<{
                            id: z.ZodString;
                            clientName: z.ZodString;
                            clientEmail: z.ZodString;
                            clientCompany: z.ZodNullable<z.ZodString>;
                            clientWebsite: z.ZodNullable<z.ZodString>;
                            projectType: z.ZodString;
                            projectTitle: z.ZodString;
                            projectDescription: z.ZodString;
                            budgetRange: z.ZodString;
                            timeline: z.ZodNullable<z.ZodString>;
                            referralSource: z.ZodNullable<z.ZodString>;
                            status: z.ZodString;
                            userId: z.ZodNullable<z.ZodString>;
                            adminNote: z.ZodNullable<z.ZodString>;
                            rejectionReason: z.ZodNullable<z.ZodString>;
                            approvedAt: z.ZodNullable<z.ZodString>;
                            rejectedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodNullable<z.ZodString>;
                        }, z.core.$strip>;
                        message: z.ZodString;
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
        409: {
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
    getRoutingPath(): "/request";
};
declare const listServiceRequestsRoute: {
    method: "get";
    path: "/requests";
    tags: string[];
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        query: z.ZodObject<{
            status: z.ZodOptional<z.ZodEnum<{
                pending: "pending";
                approved: "approved";
                rejected: "rejected";
                in_discussion: "in_discussion";
                quoted: "quoted";
                paid: "paid";
                in_progress: "in_progress";
                delivered: "delivered";
            }>>;
        }, z.core.$strip>;
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        requests: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            clientName: z.ZodString;
                            clientEmail: z.ZodString;
                            clientCompany: z.ZodNullable<z.ZodString>;
                            clientWebsite: z.ZodNullable<z.ZodString>;
                            projectType: z.ZodString;
                            projectTitle: z.ZodString;
                            projectDescription: z.ZodString;
                            budgetRange: z.ZodString;
                            timeline: z.ZodNullable<z.ZodString>;
                            referralSource: z.ZodNullable<z.ZodString>;
                            status: z.ZodString;
                            userId: z.ZodNullable<z.ZodString>;
                            adminNote: z.ZodNullable<z.ZodString>;
                            rejectionReason: z.ZodNullable<z.ZodString>;
                            approvedAt: z.ZodNullable<z.ZodString>;
                            rejectedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodNullable<z.ZodString>;
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
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/requests";
};
declare const getServiceRequestRoute: {
    method: "get";
    path: "/request/:id";
    tags: string[];
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
                        request: z.ZodObject<{
                            id: z.ZodString;
                            clientName: z.ZodString;
                            clientEmail: z.ZodString;
                            clientCompany: z.ZodNullable<z.ZodString>;
                            clientWebsite: z.ZodNullable<z.ZodString>;
                            projectType: z.ZodString;
                            projectTitle: z.ZodString;
                            projectDescription: z.ZodString;
                            budgetRange: z.ZodString;
                            timeline: z.ZodNullable<z.ZodString>;
                            referralSource: z.ZodNullable<z.ZodString>;
                            status: z.ZodString;
                            userId: z.ZodNullable<z.ZodString>;
                            adminNote: z.ZodNullable<z.ZodString>;
                            rejectionReason: z.ZodNullable<z.ZodString>;
                            approvedAt: z.ZodNullable<z.ZodString>;
                            rejectedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodNullable<z.ZodString>;
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
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        404: {
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
    getRoutingPath(): "/request/:id";
};
declare const reviewServiceRequestRoute: {
    method: "post";
    path: "/review";
    tags: string[];
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        requestId: z.ZodString;
                        action: z.ZodEnum<{
                            approve: "approve";
                            reject: "reject";
                        }>;
                        adminNote: z.ZodOptional<z.ZodString>;
                        rejectionReason: z.ZodOptional<z.ZodString>;
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
                        request: z.ZodObject<{
                            id: z.ZodString;
                            clientName: z.ZodString;
                            clientEmail: z.ZodString;
                            clientCompany: z.ZodNullable<z.ZodString>;
                            clientWebsite: z.ZodNullable<z.ZodString>;
                            projectType: z.ZodString;
                            projectTitle: z.ZodString;
                            projectDescription: z.ZodString;
                            budgetRange: z.ZodString;
                            timeline: z.ZodNullable<z.ZodString>;
                            referralSource: z.ZodNullable<z.ZodString>;
                            status: z.ZodString;
                            userId: z.ZodNullable<z.ZodString>;
                            adminNote: z.ZodNullable<z.ZodString>;
                            rejectionReason: z.ZodNullable<z.ZodString>;
                            approvedAt: z.ZodNullable<z.ZodString>;
                            rejectedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodNullable<z.ZodString>;
                        }, z.core.$strip>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        404: {
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
    getRoutingPath(): "/review";
};
declare const sendMessageRoute: {
    method: "post";
    path: "/message";
    tags: string[];
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        requestId: z.ZodString;
                        content: z.ZodString;
                        messageType: z.ZodDefault<z.ZodEnum<{
                            text: "text";
                            payment_request: "payment_request";
                            status_update: "status_update";
                        }>>;
                        paypalLink: z.ZodOptional<z.ZodString>;
                        paymentAmount: z.ZodOptional<z.ZodString>;
                        paymentDescription: z.ZodOptional<z.ZodString>;
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
                        message: z.ZodObject<{
                            id: z.ZodString;
                            requestId: z.ZodString;
                            senderRole: z.ZodString;
                            senderName: z.ZodString;
                            senderEmail: z.ZodString;
                            content: z.ZodString;
                            messageType: z.ZodString;
                            paypalLink: z.ZodNullable<z.ZodString>;
                            paymentAmount: z.ZodNullable<z.ZodString>;
                            paymentDescription: z.ZodNullable<z.ZodString>;
                            isReadByClient: z.ZodNullable<z.ZodBoolean>;
                            isReadByAdmin: z.ZodNullable<z.ZodBoolean>;
                            createdAt: z.ZodString;
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
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        404: {
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
    getRoutingPath(): "/message";
};
declare const getMessagesRoute: {
    method: "get";
    path: "/messages/:requestId";
    tags: string[];
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        params: z.ZodObject<{
            requestId: z.ZodString;
        }, z.core.$strip>;
    };
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        messages: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            requestId: z.ZodString;
                            senderRole: z.ZodString;
                            senderName: z.ZodString;
                            senderEmail: z.ZodString;
                            content: z.ZodString;
                            messageType: z.ZodString;
                            paypalLink: z.ZodNullable<z.ZodString>;
                            paymentAmount: z.ZodNullable<z.ZodString>;
                            paymentDescription: z.ZodNullable<z.ZodString>;
                            isReadByClient: z.ZodNullable<z.ZodBoolean>;
                            isReadByAdmin: z.ZodNullable<z.ZodBoolean>;
                            createdAt: z.ZodString;
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
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        404: {
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
    getRoutingPath(): "/messages/:requestId";
};
declare const getMyProjectsRoute: {
    method: "get";
    path: "/my-projects";
    tags: string[];
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        projects: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            clientName: z.ZodString;
                            clientEmail: z.ZodString;
                            clientCompany: z.ZodNullable<z.ZodString>;
                            clientWebsite: z.ZodNullable<z.ZodString>;
                            projectType: z.ZodString;
                            projectTitle: z.ZodString;
                            projectDescription: z.ZodString;
                            budgetRange: z.ZodString;
                            timeline: z.ZodNullable<z.ZodString>;
                            referralSource: z.ZodNullable<z.ZodString>;
                            status: z.ZodString;
                            userId: z.ZodNullable<z.ZodString>;
                            adminNote: z.ZodNullable<z.ZodString>;
                            rejectionReason: z.ZodNullable<z.ZodString>;
                            approvedAt: z.ZodNullable<z.ZodString>;
                            rejectedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodString;
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
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
    };
} & {
    getRoutingPath(): "/my-projects";
};
declare const updateStatusRoute: {
    method: "patch";
    path: "/status";
    tags: string[];
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        requestId: z.ZodString;
                        status: z.ZodEnum<{
                            pending: "pending";
                            approved: "approved";
                            rejected: "rejected";
                            in_discussion: "in_discussion";
                            quoted: "quoted";
                            paid: "paid";
                            in_progress: "in_progress";
                            delivered: "delivered";
                        }>;
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
                        request: z.ZodObject<{
                            id: z.ZodString;
                            clientName: z.ZodString;
                            clientEmail: z.ZodString;
                            clientCompany: z.ZodNullable<z.ZodString>;
                            clientWebsite: z.ZodNullable<z.ZodString>;
                            projectType: z.ZodString;
                            projectTitle: z.ZodString;
                            projectDescription: z.ZodString;
                            budgetRange: z.ZodString;
                            timeline: z.ZodNullable<z.ZodString>;
                            referralSource: z.ZodNullable<z.ZodString>;
                            status: z.ZodString;
                            userId: z.ZodNullable<z.ZodString>;
                            adminNote: z.ZodNullable<z.ZodString>;
                            rejectionReason: z.ZodNullable<z.ZodString>;
                            approvedAt: z.ZodNullable<z.ZodString>;
                            rejectedAt: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodNullable<z.ZodString>;
                        }, z.core.$strip>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        403: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        error: z.ZodString;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        404: {
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
    getRoutingPath(): "/status";
};
declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
    "/request": {
        $post: {
            input: {
                json: {
                    clientName: string;
                    clientEmail: string;
                    projectType: "portfolio" | "saas" | "landing" | "ecommerce" | "tool" | "other";
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: "under500" | "500to1k" | "1kto3k" | "3kto5k" | "5kplus";
                    timeline: "asap" | "1month" | "3months" | "flexible";
                    clientCompany?: string | undefined;
                    clientWebsite?: string | undefined;
                    referralSource?: "google" | "social" | "other" | "friend" | "ghostcod_tool" | undefined;
                };
            };
            output: {
                request: {
                    id: string;
                    clientName: string;
                    clientEmail: string;
                    clientCompany: string | null;
                    clientWebsite: string | null;
                    projectType: string;
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: string;
                    timeline: string | null;
                    referralSource: string | null;
                    status: string;
                    userId: string | null;
                    adminNote: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    rejectedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
                message: string;
            };
            outputFormat: "json";
            status: 201;
        } | {
            input: {
                json: {
                    clientName: string;
                    clientEmail: string;
                    projectType: "portfolio" | "saas" | "landing" | "ecommerce" | "tool" | "other";
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: "under500" | "500to1k" | "1kto3k" | "3kto5k" | "5kplus";
                    timeline: "asap" | "1month" | "3months" | "flexible";
                    clientCompany?: string | undefined;
                    clientWebsite?: string | undefined;
                    referralSource?: "google" | "social" | "other" | "friend" | "ghostcod_tool" | undefined;
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
                    clientName: string;
                    clientEmail: string;
                    projectType: "portfolio" | "saas" | "landing" | "ecommerce" | "tool" | "other";
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: "under500" | "500to1k" | "1kto3k" | "3kto5k" | "5kplus";
                    timeline: "asap" | "1month" | "3months" | "flexible";
                    clientCompany?: string | undefined;
                    clientWebsite?: string | undefined;
                    referralSource?: "google" | "social" | "other" | "friend" | "ghostcod_tool" | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 409;
        };
    };
} & {
    "/requests": {
        $get: {
            input: {
                query: {
                    status?: "pending" | "approved" | "rejected" | "in_discussion" | "quoted" | "paid" | "in_progress" | "delivered" | undefined;
                };
            };
            output: {
                requests: {
                    id: string;
                    clientName: string;
                    clientEmail: string;
                    clientCompany: string | null;
                    clientWebsite: string | null;
                    projectType: string;
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: string;
                    timeline: string | null;
                    referralSource: string | null;
                    status: string;
                    userId: string | null;
                    adminNote: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    rejectedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                query: {
                    status?: "pending" | "approved" | "rejected" | "in_discussion" | "quoted" | "paid" | "in_progress" | "delivered" | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 403;
        };
    };
} & {
    "/my-projects": {
        $get: {
            input: {};
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {};
            output: {
                projects: {
                    id: string;
                    clientName: string;
                    clientEmail: string;
                    clientCompany: string | null;
                    clientWebsite: string | null;
                    projectType: string;
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: string;
                    timeline: string | null;
                    referralSource: string | null;
                    status: string;
                    userId: string | null;
                    adminNote: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    rejectedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/request/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                request: {
                    id: string;
                    clientName: string;
                    clientEmail: string;
                    clientCompany: string | null;
                    clientWebsite: string | null;
                    projectType: string;
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: string;
                    timeline: string | null;
                    referralSource: string | null;
                    status: string;
                    userId: string | null;
                    adminNote: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    rejectedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
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
                error: string;
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
                error: string;
            };
            outputFormat: "json";
            status: 404;
        };
    };
} & {
    "/review": {
        $post: {
            input: {
                json: {
                    requestId: string;
                    action: "approve" | "reject";
                    adminNote?: string | undefined;
                    rejectionReason?: string | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                json: {
                    requestId: string;
                    action: "approve" | "reject";
                    adminNote?: string | undefined;
                    rejectionReason?: string | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                json: {
                    requestId: string;
                    action: "approve" | "reject";
                    adminNote?: string | undefined;
                    rejectionReason?: string | undefined;
                };
            };
            output: {
                request: {
                    id: string;
                    clientName: string;
                    clientEmail: string;
                    clientCompany: string | null;
                    clientWebsite: string | null;
                    projectType: string;
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: string;
                    timeline: string | null;
                    referralSource: string | null;
                    status: string;
                    userId: string | null;
                    adminNote: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    rejectedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/message": {
        $post: {
            input: {
                json: {
                    requestId: string;
                    content: string;
                    messageType?: "text" | "payment_request" | "status_update" | undefined;
                    paypalLink?: string | undefined;
                    paymentAmount?: string | undefined;
                    paymentDescription?: string | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                json: {
                    requestId: string;
                    content: string;
                    messageType?: "text" | "payment_request" | "status_update" | undefined;
                    paypalLink?: string | undefined;
                    paymentAmount?: string | undefined;
                    paymentDescription?: string | undefined;
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
                    requestId: string;
                    content: string;
                    messageType?: "text" | "payment_request" | "status_update" | undefined;
                    paypalLink?: string | undefined;
                    paymentAmount?: string | undefined;
                    paymentDescription?: string | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                json: {
                    requestId: string;
                    content: string;
                    messageType?: "text" | "payment_request" | "status_update" | undefined;
                    paypalLink?: string | undefined;
                    paymentAmount?: string | undefined;
                    paymentDescription?: string | undefined;
                };
            };
            output: {
                message: {
                    id: string;
                    requestId: string;
                    senderRole: string;
                    senderName: string;
                    senderEmail: string;
                    content: string;
                    messageType: string;
                    paypalLink: string | null;
                    paymentAmount: string | null;
                    paymentDescription: string | null;
                    isReadByClient: boolean | null;
                    isReadByAdmin: boolean | null;
                    createdAt: string;
                };
            };
            outputFormat: "json";
            status: 201;
        };
    };
} & {
    "/messages/:requestId": {
        $get: {
            input: {
                param: {
                    requestId: string;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                param: {
                    requestId: string;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                param: {
                    requestId: string;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                param: {
                    requestId: string;
                };
            };
            output: {
                messages: {
                    id: string;
                    requestId: string;
                    senderRole: string;
                    senderName: string;
                    senderEmail: string;
                    content: string;
                    messageType: string;
                    paypalLink: string | null;
                    paymentAmount: string | null;
                    paymentDescription: string | null;
                    isReadByClient: boolean | null;
                    isReadByAdmin: boolean | null;
                    createdAt: string;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/status": {
        $patch: {
            input: {
                json: {
                    requestId: string;
                    status: "pending" | "approved" | "rejected" | "in_discussion" | "quoted" | "paid" | "in_progress" | "delivered";
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                json: {
                    requestId: string;
                    status: "pending" | "approved" | "rejected" | "in_discussion" | "quoted" | "paid" | "in_progress" | "delivered";
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {
                json: {
                    requestId: string;
                    status: "pending" | "approved" | "rejected" | "in_discussion" | "quoted" | "paid" | "in_progress" | "delivered";
                };
            };
            output: {
                request: {
                    id: string;
                    clientName: string;
                    clientEmail: string;
                    clientCompany: string | null;
                    clientWebsite: string | null;
                    projectType: string;
                    projectTitle: string;
                    projectDescription: string;
                    budgetRange: string;
                    timeline: string | null;
                    referralSource: string | null;
                    status: string;
                    userId: string | null;
                    adminNote: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    rejectedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/">;
export default router;
export type SubmitServiceRequestRoute = typeof submitServiceRequestRoute;
export type ListServiceRequestsRoute = typeof listServiceRequestsRoute;
export type GetServiceRequestRoute = typeof getServiceRequestRoute;
export type ReviewServiceRequestRoute = typeof reviewServiceRequestRoute;
export type SendMessageRoute = typeof sendMessageRoute;
export type GetMessagesRoute = typeof getMessagesRoute;
export type GetMyProjectsRoute = typeof getMyProjectsRoute;
export type UpdateStatusRoute = typeof updateStatusRoute;
