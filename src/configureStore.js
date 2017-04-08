import {combineReducers, compose, createStore} from "redux";
import DevTools from "./components/devtool/component.jsx";
import hierarchy from "./components/hierarchy/reducer.js";
import mainview from "./components/mainview/reducer.js";
import sequence from "./components/sequence/reducer.js";

const rootReducer = combineReducers({
    hierarchy,
    mainview,
    sequence
});

const enhancer = compose(
        DevTools.instrument()
);

export default (initialState) => {

    const store = createStore(rootReducer, initialState, enhancer);

    return store;

};
