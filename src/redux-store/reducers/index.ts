import { combineReducers } from 'redux';

import { shiftReducer } from './shift';


export const rootReducer = combineReducers( {
  shift: shiftReducer,
});