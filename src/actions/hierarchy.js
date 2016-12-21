export const selectHierarchy = (id, name) => {
    var action = {
        type: 'HIERARCHY_SELECT',
        id,
        name
    };
    console.log("select hierarchy action: ", action);
    return action;
};
