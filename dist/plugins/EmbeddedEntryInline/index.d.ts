export default ToolbarIcon;
export function EmbeddedEntryInlinePlugin({ richTextAPI: { sdk, logShortcutAction, logViewportAction } }: {
    richTextAPI: {
        sdk: any;
        logShortcutAction: any;
        logViewportAction: any;
    };
}): {
    renderNode: (props: any, _editor: any, next: any) => any;
    onKeyDown: (event: any, editor: any, next: any) => any;
};
import ToolbarIcon from "./ToolbarIcon";
