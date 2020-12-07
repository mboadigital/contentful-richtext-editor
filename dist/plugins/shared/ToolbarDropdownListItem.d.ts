export default class ToolbarDropdownListItem {
    static propTypes: {
        isActive: any;
        onToggle: any;
        title: any;
        type: any;
        children: any;
    };
    handleClick: (event: any) => void;
    render(): any;
}
