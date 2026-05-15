import type { APIRouteHandler } from "./types";
import type { ImproveBulletRoute, ScanKeywordsRoute, GenerateSummaryRoute, GenerateInterviewPrepRoute } from "./routes/cv.routes";
export declare const improveBullet: APIRouteHandler<ImproveBulletRoute>;
export declare const scanKeywords: APIRouteHandler<ScanKeywordsRoute>;
export declare const generateSummary: APIRouteHandler<GenerateSummaryRoute>;
export declare const generateInterviewPrep: APIRouteHandler<GenerateInterviewPrepRoute>;
