export function CommandPalettePlugin({ richTextAPI }: {
    richTextAPI: any;
}): {
    decorateNode: (_node: any, editor: any, next: any) => any[];
    renderMark: (props: any, editor: any, next: any) => any;
    renderEditor: (_props: any, editor: any, next: any) => any;
};
