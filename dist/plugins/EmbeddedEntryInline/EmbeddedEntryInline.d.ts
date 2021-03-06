export default EmbeddedEntryInline;
declare class EmbeddedEntryInline {
    static propTypes: {
        sdk: any;
        isSelected: any;
        attributes: any;
        editor: any;
        node: any;
        onEntityFetchComplete: any;
    };
    getEntitySys(): {
        id: any;
        type: any;
    };
    handleEditClick: () => any;
    handleRemoveClick: () => void;
    render(): any;
}
