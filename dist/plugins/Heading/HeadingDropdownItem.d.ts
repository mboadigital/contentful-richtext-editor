export default function newHeadingDropdownItem(nodeType: any): {
    new (): {
        handleSelect: (event: any) => any;
        render(): any;
    };
    propTypes: any;
};
