declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
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
}, "/">;
export default router;
