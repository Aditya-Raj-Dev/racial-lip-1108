import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { appReducer as AshishReducer } from './Appredux/appreducer';
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootreducer = combineReducers({
  AshishReducer,
  AuthReducer
});

export const store = legacy_createStore(
  rootreducer,
  applyMiddleware(thunk)
);
