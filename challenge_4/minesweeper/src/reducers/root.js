import Redux from 'redux';
import { combineReducers } from 'redux';
import initGame from './initGame.js';

const rootReducer = combineReducers({
  initGame
});

export default rootReducer;