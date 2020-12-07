export const blockTitles: {
    "heading-1": string;
    "heading-2": string;
    "heading-3": string;
    "heading-4": string;
    "heading-5": string;
    "heading-6": string;
    paragraph: string;
    "embedded-entry-block": string;
    "embedded-asset-block": string;
};
export default HeadingDropdown;
import { BLOCKS } from "@contentful/rich-text-types";
declare class HeadingDropdown {
    static propTypes: {
        children: any;
        isOpen: any;
        disabled: any;
        onClose: any;
        onToggle: any;
        currentBlockType: any;
    };
    getStyleNameForChange: () => any;
    render(): any;
}
