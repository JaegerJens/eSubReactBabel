let initial = {
        dossier: 'dossier 1',
        data: ['m1', 'm2', 'm3', 'm4', 'm5'],
        selected: 3
    };

function reduce(state = initial, action) {
    console.log('reduce sequence', state, action);
    switch(action.type) {
        case 'HIERARCHY_SELECT':
            var new_state = Object.assign({}, state, {
                dossier: action.name
            });
            console.log('new sequence state: ', new_state);
            return new_state;
        default:
            return state;
    }
    return initial;
}

export default reduce;