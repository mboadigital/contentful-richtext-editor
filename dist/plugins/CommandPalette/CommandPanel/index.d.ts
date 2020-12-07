export default CommandPalette;
declare class CommandPalette {
    static propTypes: {
        editor: any;
        command: any;
        richTextAPI: any;
    };
    state: {
        anchorPosition: {
            top: number;
            left: number;
        };
        items: never[];
        isLoading: boolean;
        panelPosition: string;
    };
    paletteDimensions: {
        height: number;
        width: number;
    };
    componentDidMount(): Promise<void>;
    isComponentMounted: boolean | undefined;
    componentWillUnmount(): void;
    bindEventListeners: () => void;
    removeEventListeners: () => void;
    handleOutsideClick: (event: any) => void;
    requestUpdate: any;
    componentDidUpdate(): void;
    createCommand: (label: any, contentType: any, entry: any, type: any, description: any, thumbnail: any) => {
        label: string;
        thumbnail: any;
        contentType: any;
        callback: () => void;
    };
    onCreateAndEmbedEntity: (contentTypeId: any, nodeType: any) => Promise<any>;
    createContentTypeActions: (actionBuilder: any, contentType: any) => Promise<any[]>;
    createAssetActions: (actionBuilder: any) => Promise<any[]>;
    handleScroll: (e: any) => void;
    clearCommand: () => void;
    createCommands: (contentType: any, type: any, command: any) => Promise<void>;
    createInitialCommands: () => Promise<void>;
    handleKeyboard: (e: any) => void;
    render(): any;
    palette: any;
    updatePanelPosition(): void;
}
