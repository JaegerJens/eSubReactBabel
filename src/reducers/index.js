import {combineReducers} from 'redux';
import hierarchy from './hierarchy.js';
import sequence from './sequence.js';

const rootReducer = combineReducers({
    hierarchy,
    sequence
});

export default rootReducer;