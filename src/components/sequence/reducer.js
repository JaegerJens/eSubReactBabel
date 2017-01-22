let initial = {
        dossier: 'dossier 1',
        data: ['m1', 'm2', 'm3', 'm4', 'm5'],
        selected: 3
    };

function reduce(state = initial, action) {
    switch(action.type) {
        case 'HIERARCHY_SELECT':
            var new_state = { ...state, dossier: action.name };
            return new_state;
        case 'SEQUENCE_SELECT':
            var new_state = { ...state, selected: action.id};
            return new_state;
        default:
            return state;
    }
}

export default reduce;