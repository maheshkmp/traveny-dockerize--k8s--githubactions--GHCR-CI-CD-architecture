import { z } from "@hono/zod-openapi";
export declare const saveCV: {
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
                        fullName: z.ZodString;
                        jobTitle: z.ZodString;
                        email: z.ZodString;
                        phone: z.ZodOptional<z.ZodString>;
                        location: z.ZodOptional<z.ZodString>;
                        linkedIn: z.ZodOptional<z.ZodString>;
                        github: z.ZodOptional<z.ZodString>;
                        portfolio: z.ZodOptional<z.ZodString>;
                        summaryText: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                        skills: z.ZodObject<{
                            languages: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frameworks: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frontend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            backend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            database: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            tools: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            cloud: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            soft: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                        }, z.core.$strip>;
                        experience: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            company: z.ZodString;
                            role: z.ZodString;
                            startDate: z.ZodString;
                            endDate: z.ZodString;
                            isCurrent: z.ZodDefault<z.ZodBoolean>;
                            location: z.ZodOptional<z.ZodString>;
                            bullets: z.ZodArray<z.ZodString>;
                        }, z.core.$strip>>;
                        projects: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                            techStack: z.ZodArray<z.ZodString>;
                            githubUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            liveUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            bullets: z.ZodArray<z.ZodString>;
                            companyRef: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        education: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            institution: z.ZodString;
                            degree: z.ZodString;
                            field: z.ZodString;
                            startYear: z.ZodString;
                            endYear: z.ZodString;
                            gpa: z.ZodOptional<z.ZodString>;
                            certificateUrl: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        certifications: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            issuer: z.ZodString;
                            year: z.ZodString;
                            url: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        achievements: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            title: z.ZodString;
                            description: z.ZodString;
                            year: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
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
export declare const getProfile: {
    tags: string[];
    summary: string;
    path: "/profile";
    method: "get";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        fullName: z.ZodString;
                        jobTitle: z.ZodString;
                        email: z.ZodString;
                        phone: z.ZodOptional<z.ZodString>;
                        location: z.ZodOptional<z.ZodString>;
                        linkedIn: z.ZodOptional<z.ZodString>;
                        github: z.ZodOptional<z.ZodString>;
                        portfolio: z.ZodOptional<z.ZodString>;
                        summaryText: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                        skills: z.ZodObject<{
                            languages: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frameworks: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frontend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            backend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            database: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            tools: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            cloud: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            soft: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                        }, z.core.$strip>;
                        experience: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            company: z.ZodString;
                            role: z.ZodString;
                            startDate: z.ZodString;
                            endDate: z.ZodString;
                            isCurrent: z.ZodDefault<z.ZodBoolean>;
                            location: z.ZodOptional<z.ZodString>;
                            bullets: z.ZodArray<z.ZodString>;
                        }, z.core.$strip>>;
                        projects: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                            techStack: z.ZodArray<z.ZodString>;
                            githubUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            liveUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            bullets: z.ZodArray<z.ZodString>;
                            companyRef: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        education: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            institution: z.ZodString;
                            degree: z.ZodString;
                            field: z.ZodString;
                            startYear: z.ZodString;
                            endYear: z.ZodString;
                            gpa: z.ZodOptional<z.ZodString>;
                            certificateUrl: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        certifications: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            issuer: z.ZodString;
                            year: z.ZodString;
                            url: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        achievements: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            title: z.ZodString;
                            description: z.ZodString;
                            year: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
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
    getRoutingPath(): "/profile";
};
export declare const generateATSPdf: {
    tags: string[];
    summary: string;
    path: "/generate/ats";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        fullName: z.ZodString;
                        jobTitle: z.ZodString;
                        email: z.ZodString;
                        phone: z.ZodOptional<z.ZodString>;
                        location: z.ZodOptional<z.ZodString>;
                        linkedIn: z.ZodOptional<z.ZodString>;
                        github: z.ZodOptional<z.ZodString>;
                        portfolio: z.ZodOptional<z.ZodString>;
                        summaryText: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                        skills: z.ZodObject<{
                            languages: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frameworks: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frontend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            backend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            database: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            tools: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            cloud: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            soft: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                        }, z.core.$strip>;
                        experience: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            company: z.ZodString;
                            role: z.ZodString;
                            startDate: z.ZodString;
                            endDate: z.ZodString;
                            isCurrent: z.ZodDefault<z.ZodBoolean>;
                            location: z.ZodOptional<z.ZodString>;
                            bullets: z.ZodArray<z.ZodString>;
                        }, z.core.$strip>>;
                        projects: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                            techStack: z.ZodArray<z.ZodString>;
                            githubUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            liveUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            bullets: z.ZodArray<z.ZodString>;
                            companyRef: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        education: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            institution: z.ZodString;
                            degree: z.ZodString;
                            field: z.ZodString;
                            startYear: z.ZodString;
                            endYear: z.ZodString;
                            gpa: z.ZodOptional<z.ZodString>;
                            certificateUrl: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        certifications: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            issuer: z.ZodString;
                            year: z.ZodString;
                            url: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        achievements: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            title: z.ZodString;
                            description: z.ZodString;
                            year: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
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
    getRoutingPath(): "/generate/ats";
};
export declare const generateStyledPdf: {
    tags: string[];
    summary: string;
    path: "/generate/styled";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        fullName: z.ZodString;
                        jobTitle: z.ZodString;
                        email: z.ZodString;
                        phone: z.ZodOptional<z.ZodString>;
                        location: z.ZodOptional<z.ZodString>;
                        linkedIn: z.ZodOptional<z.ZodString>;
                        github: z.ZodOptional<z.ZodString>;
                        portfolio: z.ZodOptional<z.ZodString>;
                        summaryText: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                        skills: z.ZodObject<{
                            languages: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frameworks: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            frontend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            backend: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            database: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            tools: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            cloud: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                            soft: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString>>>>;
                        }, z.core.$strip>;
                        experience: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            company: z.ZodString;
                            role: z.ZodString;
                            startDate: z.ZodString;
                            endDate: z.ZodString;
                            isCurrent: z.ZodDefault<z.ZodBoolean>;
                            location: z.ZodOptional<z.ZodString>;
                            bullets: z.ZodArray<z.ZodString>;
                        }, z.core.$strip>>;
                        projects: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            description: z.ZodOptional<z.ZodString>;
                            techStack: z.ZodArray<z.ZodString>;
                            githubUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            liveUrl: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
                            bullets: z.ZodArray<z.ZodString>;
                            companyRef: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        education: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            institution: z.ZodString;
                            degree: z.ZodString;
                            field: z.ZodString;
                            startYear: z.ZodString;
                            endYear: z.ZodString;
                            gpa: z.ZodOptional<z.ZodString>;
                            certificateUrl: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        certifications: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            name: z.ZodString;
                            issuer: z.ZodString;
                            year: z.ZodString;
                            url: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        achievements: z.ZodArray<z.ZodObject<{
                            id: z.ZodString;
                            title: z.ZodString;
                            description: z.ZodString;
                            year: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
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
    getRoutingPath(): "/generate/styled";
};
export declare const improveBullet: {
    tags: string[];
    summary: string;
    path: "/ai/improve-bullet";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        bullet: z.ZodString;
                        role: z.ZodString;
                        company: z.ZodOptional<z.ZodString>;
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
                        improved: z.ZodString;
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
    getRoutingPath(): "/ai/improve-bullet";
};
export declare const scanKeywords: {
    tags: string[];
    summary: string;
    path: "/ai/scan-keywords";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        jobDescription: z.ZodString;
                        cvProfileId: z.ZodString;
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
                        missingKeywords: z.ZodArray<z.ZodString>;
                        presentKeywords: z.ZodArray<z.ZodString>;
                        matchScore: z.ZodNumber;
                        topSuggestions: z.ZodArray<z.ZodString>;
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
    getRoutingPath(): "/ai/scan-keywords";
};
export declare const generateSummary: {
    tags: string[];
    summary: string;
    path: "/ai/generate-summary";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        cvProfileId: z.ZodString;
                        targetRole: z.ZodString;
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
                        summary: z.ZodString;
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
    getRoutingPath(): "/ai/generate-summary";
};
export declare const generateInterviewPrep: {
    tags: string[];
    summary: string;
    path: "/ai/interview-prep";
    method: "post";
    middleware: import("hono").MiddlewareHandler<import("../types").APIBindings>[];
    request: {
        body: {
            required: boolean;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        cvProfileId: z.ZodString;
                        targetRole: z.ZodString;
                        targetCompany: z.ZodOptional<z.ZodString>;
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
                        questions: z.ZodArray<z.ZodObject<{
                            question: z.ZodString;
                            answer: z.ZodString;
                            tip: z.ZodString;
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
    getRoutingPath(): "/ai/interview-prep";
};
export type SaveCVRoute = typeof saveCV;
export type GetProfileRoute = typeof getProfile;
export type GenerateATSPdfRoute = typeof generateATSPdf;
export type GenerateStyledPdfRoute = typeof generateStyledPdf;
export type ImproveBulletRoute = typeof improveBullet;
export type ScanKeywordsRoute = typeof scanKeywords;
export type GenerateSummaryRoute = typeof generateSummary;
export type GenerateInterviewPrepRoute = typeof generateInterviewPrep;
