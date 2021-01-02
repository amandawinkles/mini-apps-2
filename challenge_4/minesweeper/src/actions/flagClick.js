export const FLAGCLICK = 'FLAGCLICK';

const flagClick = (cell) => ({
  type: FLAGCLICK,
  payload: cell
});

export default flagClick;