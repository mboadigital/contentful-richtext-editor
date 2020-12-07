export default QuotePlugin;
declare function QuotePlugin({ type, richTextAPI: { logShortcutAction } }: {
    type?: any;
    richTextAPI: {
        logShortcutAction: any;
    };
}): {
    renderNode: (props: any, _editor: any, next: any) => any;
    onKeyDown: (e: any, editor: any, next: any) => any;
};
