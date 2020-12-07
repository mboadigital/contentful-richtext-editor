export function toggleChange(editor: any, type: any): boolean;
declare function _default({ type, title, icon, applyChange, isActive }: {
    type: any;
    title: any;
    icon: any;
    applyChange?: ((editor: any, type: any) => boolean) | undefined;
    isActive?: ((editor: any, type: any) => any) | undefined;
}): (Block: any) => {
    new (): {
        handleToggle: (event: any) => any;
        render(): any;
    };
    propTypes: any;
};
export default _default;
