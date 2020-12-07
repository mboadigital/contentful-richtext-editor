export namespace LINK_TYPES {
    export const URI: string;
    export const ENTRY: string;
    export const ASSET: string;
}
export class HyperlinkDialog {
    static propTypes: {
        sdk: any;
        labels: any;
        value: any;
        entitySelectorConfigs: any;
        allowedHyperlinkTypes: any;
        hideText: any;
        onClose: any;
    };
    static defaultProps: {
        labels: {
            title: string;
            confirm: string;
        };
        value: {};
        hideText: boolean;
        entitySelectorConfigs: {};
        allowedHyperlinkTypes: string[];
    };
    constructor(props: any);
    state: {
        text: any;
        uri: any;
        entityLinks: {
            [x: string]: null;
        };
        type: any;
    };
    setTargetEntity(type: any, entity: any): void;
    getValue(): {
        type: any;
    };
    isLinkComplete(): any;
    handleSubmit: (event: any) => void;
    selectEntry: () => Promise<void>;
    selectAsset: () => Promise<void>;
    render(): any;
    renderFields(): any;
    renderEntityField(): any;
    renderEntitySelector(type: any): any;
}
export function openHyperlinkDialog(dialogs: any, { value, showTextInput, allowedHyperlinkTypes, entitySelectorConfigs }: {
    value: any;
    showTextInput: any;
    allowedHyperlinkTypes: any;
    entitySelectorConfigs: any;
}): any;
