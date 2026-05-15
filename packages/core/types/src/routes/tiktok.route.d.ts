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
export declare const fetchThumbnail: {
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
                        thumbnailUrl: z.ZodString;
                        title: z.ZodString;
                        authorName: z.ZodString;
                        authorUrl: z.ZodString;
                        thumbnailWidth: z.ZodNumber;
                        thumbnailHeight: z.ZodNumber;
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
        403: {
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
export type FetchThumbnailRoute = typeof fetchThumbnail;
export type DownloadRoute = typeof download;
