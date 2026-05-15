import { OpenAPI } from "./types";
export declare function registerRoutes(app: OpenAPI): import("@hono/zod-openapi").OpenAPIHono<import("@/types").APIBindings, import("hono/types").MergeSchemaPath<{}, "/api/cover-letter"> & import("hono/types").MergeSchemaPath<{}, "/api/cv"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/services"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/tiktok"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/thumbnail"> & import("hono/types").MergeSchemaPath<{
    "/generate": {
        $post: {
            input: {
                json: {
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
                };
            };
            output: Response;
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        } | {
            input: {
                json: {
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
}, "/api/invoice"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/image-conversion"> & import("hono/types").MergeSchemaPath<{
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
    "/compress": {
        $post: {
            input: {
                json: {
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
}, "/api/pdf-compression"> & import("hono/types").MergeSchemaPath<{
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
                };
            };
            output: {
                id: string;
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
                    fileName?: string | undefined;
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
}, "/api/bg-removal"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $post: {
            input: {
                json: {
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 201;
        } | {
            input: {
                json: {
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
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
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
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
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 422;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    status?: "pending" | "approved" | "rejected" | "draft" | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                query: {
                    status?: "pending" | "approved" | "rejected" | "draft" | undefined;
                };
            };
            output: {
                posts: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/public": {
        $get: {
            input: {};
            output: {
                posts: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/public/:slug": {
        $get: {
            input: {
                param: {
                    slug: string;
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
                    slug: string;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/:id": {
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
            status: 401;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
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
            status: 403;
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
    "/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
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
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
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
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
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
                    id: string;
                };
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
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
            status: 403;
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
        };
    };
} & {
    "/:id/submit": {
        $post: {
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
            status: 403;
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
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/:id/approve": {
        $post: {
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
                error: string;
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
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/:id/reject": {
        $post: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    reason?: string | undefined;
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
            } & {
                json: {
                    reason?: string | undefined;
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
                    id: string;
                };
            } & {
                json: {
                    reason?: string | undefined;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api/blog"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
            }[];
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    content: string;
                    rating: number;
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
                    content: string;
                    rating: number;
                };
            };
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api/reviews"> & import("hono/types").MergeSchemaPath<{
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
                };
            };
            output: {
                id: string;
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
                    fileName?: string | undefined;
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
}, "/api/crops"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/qr"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/signatures"> & import("hono/types").MergeSchemaPath<{
    "/users": {
        $get: {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                users: {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    role: string | null;
                    plan: string;
                    subscriptionStatus: string | null;
                    subscriptionId: string | null;
                    createdAt: string;
                    banned: boolean | null;
                }[];
                total: number;
                page: number;
                limit: number;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        };
    };
} & {
    "/users": {
        $post: {
            input: {
                json: {
                    name: string;
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
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
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
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
                    name: string;
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                json: {
                    name: string;
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                };
            };
            output: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: string | null;
                plan: string;
                subscriptionStatus: string | null;
                subscriptionId: string | null;
                createdAt: string;
                banned: boolean | null;
            };
            outputFormat: "json";
            status: 201;
        };
    };
} & {
    "/users/:id": {
        $get: {
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
            status: 403;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: string | null;
                plan: string;
                subscriptionStatus: string | null;
                subscriptionId: string | null;
                createdAt: string;
                banned: boolean | null;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/users/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
                };
            };
            output: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: string | null;
                plan: string;
                subscriptionStatus: string | null;
                subscriptionId: string | null;
                createdAt: string;
                banned: boolean | null;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/users/:id": {
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
            status: 400;
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
            status: 403;
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
        };
    };
} & {
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
            status: 403;
        } | {
            input: {};
            output: {
                totalUsers: number;
                activeSubscribers: number;
                totalBasic: number;
                totalPro: number;
                totalPremium: number;
                newUsersThisMonth: number;
                newUsersThisWeek: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/analytics/ga4": {
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
            status: 403;
        } | {
            input: {};
            output: {
                metrics: {
                    totalVisitors: {
                        value: string;
                        change?: string | undefined;
                    };
                    pageViews: {
                        value: string;
                        change?: string | undefined;
                    };
                    avgSessionDuration: {
                        value: string;
                        change?: string | undefined;
                    };
                    bounceRate: {
                        value: string;
                        change?: string | undefined;
                    };
                    activeUsers: {
                        value: string;
                    };
                    conversionRate: {
                        value: string;
                        change?: string | undefined;
                    };
                };
                topPages: {
                    page: string;
                    views: string;
                    change: string;
                }[];
                trafficSources: {
                    source: string;
                    visitors: string;
                    percentage: string;
                }[];
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/user-chart": {
        $get: {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                period: string;
                data: {
                    label: string;
                    visitors: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/geography": {
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
            status: 403;
        } | {
            input: {};
            output: {
                countries: {
                    country: string;
                    users: number;
                    percentage: string;
                }[];
                topCities: {
                    city: string;
                    country: string;
                    users: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/hourly-traffic": {
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
            status: 403;
        } | {
            input: {};
            output: {
                hours: {
                    hour: number;
                    users: number;
                    label: string;
                }[];
                peakHour: number;
                peakUsers: number;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/devices": {
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
            status: 403;
        } | {
            input: {};
            output: {
                devices: {
                    device: string;
                    users: number;
                    pageViews: number;
                    percentage: string;
                }[];
                totalUsers: number;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/sales": {
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
            status: 403;
        } | {
            input: {};
            output: {
                recentSubscriptions: {
                    id: string;
                    name: string;
                    email: string;
                    plan: string;
                    subscriptionStatus: string | null;
                    subscriptionId: string | null;
                    subscriptionCurrentPeriodEnd: string | null;
                    createdAt: string;
                }[];
                planBreakdown: {
                    basic: number;
                    pro: number;
                    premium: number;
                };
                activeSubscriptions: number;
                cancelledSubscriptions: number;
                expiredSubscriptions: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/reviews": {
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
            status: 403;
        } | {
            input: {};
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
                userEmail?: string | undefined;
            }[];
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/reviews/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    status: "approved" | "rejected";
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
            } & {
                json: {
                    status: "approved" | "rejected";
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
            } & {
                json: {
                    status: "approved" | "rejected";
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    status: "approved" | "rejected";
                };
            };
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    [x: string]: {
        $get: {
            input: {
                param: {
                    [x: string]: string;
                };
            };
            output: {
                timestamp: string;
                checks: any;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                param: {
                    [x: string]: string;
                };
            };
            output: {
                timestamp: string;
                checks: any;
            };
            outputFormat: "json";
            status: 500;
        };
    };
}, "/api/admin"> & import("hono/types").MergeSchemaPath<{
    "/create-subscription": {
        $post: {
            input: {
                json: {
                    plan?: "pro" | "premium" | undefined;
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
                    plan?: "pro" | "premium" | undefined;
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
                    plan?: "pro" | "premium" | undefined;
                };
            };
            output: {
                subscriptionId: string;
                approvalUrl: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/subscription": {
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
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {};
            output: {
                plan: "basic" | "pro" | "premium";
                subscriptionId: string | null;
                subscriptionStatus: "active" | "cancelled" | "expired" | null;
                subscriptionCurrentPeriodEnd: string | null;
                paypalData: any;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/cancel-subscription": {
        $post: {
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
                message: string;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 400;
        };
    };
} & {
    "/verify-subscription": {
        $post: {
            input: {
                json: {
                    subscriptionId: string;
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
                    subscriptionId: string;
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
                    subscriptionId: string;
                };
            };
            output: {
                plan: "basic" | "pro" | "premium";
                subscriptionStatus: "active" | "cancelled" | "expired" | null;
                activated: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/webhook": {
        $post: {
            input: {
                json: any;
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                json: any;
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                json: any;
            };
            output: {
                received: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/credits": {
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
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {};
            output: {
                creditsRemaining: number;
                creditsUsed: number;
                creditLimit: number;
                plan: string;
                nextResetAt: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api/billing"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    sort?: "asc" | "desc" | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                data: {
                    id: number;
                    name: string;
                    done: boolean;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
                meta: {
                    currentPage: number;
                    limit: number;
                    totalCount: number;
                    totalPages: number;
                };
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    sort?: "asc" | "desc" | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    name: string;
                    done?: boolean | undefined;
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
                    done?: boolean | undefined;
                };
            };
            output: {
                id: number;
                name: string;
                done: boolean;
                createdAt: string;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 201;
        } | {
            input: {
                json: {
                    name: string;
                    done?: boolean | undefined;
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
                    done?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 422;
        };
    };
} & {
    "/:id": {
        $get: {
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
            status: 422;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                id: number;
                name: string;
                done: boolean;
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
            };
            outputFormat: "json";
            status: 404;
        };
    };
} & {
    "/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 422;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
                };
            };
            output: {
                id: number;
                name: string;
                done: boolean;
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
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
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
            output: {};
            outputFormat: string;
            status: 204;
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
            status: 422;
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
        };
    };
}, "/api/tasks"> & import("hono/types").MergeSchemaPath<import("hono/types").MergeSchemaPath<{
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
}, "/facebook">, "/api/social"> & import("hono/types").MergeSchemaPath<{
    "/repurpose": {
        $post: {
            input: {
                json: {
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
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
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
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
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
                };
            };
            output: {
                twitter?: string | undefined;
                linkedin?: string | undefined;
                instagram?: string | undefined;
                facebook?: string | undefined;
                email?: string | undefined;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
                };
            };
            output: {
                message: string;
                upgradeUrl?: string | undefined;
                code?: string | undefined;
            };
            outputFormat: "json";
            status: 403;
        };
    };
}, "/api/repurposer"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                message: string;
                auth: {
                    user: any;
                    session: any;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api">, "/api">;
export declare const router: import("@hono/zod-openapi").OpenAPIHono<import("@/types").APIBindings, import("hono/types").MergeSchemaPath<{}, "/api/cover-letter"> & import("hono/types").MergeSchemaPath<{}, "/api/cv"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/services"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/tiktok"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/thumbnail"> & import("hono/types").MergeSchemaPath<{
    "/generate": {
        $post: {
            input: {
                json: {
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
                };
            };
            output: Response;
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        } | {
            input: {
                json: {
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
                    fromName: string;
                    fromEmail: string;
                    clientName: string;
                    invoiceNumber: string;
                    issueDate: string;
                    items: {
                        description: string;
                        quantity: number;
                        rate: number;
                    }[];
                    fromAddress?: string | undefined;
                    fromPhone?: string | undefined;
                    clientEmail?: string | undefined;
                    clientAddress?: string | undefined;
                    clientPhone?: string | undefined;
                    dueDate?: string | undefined;
                    includeDueDate?: boolean | undefined;
                    currency?: "USD" | "EUR" | "GBP" | "INR" | "AUD" | "CAD" | "LKR" | undefined;
                    templateType?: "standard" | "hourly" | undefined;
                    colorTheme?: "blue" | "green" | "purple" | "orange" | "red" | "teal" | "pink" | "sky" | "mint" | "lavender" | "coral" | "amber" | undefined;
                    hourlyItems?: {
                        description: string;
                        hours: number;
                        rate: number;
                    }[] | undefined;
                    taxPercent?: number | undefined;
                    discountPercent?: number | undefined;
                    notes?: string | undefined;
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
}, "/api/invoice"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/image-conversion"> & import("hono/types").MergeSchemaPath<{
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
    "/compress": {
        $post: {
            input: {
                json: {
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
}, "/api/pdf-compression"> & import("hono/types").MergeSchemaPath<{
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
                };
            };
            output: {
                id: string;
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
                    fileName?: string | undefined;
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
}, "/api/bg-removal"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $post: {
            input: {
                json: {
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 201;
        } | {
            input: {
                json: {
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
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
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
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
                    title: string;
                    content: string;
                    excerpt: string;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 422;
        };
    };
} & {
    "/": {
        $get: {
            input: {
                query: {
                    status?: "pending" | "approved" | "rejected" | "draft" | undefined;
                };
            };
            output: {
                error: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                query: {
                    status?: "pending" | "approved" | "rejected" | "draft" | undefined;
                };
            };
            output: {
                posts: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/public": {
        $get: {
            input: {};
            output: {
                posts: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/public/:slug": {
        $get: {
            input: {
                param: {
                    slug: string;
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
                    slug: string;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/:id": {
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
            status: 401;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
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
            status: 403;
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
    "/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
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
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
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
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
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
                    id: string;
                };
            } & {
                json: {
                    title?: string | undefined;
                    content?: string | undefined;
                    excerpt?: string | undefined;
                    featuredImage?: string | undefined;
                    tags?: string | undefined;
                    metaTitle?: string | undefined;
                    metaDescription?: string | undefined;
                    status?: "pending" | "draft" | undefined;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
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
            status: 403;
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
        };
    };
} & {
    "/:id/submit": {
        $post: {
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
            status: 403;
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
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/:id/approve": {
        $post: {
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
                error: string;
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
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/:id/reject": {
        $post: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    reason?: string | undefined;
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
            } & {
                json: {
                    reason?: string | undefined;
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
                    id: string;
                };
            } & {
                json: {
                    reason?: string | undefined;
                };
            };
            output: {
                post: {
                    id: string;
                    title: string;
                    slug: string;
                    content: string;
                    excerpt: string;
                    authorId: string;
                    status: "pending" | "approved" | "rejected" | "draft";
                    featuredImage: string | null;
                    metaTitle: string | null;
                    metaDescription: string | null;
                    tags: string | null;
                    readingTime: string | null;
                    views: string | null;
                    rejectionReason: string | null;
                    approvedAt: string | null;
                    approvedBy: string | null;
                    publishedAt: string | null;
                    createdAt: string;
                    updatedAt: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api/blog"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
            }[];
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    content: string;
                    rating: number;
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
                    content: string;
                    rating: number;
                };
            };
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api/reviews"> & import("hono/types").MergeSchemaPath<{
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
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
                    fileName?: string | undefined;
                };
            };
            output: {
                id: string;
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
                    fileName?: string | undefined;
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
}, "/api/crops"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/qr"> & import("hono/types").MergeSchemaPath<{
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
}, "/api/signatures"> & import("hono/types").MergeSchemaPath<{
    "/users": {
        $get: {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                users: {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    role: string | null;
                    plan: string;
                    subscriptionStatus: string | null;
                    subscriptionId: string | null;
                    createdAt: string;
                    banned: boolean | null;
                }[];
                total: number;
                page: number;
                limit: number;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        };
    };
} & {
    "/users": {
        $post: {
            input: {
                json: {
                    name: string;
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
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
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
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
                    name: string;
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                json: {
                    name: string;
                    email: string;
                    password: string;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                };
            };
            output: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: string | null;
                plan: string;
                subscriptionStatus: string | null;
                subscriptionId: string | null;
                createdAt: string;
                banned: boolean | null;
            };
            outputFormat: "json";
            status: 201;
        };
    };
} & {
    "/users/:id": {
        $get: {
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
            status: 403;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: string | null;
                plan: string;
                subscriptionStatus: string | null;
                subscriptionId: string | null;
                createdAt: string;
                banned: boolean | null;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/users/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 400;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    email?: string | undefined;
                    role?: "user" | "admin" | "agent" | undefined;
                    plan?: "basic" | "pro" | "premium" | undefined;
                    emailVerified?: boolean | undefined;
                    password?: string | undefined;
                    banned?: boolean | undefined;
                    banReason?: string | undefined;
                };
            };
            output: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                role: string | null;
                plan: string;
                subscriptionStatus: string | null;
                subscriptionId: string | null;
                createdAt: string;
                banned: boolean | null;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/users/:id": {
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
            status: 400;
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
            status: 403;
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
        };
    };
} & {
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
            status: 403;
        } | {
            input: {};
            output: {
                totalUsers: number;
                activeSubscribers: number;
                totalBasic: number;
                totalPro: number;
                totalPremium: number;
                newUsersThisMonth: number;
                newUsersThisWeek: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/analytics/ga4": {
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
            status: 403;
        } | {
            input: {};
            output: {
                metrics: {
                    totalVisitors: {
                        value: string;
                        change?: string | undefined;
                    };
                    pageViews: {
                        value: string;
                        change?: string | undefined;
                    };
                    avgSessionDuration: {
                        value: string;
                        change?: string | undefined;
                    };
                    bounceRate: {
                        value: string;
                        change?: string | undefined;
                    };
                    activeUsers: {
                        value: string;
                    };
                    conversionRate: {
                        value: string;
                        change?: string | undefined;
                    };
                };
                topPages: {
                    page: string;
                    views: string;
                    change: string;
                }[];
                trafficSources: {
                    source: string;
                    visitors: string;
                    percentage: string;
                }[];
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/user-chart": {
        $get: {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                period: string;
                data: {
                    label: string;
                    visitors: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                query: {
                    period?: "daily" | "weekly" | "monthly" | "yearly" | undefined;
                };
            };
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/geography": {
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
            status: 403;
        } | {
            input: {};
            output: {
                countries: {
                    country: string;
                    users: number;
                    percentage: string;
                }[];
                topCities: {
                    city: string;
                    country: string;
                    users: number;
                }[];
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/hourly-traffic": {
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
            status: 403;
        } | {
            input: {};
            output: {
                hours: {
                    hour: number;
                    users: number;
                    label: string;
                }[];
                peakHour: number;
                peakUsers: number;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/analytics/devices": {
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
            status: 403;
        } | {
            input: {};
            output: {
                devices: {
                    device: string;
                    users: number;
                    pageViews: number;
                    percentage: string;
                }[];
                totalUsers: number;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                error: string;
                details?: string | undefined;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/sales": {
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
            status: 403;
        } | {
            input: {};
            output: {
                recentSubscriptions: {
                    id: string;
                    name: string;
                    email: string;
                    plan: string;
                    subscriptionStatus: string | null;
                    subscriptionId: string | null;
                    subscriptionCurrentPeriodEnd: string | null;
                    createdAt: string;
                }[];
                planBreakdown: {
                    basic: number;
                    pro: number;
                    premium: number;
                };
                activeSubscriptions: number;
                cancelledSubscriptions: number;
                expiredSubscriptions: number;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/reviews": {
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
            status: 403;
        } | {
            input: {};
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
                userEmail?: string | undefined;
            }[];
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/reviews/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    status: "approved" | "rejected";
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
            } & {
                json: {
                    status: "approved" | "rejected";
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
            } & {
                json: {
                    status: "approved" | "rejected";
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 403;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    status: "approved" | "rejected";
                };
            };
            output: {
                id: string;
                userId: string;
                userName: string | null;
                content: string;
                rating: number;
                status: "pending" | "approved" | "rejected";
                createdAt: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    [x: string]: {
        $get: {
            input: {
                param: {
                    [x: string]: string;
                };
            };
            output: {
                timestamp: string;
                checks: any;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                param: {
                    [x: string]: string;
                };
            };
            output: {
                timestamp: string;
                checks: any;
            };
            outputFormat: "json";
            status: 500;
        };
    };
}, "/api/admin"> & import("hono/types").MergeSchemaPath<{
    "/create-subscription": {
        $post: {
            input: {
                json: {
                    plan?: "pro" | "premium" | undefined;
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
                    plan?: "pro" | "premium" | undefined;
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
                    plan?: "pro" | "premium" | undefined;
                };
            };
            output: {
                subscriptionId: string;
                approvalUrl: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/subscription": {
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
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {};
            output: {
                plan: "basic" | "pro" | "premium";
                subscriptionId: string | null;
                subscriptionStatus: "active" | "cancelled" | "expired" | null;
                subscriptionCurrentPeriodEnd: string | null;
                paypalData: any;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/cancel-subscription": {
        $post: {
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
                message: string;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {};
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 400;
        };
    };
} & {
    "/verify-subscription": {
        $post: {
            input: {
                json: {
                    subscriptionId: string;
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
                    subscriptionId: string;
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
                    subscriptionId: string;
                };
            };
            output: {
                plan: "basic" | "pro" | "premium";
                subscriptionStatus: "active" | "cancelled" | "expired" | null;
                activated: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/webhook": {
        $post: {
            input: {
                json: any;
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        } | {
            input: {
                json: any;
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 401;
        } | {
            input: {
                json: any;
            };
            output: {
                received: boolean;
            };
            outputFormat: "json";
            status: 200;
        };
    };
} & {
    "/credits": {
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
                message: string;
            };
            outputFormat: "json";
            status: 404;
        } | {
            input: {};
            output: {
                creditsRemaining: number;
                creditsUsed: number;
                creditLimit: number;
                plan: string;
                nextResetAt: string;
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api/billing"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    sort?: "asc" | "desc" | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                data: {
                    id: number;
                    name: string;
                    done: boolean;
                    createdAt: string;
                    updatedAt: string | null;
                }[];
                meta: {
                    currentPage: number;
                    limit: number;
                    totalCount: number;
                    totalPages: number;
                };
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                query: {
                    page?: string | undefined;
                    limit?: string | undefined;
                    sort?: "asc" | "desc" | undefined;
                    search?: string | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 500;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    name: string;
                    done?: boolean | undefined;
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
                    done?: boolean | undefined;
                };
            };
            output: {
                id: number;
                name: string;
                done: boolean;
                createdAt: string;
                updatedAt: string | null;
            };
            outputFormat: "json";
            status: 201;
        } | {
            input: {
                json: {
                    name: string;
                    done?: boolean | undefined;
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
                    done?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 422;
        };
    };
} & {
    "/:id": {
        $get: {
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
            status: 422;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                id: number;
                name: string;
                done: boolean;
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
            };
            outputFormat: "json";
            status: 404;
        };
    };
} & {
    "/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
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
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 422;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
                };
            };
            output: {
                id: number;
                name: string;
                done: boolean;
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
            } & {
                json: {
                    name?: string | undefined;
                    done?: boolean | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: 404;
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
            output: {};
            outputFormat: string;
            status: 204;
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
            status: 422;
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
        };
    };
}, "/api/tasks"> & import("hono/types").MergeSchemaPath<import("hono/types").MergeSchemaPath<{
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
}, "/facebook">, "/api/social"> & import("hono/types").MergeSchemaPath<{
    "/repurpose": {
        $post: {
            input: {
                json: {
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
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
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
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
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
                };
            };
            output: {
                twitter?: string | undefined;
                linkedin?: string | undefined;
                instagram?: string | undefined;
                facebook?: string | undefined;
                email?: string | undefined;
            };
            outputFormat: "json";
            status: 200;
        } | {
            input: {
                json: {
                    content: string;
                    formats: ("email" | "facebook" | "twitter" | "linkedin" | "instagram")[];
                    tone?: "professional" | "casual" | "humorous" | "inspiring" | undefined;
                };
            };
            output: {
                message: string;
                upgradeUrl?: string | undefined;
                code?: string | undefined;
            };
            outputFormat: "json";
            status: 403;
        };
    };
}, "/api/repurposer"> & import("hono/types").MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: {
                message: string;
                auth: {
                    user: any;
                    session: any;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
}, "/api">, "/api">;
export type Router = typeof router;
