/**
 * Returns whether or not the current value selection would allow for a user
 * edit on a hyperlink.
 *
 * @param {slate.Value} value
 * @returns {boolean}
 */
export function mayEditLink(value: any): boolean;
/**
 * Returns whether the given value has any hyperlink node.
 *
 * @param {slate.Value} value
 * @returns {boolean}
 */
export function hasHyperlink(value: any): boolean;
/**
 * Returns whether the given value has any inline node other than hyperlinks.
 *
 * @param {slate.Value} value
 * @returns {boolean}
 */
export function hasOnlyHyperlinkInlines(value: any): boolean;
/**
 * Allows the user to insert/remove a link depending on whether the current
 * selection has a link or not. If there is no link, a dialog is shown for
 * the user.
 *
 * @param {slate.Editor} editor Will be mutated with the required operations.
 * @param {Object} sdk
 * @param {function} logAction
 * @returns {Promise<void>}
 */
export function toggleLink(editor: any, sdk: any, logAction: Function): Promise<void>;
/**
 * Allows the user to edit the first selected link of a given Change by showing
 * a dialog and applying the change.
 *
 * @param {slate.Editor} change Will be mutated with the required operations.
 * @param {Object} sdk
 * @param {function} logAction
 * @returns {Promise<void>}
 */
export function editLink(change: any, sdk: any, logAction: Function): Promise<void>;
