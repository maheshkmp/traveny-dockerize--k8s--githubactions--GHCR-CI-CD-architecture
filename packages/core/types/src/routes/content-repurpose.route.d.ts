import { z } from "@hono/zod-openapi";
export declare const repurposeRoute: {
    tags: string[];
    summary: string;
    path: "/repurpose";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        content: z.ZodString;
                        formats: z.ZodArray<z.ZodEnum<{
                            email: "email";
                            facebook: "facebook";
                            twitter: "twitter";
                            linkedin: "linkedin";
                            instagram: "instagram";
                        }>>;
                        tone: z.ZodDefault<z.ZodEnum<{
                            professional: "professional";
                            casual: "casual";
                            humorous: "humorous";
                            inspiring: "inspiring";
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
                        twitter: z.ZodOptional<z.ZodString>;
                        linkedin: z.ZodOptional<z.ZodString>;
                        instagram: z.ZodOptional<z.ZodString>;
                        facebook: z.ZodOptional<z.ZodString>;
                        email: z.ZodOptional<z.ZodString>;
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
                        code: z.ZodOptional<z.ZodString>;
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
    getRoutingPath(): "/repurpose";
};
export type RepurposeRoute = typeof repurposeRoute;
