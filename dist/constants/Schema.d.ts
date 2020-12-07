declare namespace _default {
    export namespace document {
        export const nodes: {
            types: import("@contentful/rich-text-types").TopLevelBlockEnum[];
        }[];
    }
    export const blocks: any;
    export const inlines: {
        hyperlink: {
            nodes: {
                objects: string[];
            }[];
        };
        "entry-hyperlink": {
            nodes: {
                objects: string[];
            }[];
        };
        "asset-hyperlink": {
            nodes: {
                objects: string[];
            }[];
        };
        "embedded-entry-inline": {
            isVoid: boolean;
        };
    };
}
export default _default;
