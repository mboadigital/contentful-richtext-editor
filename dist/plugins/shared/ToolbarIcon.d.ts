export default class ToolbarIcon {
    static propTypes: {
        isActive: any;
        disabled: any;
        onToggle: any;
        icon: any;
        title: any;
        type: any;
    };
    handleClick: (event: any) => void;
    render(): any;
}
