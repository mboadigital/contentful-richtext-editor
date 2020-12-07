declare function _default({ type, title, icon }: {
    type: any;
    title: any;
    icon: any;
}): (Mark: any) => {
    new (): {
        handleToggle: (event: any) => any;
        render(): any;
    };
    propTypes: any;
};
export default _default;
