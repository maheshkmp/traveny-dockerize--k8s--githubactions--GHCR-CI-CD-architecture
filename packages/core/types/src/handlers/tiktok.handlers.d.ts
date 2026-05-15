import type { APIRouteHandler } from "./types";
import type { StatsRoute, FetchThumbnailRoute, DownloadRoute } from "./routes/tiktok.route";
export declare const stats: APIRouteHandler<StatsRoute>;
export declare const fetchThumbnail: APIRouteHandler<FetchThumbnailRoute>;
export declare const download: APIRouteHandler<DownloadRoute>;
