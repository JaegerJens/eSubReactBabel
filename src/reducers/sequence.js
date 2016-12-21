let initial = {
        dossier: 'dossier 1',
        data: ['m1', 'm2', 'm3', 'm4', 'm5'],
        selected: 3
    };

function reduce(state, action) {
    console.log('reduce sequence', state, action);
    return initial;
}

export default reduce;