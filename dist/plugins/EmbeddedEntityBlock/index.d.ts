export default ToolbarIcon;
export function EmbeddedEntityBlockPlugin({ richTextAPI: { sdk, logShortcutAction, logViewportAction }, nodeType, hotkey }: {
    richTextAPI: {
        sdk: any;
        logShortcutAction: any;
        logViewportAction: any;
    };
    nodeType: any;
    hotkey: any;
}): {
    renderNode: (props: any, _editor: any, next: any) => any;
    onKeyDown(e: any, editor: any, next: any): any;
};
export function EmbeddedEntryBlockPlugin({ richTextAPI }: {
    richTextAPI: any;
}): {
    renderNode: (props: any, _editor: any, next: any) => any;
    onKeyDown(e: any, editor: any, next: any): any;
};
export function EmbeddedAssetBlockPlugin({ richTextAPI }: {
    richTextAPI: any;
}): {
    renderNode: (props: any, _editor: any, next: any) => any;
    onKeyDown(e: any, editor: any, next: any): any;
};
import ToolbarIcon from "./ToolbarIcon";
