import type { APIRouteHandler } from "./types";
import type { CompressRoute, UsageRoute } from "./routes/pdf-compression.route";
export declare const usage: APIRouteHandler<UsageRoute>;
export declare const compress: APIRouteHandler<CompressRoute>;
