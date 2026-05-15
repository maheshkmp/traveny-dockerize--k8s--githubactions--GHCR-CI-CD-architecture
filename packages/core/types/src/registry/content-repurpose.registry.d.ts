declare const router: import("@hono/zod-openapi").OpenAPIHono<import("../types").APIBindings, {
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
}, "/">;
export default router;
