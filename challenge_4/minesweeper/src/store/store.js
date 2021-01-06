import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//import rootReducer from './../reducers/root.js';
import initGame from './../reducers/initGame.js';

// export const initialState = {
//   initGame
// };

const reducer = combineReducers({
  initGame
});

const store = configureStore({
  reducer
});

console.log(store.getState());

export default store;