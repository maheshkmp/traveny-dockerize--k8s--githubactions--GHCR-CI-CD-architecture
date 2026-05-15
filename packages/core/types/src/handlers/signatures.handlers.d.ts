import type { APIRouteHandler } from "./types";
import type { ListRoute, CreateRoute, RemoveRoute, SetDefaultRoute, UseRoute, AnalyticsRoute, PdfEmbedRoute } from "./routes/signatures.route";
export declare const list: APIRouteHandler<ListRoute>;
export declare const create: APIRouteHandler<CreateRoute>;
export declare const remove: APIRouteHandler<RemoveRoute>;
export declare const setDefault: APIRouteHandler<SetDefaultRoute>;
export declare const use: APIRouteHandler<UseRoute>;
export declare const analyticsHandler: APIRouteHandler<AnalyticsRoute>;
export declare const pdfEmbedHandler: APIRouteHandler<PdfEmbedRoute>;
