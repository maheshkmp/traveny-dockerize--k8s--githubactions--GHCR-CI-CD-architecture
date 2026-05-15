import type { APIRouteHandler } from "./types";
import type { FetchRoute, DownloadRoute, StatsRoute } from "./routes/thumbnail.route";
export declare const stats: APIRouteHandler<StatsRoute>;
export declare const fetchThumbnails: APIRouteHandler<FetchRoute>;
export declare const download: APIRouteHandler<DownloadRoute>;
