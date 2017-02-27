import {combineReducers, createStore, compose} from 'redux';
import hierarchy from './components/hierarchy/reducer.js';
import sequence from './components/sequence/reducer.js';
import mainview from './components/mainview/reducer.js';
import DevTools from './components/devtool/component.jsx';

const rootReducer = combineReducers({
    hierarchy,
    sequence,
    mainview
});

const enhancer = compose(
  // applyMiddleware(),
  DevTools.instrument()
);

export default (initialState) => {
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}