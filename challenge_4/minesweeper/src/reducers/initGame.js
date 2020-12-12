import Redux from 'redux';

const initGameReducer = (state = { board: [], win: false, lose: false }, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.boardSetup || null;
    default:
      return state;
    }
  };
};

export default initGameReducer;