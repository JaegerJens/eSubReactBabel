import { createStore } from 'redux';

function reduce(state, action) {
    console.log('reduce', state, action);
}

let initial = {
    hierarchy: {
        data: ['dossier 1', 'dossier 2'],
        selected: 1
    },
    sequence: {
        dossier: 'dossier 1',
        data: ['m1', 'm2', 'm3', 'm4', 'm5'],
        selected: 3
    }
}

let store = createStore(reduce, initial);

export default store;
