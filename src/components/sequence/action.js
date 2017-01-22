export const selectSequence = (id, name) => {
    var action = {
        type: 'SEQUENCE_SELECT',
        id,
        name
    };
    return action;
}