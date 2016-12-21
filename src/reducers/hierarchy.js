let initial = {
    data: ['dossier 1', 'dossier 2'],
    selected: 1
}

function reduce(state, action) {
    console.log('reduce hierarchy', state, action);
    return initial;
}

export default reduce;