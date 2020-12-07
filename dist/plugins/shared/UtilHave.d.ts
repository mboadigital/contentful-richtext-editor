export function haveAnyInlines({ value }: {
    value: any;
}): boolean;
/**
 * Checks if all inline nodes in the selectin have a certain type.
 * Returns false if there are no inline nodes in the selection.
 *
 * @param {slate.Editor} editor
 * @param {string} type
 * @returns {boolean}
 */
export function haveEveryInlineOfType({ value }: any, type: string): boolean;
export function haveMarks({ value }: {
    value: any;
}, type: any): any;
export function haveBlocks({ value }: {
    value: any;
}, type: any): any;
export function haveInlines({ value }: {
    value: any;
}, type: any): any;
export function haveTextInSomeBlocks({ value }: {
    value: any;
}): any;
