export const LEFTCLICK = 'LEFTCLICK';

const leftClick = (cell) => ({
  type: LEFTCLICK,
  payload: cell
});

export default leftClick;