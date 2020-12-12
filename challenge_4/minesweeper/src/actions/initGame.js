export const INIT = 'INIT';

const init = (boardSetup) => ({
  type: 'INIT',
  boardSetup: boardSetup
});



export default init;