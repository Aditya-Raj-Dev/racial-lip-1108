import { legacy_createStore, applyMiddleware } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

import thunk from "redux-thunk";

const store = legacy_createStore(AuthReducer, applyMiddleware(thunk));

export { store };
