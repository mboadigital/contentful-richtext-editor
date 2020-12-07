declare function RichTextEditor(props: any): any;
declare namespace RichTextEditor {
    export namespace defaultProps {
        export const isInitiallyDisabled: boolean;
    }
}
export default RichTextEditor;
export class ConnectedRichTextEditor {
    static propTypes: {
        sdk: any;
        value: any;
        isDisabled: any;
        onChange: any;
        onAction: any;
        isToolbarHidden: any;
        actionsDisabled: any;
    };
    static defaultProps: {
        value: import("@contentful/rich-text-types").Document;
        onChange: any;
        onAction: any;
        isDisabled: boolean;
        isToolbarHidden: boolean;
        actionsDisabled: boolean;
    };
    state: {
        lastOperations: List<any>;
        value: any;
    };
    editor: any;
    richTextAPI: {
        sdk: {
            object: any;
        };
        logViewportAction: {
            function: any;
        };
        createActionLogger: {
            function: any;
        };
    };
    slatePlugins: any[];
    onChange: (editor: any) => void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    callOnChange: any;
    componentDidUpdate(prevProps: any): void;
    handleKeyDown: (event: any, editor: any, next: any) => any;
    render(): any;
}
import { List } from "immutable";
