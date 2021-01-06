import { connect } from 'react-redux';
import Board from './../components/Board.js';
import initGame from './../actions/initGame.js';
import leftClick from './../actions/leftClick.js';
import flagClick from './../actions/flagClick.js';

const mapStateToProps = (state) => ({
  board: state.board,
  win: state.win,
  lose: state.lose,
  minesLeft: state.minesLeft,
  time: state.time,
  cellClicked: state.cellClicked,
  flagClicked: state.flagClicked
});

const mapDispatchToProps = (dispatch) => ({
  init: (boardSetup) => {
    dispatch(initGame(boardSetup));
  },
  handleLeftClick: (cell) => {
    dispatch(leftClick(cell));
  },
  handleFlagClick: (cell) => {
    dispatch(flagClick(cell));
  }
});

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;