export function PastePlugin({ richTextAPI: { logShortcutAction } }: {
    richTextAPI: {
        logShortcutAction: any;
    };
}): {
    onPaste(_event: any, editor: any, next: any): void;
};
