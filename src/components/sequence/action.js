export const selectSequence = (id, name) => {

    const action = {
        id,
        name,
        "type": "SEQUENCE_SELECT"
    };

    return action;

};
