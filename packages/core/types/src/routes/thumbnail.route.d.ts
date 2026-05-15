import { z } from "@hono/zod-openapi";
export declare const stats: {
    tags: string[];
    summary: string;
    description: string;
    path: "/stats";
    method: "get";
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        count: z.ZodNumber;
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
    getRoutingPath(): "/stats";
};
export declare const fetch: {
    tags: string[];
    summary: string;
    description: string;
    path: "/fetch";
    method: "post";
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        url: z.ZodString;
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
                        videoId: z.ZodString;
                        title: z.ZodOptional<z.ZodString>;
                        thumbnails: z.ZodArray<z.ZodObject<{
                            resolution: z.ZodEnum<{
                                default: "default";
                                maxres: "maxres";
                                hq: "hq";
                                sd: "sd";
                                mq: "mq";
                            }>;
                            url: z.ZodString;
                            width: z.ZodNumber;
                            height: z.ZodNumber;
                            label: z.ZodString;
                            available: z.ZodBoolean;
                        }, z.core.$strip>>;
                    }, z.core.$strip>;
                };
            };
            description: string;
        };
        400: {
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
    getRoutingPath(): "/fetch";
};
export declare const download: {
    tags: string[];
    summary: string;
    description: string;
    path: "/download";
    method: "get";
    request: {
        query: z.ZodObject<{
            url: z.ZodString;
        }, z.core.$strip>;
    };
    responses: {
        200: {
            description: string;
            content: {
                "image/jpeg": {
                    schema: {
                        type: "string";
                        format: string;
                    };
                };
            };
        };
        400: {
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
    getRoutingPath(): "/download";
};
export type StatsRoute = typeof stats;
export type FetchRoute = typeof fetch;
export type DownloadRoute = typeof download;
