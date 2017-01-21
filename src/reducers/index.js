import {combineReducers} from 'redux';
import hierarchy from '../components/hierarchy/reducer.js';
import sequence from '../components/sequence/reducer.js';
import mainview from '../components/mainview/reducer.js';

const rootReducer = combineReducers({
    hierarchy,
    sequence,
    mainview
});

export default rootReducer;