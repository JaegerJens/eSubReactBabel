export const selectHierarchy = (id) => {
    console.log('select hierarchy id:', id)
    return {
        type: 'HIERARCHY_SELECT',
        id
    };
};
