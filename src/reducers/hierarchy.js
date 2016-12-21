let initial = {
    data: ['dossier 1', 'dossier 2', 'dossier 3', 'dossier 4'],
    selected: 1
}

function reduce(state = initial, action) {
    console.log('reduce hierarchy', state, action);
    switch (action.type) {
        case 'HIERARCHY_SELECT':
            var new_state = {
                data: ['dossier 1', 'dossier 2', 'dossier 3'],
                selected: action.id
            };
            console.log('new hierarchy state:', new_state);
            return new_state;
        default:
            return state;
    }
}

export default reduce;