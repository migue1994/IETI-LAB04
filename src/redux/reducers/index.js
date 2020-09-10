import {combineReducers} from "redux";
import pathReducer from "./pathReducer";
import taskStore from "./TaskReducer";
import filterStore from "./FilterReducer";

const rootReducer = combineReducers({
    pathReducer,
    taskStore,
    filterStore
});

export default rootReducer;

