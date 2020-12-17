import Redux from 'redux';
import { INIT } from '../actions/initGame.js';

const initGameReducer = (state = { board: [], boardSize: 10, win: false, lose: false }, action) => {
  switch (action.type) {
    case 'INIT': {
      //create board/matrix
      const board = Array(10).fill(0).map(() =>
        Array(10).fill(0)
      );
      const rows = board.length;
      const cols = board[0].length;
      //place 10 bombs randomly on new board
      let bombs = 0;
      while (bombs < 10) {
        //select random row & column junction
        const randRow = Math.floor(Math.random() * 10);
        const randCol = Math.floor(Math.random() * 10);
        //place bomb if space = 0
        if (board[randRow][randCol] === 0) {
          board[randRow][randCol] = 10;
          //increase bombs count
          bombs++;
        }
      }
      //return board
      return action.boardSetup || null;
    default:
      return state;
    }
  };
};

export default initGameReducer;