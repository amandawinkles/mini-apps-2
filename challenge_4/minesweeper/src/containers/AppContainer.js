import { connect } from 'react-redux';
import App from '../App.js';
import initGame from './../actions/initGame.js';

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
    dispatch(initGame({
      rows: 10,
      cols: 10,
      bombs: 10
    }));
    break;
    default:
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// switch (boardSetup) {

// }