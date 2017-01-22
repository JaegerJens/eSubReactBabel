export const selectSequence = (id, name) => {
    var action = {
        type: 'SEQUENCE_SELECT',
        id,
        name
    };
    console.log('select hierarchy action: ', action);
    return action;
}