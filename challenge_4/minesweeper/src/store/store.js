import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/root.js';
import initGame from './../reducers/initGame.js';

export const initialState = {
  initGame
};


const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

console.log(store.getState());

export default store;