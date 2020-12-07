export function ParagraphPlugin(type?: BLOCKS): {
    renderNode: (props: any, _editor: any, next: any) => any;
    onKeyDown: (e: any, editor: any, next: any) => any;
};
import { BLOCKS } from "@contentful/rich-text-types";
