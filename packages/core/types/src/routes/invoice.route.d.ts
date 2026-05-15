import { z } from "@hono/zod-openapi";
export declare const generate: {
    tags: string[];
    summary: string;
    path: "/generate";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        fromName: z.ZodString;
                        fromEmail: z.ZodString;
                        fromAddress: z.ZodOptional<z.ZodString>;
                        fromPhone: z.ZodOptional<z.ZodString>;
                        clientName: z.ZodString;
                        clientEmail: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                        clientAddress: z.ZodOptional<z.ZodString>;
                        clientPhone: z.ZodOptional<z.ZodString>;
                        invoiceNumber: z.ZodString;
                        issueDate: z.ZodString;
                        dueDate: z.ZodOptional<z.ZodString>;
                        includeDueDate: z.ZodDefault<z.ZodBoolean>;
                        currency: z.ZodDefault<z.ZodEnum<{
                            USD: "USD";
                            EUR: "EUR";
                            GBP: "GBP";
                            INR: "INR";
                            AUD: "AUD";
                            CAD: "CAD";
                            LKR: "LKR";
                        }>>;
                        templateType: z.ZodDefault<z.ZodEnum<{
                            standard: "standard";
                            hourly: "hourly";
                        }>>;
                        colorTheme: z.ZodDefault<z.ZodEnum<{
                            blue: "blue";
                            green: "green";
                            purple: "purple";
                            orange: "orange";
                            red: "red";
                            teal: "teal";
                            pink: "pink";
                            sky: "sky";
                            mint: "mint";
                            lavender: "lavender";
                            coral: "coral";
                            amber: "amber";
                        }>>;
                        items: z.ZodArray<z.ZodObject<{
                            description: z.ZodString;
                            quantity: z.ZodNumber;
                            rate: z.ZodNumber;
                        }, z.core.$strip>>;
                        hourlyItems: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
                            description: z.ZodString;
                            hours: z.ZodNumber;
                            rate: z.ZodNumber;
                        }, z.core.$strip>>>>;
                        taxPercent: z.ZodDefault<z.ZodNumber>;
                        discountPercent: z.ZodDefault<z.ZodNumber>;
                        notes: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
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
    getRoutingPath(): "/generate";
};
export type GenerateRoute = typeof generate;
