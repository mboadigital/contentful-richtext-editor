export default ToolbarIcon;
export function HyperlinkPlugin({ richTextAPI }: {
    richTextAPI: any;
}): {
    renderNode: (props: any, _editor: any, next: any) => any;
    onKeyDown: (event: any, editor: any, next: any) => any;
    normalizeNode: (node: any, editor: any, next: any) => (() => void) | undefined;
};
import ToolbarIcon from "./ToolbarIcon";
