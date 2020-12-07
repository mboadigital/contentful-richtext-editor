declare function _default({ type, title, icon, applyChange }: {
    type: any;
    title: any;
    icon: any;
    applyChange?: ((editor: any, type: any) => any) | undefined;
}): (Block: any) => {
    new (): {
        handleSelect: (event: any) => any;
        render(): any;
    };
    propTypes: any;
};
export default _default;
