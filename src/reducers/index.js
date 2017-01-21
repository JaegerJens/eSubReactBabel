import {combineReducers} from 'redux';
import hierarchy from '../components/hierarchy/reducer.js';
import sequence from '../components/sequence/reducer.js';

const rootReducer = combineReducers({
    hierarchy,
    sequence
});

export default rootReducer;