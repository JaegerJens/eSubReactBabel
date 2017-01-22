export const selectHierarchy = (id, name) => {
    var action = {
        type: 'HIERARCHY_SELECT',
        id,
        name
    };
    return action;
};
