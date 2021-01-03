import Redux from 'redux';
import { INIT } from '../actions/initGame.js';

const initGameReducer = (state = { board: [], win: false, lose: false, bombsLeft: 10, time: Date.now(), cellClicked: false, flagClicked: false }, action) => {
  switch (action.type) {
    case INIT: {
      //create board/matrix
      const board = Array(10).fill(0).map(() =>
        Array(10).fill(0)
      );
      //loop through array, each cell assigned properties
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < i.length; j++) {
          let cell = board[i][j];
          cell = {
            open: false,
            flagged: false,
            value: 0,
          };
        }
      }
      //place 10 bombs randomly on new board
      let bombs = 0;
      while (bombs < 10) {
        //select random row & column junction
        const randRow = Math.floor(Math.random() * 10);
        const randCol = Math.floor(Math.random() * 10);
        //place bomb if space = 0
        if (board[randRow][randCol].value === 0) {
          board[randRow][randCol].value = 10;
          //increase bombs count
          bombs++;
        }
      }
      //check number of bombs around each cell, increment cell value for each bomb
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < i.length; j++) {
          let count = 0;
          if (board[i][j].value !== 10) {
            if (i < 9 && j < 9 && board[i + 1][j + 1].value === 10) {
              count++;
            }
            if (i < 9 && j > 0 && board[i + 1][j - 1].value === 10) {
              count++;
            }
            if (i < 9 && board[i + 1][j].value === 10) {
              count++;
            }
            if (j < 9 && board[i][j + 1].value === 10) {
              count++;
            }
            if (i > 0 && j > 0 && board[i - 1][j - 1].value === 10) {
              count++;
            }
            if (i > 0 && board[i - 1][j].value === 10) {
              count++;
            }
            if (i > 0 && j < 9 && board[i - 1][j + 1].value === 10) {
              count++;
            }
            if (j > 0 && board[i][j - 1].value === 10) {
              count++;
            }
            if (count === 0) {
              board[i][j].value = 0;
            } else {
              board[i][j].value = count;
            }
          }
        }
      }
      //return board state
      return {
        ...state,
        board,
        bombsLeft: bombs
      };
    }
    default:
      return state;
  }
};

export default initGameReducer;