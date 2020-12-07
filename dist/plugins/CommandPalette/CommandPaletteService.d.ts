export function fetchAssets(sdk: any, query?: string): Promise<any>;
export function fetchEntries(sdk: any, contentType: any, query?: string): Promise<[any, any, any, any, any, any, any, any, any, any]>;
export function isValidLinkedContentType(field: any, contentType: any, embedType: string): boolean;
export function isEmbeddingEnabled(field: any): boolean;
export class CommandPaletteActionBuilder {
    constructor(sdk: any);
    sdk: any;
    maybeBuildEmbedAction(embedType: any, contentType: any, callback: any): false | {
        label: string;
        group: any;
        callback: any;
        icon: string;
    };
    maybeBuildCreateAndEmbedAction(embedType: any, contentType: any, callback: any): Promise<false | {
        label: string;
        group: any;
        callback: any;
        icon: string;
    }>;
}
