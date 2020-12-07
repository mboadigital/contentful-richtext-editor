/**
 * Invokes entity selector modal and inserts block embed.
 * @param {string} nodeType
 * @param {import('@contentful/field-editor-reference/dist/types').FieldExtensionSDK} sdk
 * @param {slate.Editor} editor
 * @param {function} logAction
 */
export function selectEntityAndInsert(nodeType: string, sdk: import('@contentful/field-editor-reference/dist/types').FieldExtensionSDK, editor: any, logAction: Function): Promise<void>;
export function insertBlock(editor: any, nodeType: any, entity: any, focusNextLine?: boolean): void;
export function hasBlockOfType(editor: any, type: string): boolean;
export function createNode(nodeType: any, entity: any): {
    type: any;
    object: string;
    data: {
        target: {
            sys: {
                id: any;
                type: string;
                linkType: any;
            };
        };
    };
};
