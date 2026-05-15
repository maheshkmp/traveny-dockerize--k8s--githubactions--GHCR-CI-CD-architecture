import type { APIRouteHandler } from "./types";
import type { SaveCoverLetterRoute, ListCoverLettersRoute, GetCoverLetterRoute, UpdateCoverLetterRoute, DeleteCoverLetterRoute, DownloadCoverLetterRoute, AiGenerateCoverLetterRoute } from "./routes/cover-letter.routes";
export declare const saveCoverLetter: APIRouteHandler<SaveCoverLetterRoute>;
export declare const listCoverLetters: APIRouteHandler<ListCoverLettersRoute>;
export declare const getCoverLetter: APIRouteHandler<GetCoverLetterRoute>;
export declare const updateCoverLetter: APIRouteHandler<UpdateCoverLetterRoute>;
export declare const deleteCoverLetter: APIRouteHandler<DeleteCoverLetterRoute>;
export declare const downloadCoverLetter: APIRouteHandler<DownloadCoverLetterRoute>;
export declare const aiGenerateCoverLetter: APIRouteHandler<AiGenerateCoverLetterRoute>;
