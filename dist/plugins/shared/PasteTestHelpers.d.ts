export function document(props: any, ...nodes: any[]): any;
export function block(type: any, props: any, ...nodes: any[]): any;
export function inline(type: any, props: any, ...nodes: any[]): any;
export function text(props: any, ...leaves: any[]): any;
export function leaf(text?: string, ...marks: any[]): {
    object: string;
    text: string;
    marks: any[];
};
export function mark(type: any): {
    type: any;
    object: string;
    data: {};
};
export function emptyText(): any;
export function emptyParagraph(): {
    type: BLOCKS;
    object: string;
    data: {};
    nodes: any[];
};
export function createPasteEvent(type: any, value: any): {
    dataTransfer: FakeDataTransfer;
};
export function createPasteHtmlEvent(html: any): {
    dataTransfer: FakeDataTransfer;
};
import { BLOCKS } from "@contentful/rich-text-types";
declare class FakeDataTransfer {
    items: any[];
    types: any[];
    getData(key: any): any;
    setData(key: any, value: any): void;
}
export {};
