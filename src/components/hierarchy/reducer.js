const initial = {
    "data": ["dossier 1", "dossier 2", "dossier 3", "dossier 4"],
    "selected": 1
};

const reduce = (state = initial, action) => {

    switch (action.type) {
    case "HIERARCHY_SELECT":
        return {
            ...state,
            "selected": action.id
        };
    default:
        return state;
    }

};

export default reduce;
