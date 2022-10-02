import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { appReducer as AshishReducer } from './appreducer';

const rootreducer = combineReducers({
  AshishReducer,
});

export const store = legacy_createStore(
  rootreducer,
  applyMiddleware(thunk)
);
