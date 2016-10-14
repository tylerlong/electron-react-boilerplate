// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import preview from './preview';

const rootReducer = combineReducers({
  counter,
  preview,
  routing
});

export default rootReducer;
