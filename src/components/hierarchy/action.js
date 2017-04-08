export const selectHierarchy = (id, name) => {

    const action = {
        id,
        name,
        "type": "HIERARCHY_SELECT"
    };

    return action;

};
