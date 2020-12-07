export class CommandPanel {
    static propTypes: {
        items: any;
        searchString: any;
        className: any;
        testId: any;
        isLoading: any;
        isUpdating: any;
        breadcrumb: any;
        richTextAPI: any;
        onClose: any;
    };
    static defaultProps: {
        className: undefined;
        searchString: string;
        items: never[];
        testId: string;
        isLoading: boolean;
        isUpdating: boolean;
    };
    static getDerivedStateFromProps(props: any, state: any): {
        originalItems: any;
        originalSearchString: any;
        items: any;
        selectedKey: any;
    };
    state: {
        selectedKey: number;
        items: never[];
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleKeyboard: (e: any) => void;
    renderGroups(): any;
    renderItems(groupName: any): any[];
    renderNavigationBar: () => any;
    renderStatusBar: () => any;
    renderSkeleton: () => any;
    render(): any;
}
export default CommandPanel;
