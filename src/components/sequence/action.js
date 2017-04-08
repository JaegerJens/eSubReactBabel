export const selectSequence = (id, name) => {

    const action = {
        "type": "SEQUENCE_SELECT",
        id,
        name
    };

    return action;

};
