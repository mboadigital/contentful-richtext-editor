/**
 * All known origins for Rich Text actions
 * @type {object}
 */
export const actionOrigin: object;
export function createRichTextAPI({ sdk, onAction }: object): {
    sdk: {
        object;
    };
    logViewportAction: {
        function;
    };
    createActionLogger: {
        function;
    };
    createActionLogger: {
        function;
    };
};
/**
 * Describes the prop types a Rich Text editor plugin can expect.
 * @type {object}
 */
export const EDITOR_PLUGIN_PROP_TYPES: object;
/**
 * Describes the prop types a Rich Text toolbar plugin can expect.
 * @type {object}
 */
export const TOOLBAR_PLUGIN_PROP_TYPES: object;
declare function createActionLogger(onAction: any, origin: any): (name: any, data: any) => void;
export {};
