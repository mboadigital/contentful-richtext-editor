export function CodePlugin({ richTextAPI }: {
    richTextAPI: any;
}): {
    renderMark: (props: any, _editor: any, next: any) => any;
    onKeyDown(event: any, editor: any, next: any): any;
};
declare var _default: {
    new (): {
        handleToggle: (event: any) => any;
        render(): any;
    };
    propTypes: any;
};
export default _default;
