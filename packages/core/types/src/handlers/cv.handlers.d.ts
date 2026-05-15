import type { APIRouteHandler } from "./types";
import type { SaveCVRoute, GetProfileRoute, GenerateATSPdfRoute, GenerateStyledPdfRoute } from "./routes/cv.routes";
export declare const saveCV: APIRouteHandler<SaveCVRoute>;
export declare const getProfile: APIRouteHandler<GetProfileRoute>;
export declare const generateATSPdf: APIRouteHandler<GenerateATSPdfRoute>;
export declare const generateStyledPdf: APIRouteHandler<GenerateStyledPdfRoute>;
