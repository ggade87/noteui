import { createStore, combineReducers } from "redux";
import reducer from "./reducer/reducers";

const rootReducer = combineReducers({
  home: reducer,
});

const store = createStore(rootReducer);

export default store;
