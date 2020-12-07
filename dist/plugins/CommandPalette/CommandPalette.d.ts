export default CommandPalette;
declare class CommandPalette {
    static propTypes: {
        editor: any;
        richTextAPI: any;
    };
    constructor(props: any);
    state: {
        embedsEnabled: boolean;
    };
    render(): any;
}
