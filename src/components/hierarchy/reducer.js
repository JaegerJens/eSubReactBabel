let initial = {
    data: ['dossier 1', 'dossier 2', 'dossier 3', 'dossier 4'],
    selected: 1
}

function reduce(state = initial, action) {
    switch (action.type) {
        case 'HIERARCHY_SELECT':
            var new_state = { ... state, selected: action.id };
            return new_state;
        default:
            return state;
    }
}

export default reduce;