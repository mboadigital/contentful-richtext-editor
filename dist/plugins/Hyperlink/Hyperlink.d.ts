export default class Hyperlink {
    static propTypes: {
        attributes: any;
        node: any;
        children: any;
        editor: any;
        richTextAPI: any;
        onEdit: any;
    };
    static defaultProps: {
        onEdit: any;
    };
    onKeyDown(e: any): void;
    render(): any;
    renderLink({ tooltip }: {
        tooltip: any;
    }): any;
    renderEntityLink(target: any): any;
}
