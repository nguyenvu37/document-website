import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from '../screens/home/redux';

const appReducers = combineReducers({
  homeReducer,
});

export default appReducers;
