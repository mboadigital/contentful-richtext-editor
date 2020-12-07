export default class Toolbar {
    static propTypes: {
        richTextAPI: any;
        isDisabled: any;
        editor: any;
        onChange: any;
    };
    hasMounted: boolean;
    isReadyToSetFocusProgrammatically: boolean;
    state: {
        isAnyMarkEnabled: boolean;
        isAnyHyperlinkEnabled: boolean;
        isAnyListEnabled: boolean;
        headingMenuOpen: boolean;
        canAccessAssets: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onChange: (...args: any[]) => void;
    toggleEmbedDropdown: () => any;
    handleEmbedDropdownClose: () => any;
    renderEmbeds: (props: any) => any;
    toggleHeadingMenu: (event: any) => void;
    closeHeadingMenu: () => any;
    render(): any;
}
