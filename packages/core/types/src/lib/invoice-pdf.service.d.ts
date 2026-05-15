import type { InvoiceData } from "core/zod";
export declare function generateInvoicePDF(data: InvoiceData, isPro?: boolean): Promise<Uint8Array>;
