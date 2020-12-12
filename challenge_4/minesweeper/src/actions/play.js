export const PLAY = 'PLAY';

const play = (i, j) => ({
  type: PLAY,
  matrix: {
    i: i,
    j: j
  }
});

export default play;