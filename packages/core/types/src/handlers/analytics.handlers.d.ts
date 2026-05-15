import type { GetGA4AnalyticsRoute, GetGA4UserChartRoute, GetGA4GeographyRoute, GetGA4HourlyTrafficRoute, GetGA4DevicesRoute } from "../routes/admin.route";
import type { APIRouteHandler } from "../types";
/**
 * Get Google Analytics data for admin dashboard
 * @route GET /api/admin/analytics/ga4
 */
export declare const getAnalyticsData: APIRouteHandler<GetGA4AnalyticsRoute>;
/**
 * Get time-series visitor count for the user count chart
 * @route GET /api/admin/analytics/user-chart?period=daily|weekly|monthly|yearly
 */
export declare const getUserChartData: APIRouteHandler<GetGA4UserChartRoute>;
/**
 * Get geographical analytics data
 * @route GET /api/admin/analytics/geography
 */
export declare const getGeographyAnalytics: APIRouteHandler<GetGA4GeographyRoute>;
/**
 * Get hourly traffic analytics
 * @route GET /api/admin/analytics/hourly-traffic
 */
export declare const getHourlyTrafficAnalytics: APIRouteHandler<GetGA4HourlyTrafficRoute>;
/**
 * Get device breakdown analytics
 * @route GET /api/admin/analytics/devices
 */
export declare const getDeviceAnalytics: APIRouteHandler<GetGA4DevicesRoute>;
