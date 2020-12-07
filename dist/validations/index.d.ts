export namespace VALIDATIONS {
    export const ENABLED_MARKS: string;
    export const ENABLED_NODE_TYPES: string;
}
export const VALIDATABLE_NODE_TYPES: (BLOCKS.PARAGRAPH | BLOCKS.HEADING_1 | BLOCKS.HEADING_2 | BLOCKS.HEADING_3 | BLOCKS.HEADING_4 | BLOCKS.HEADING_5 | BLOCKS.HEADING_6 | BLOCKS.OL_LIST | BLOCKS.UL_LIST | BLOCKS.HR | BLOCKS.QUOTE | BLOCKS.EMBEDDED_ENTRY | BLOCKS.EMBEDDED_ASSET | INLINES)[];
export function isNodeTypeEnabled(field: any, nodeType: string): boolean;
export function isMarkEnabled(field: any, mark: string): boolean;
import { BLOCKS } from "@contentful/rich-text-types";
import { INLINES } from "@contentful/rich-text-types";
