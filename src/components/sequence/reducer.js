const initial = {
    "data": ["m1", "m2", "m3", "m4", "m5"],
    "dossier": "dossier 1",
    "selected": 3
};

const reduce = (state = initial, action) => {

    let newState = state;

    switch (action.type) {
    case "HIERARCHY_SELECT":
        newState = {
            ...state,
            "dossier": action.name
        };

        return newState;
    case "SEQUENCE_SELECT":
        newState = {
            ...state,
            "selected": action.id
        };

        return newState;
    default:
        return state;
    }

};

export default reduce;
