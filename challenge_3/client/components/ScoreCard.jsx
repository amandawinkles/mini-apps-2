import React from 'react';

const ScoreCard = (props) => {
  const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total'];
  //let count = {};
  const indBowlScores = props.bowlNumsArr.map((num) => {
    //store num in object with count
    //if count.hasOwnProperty(num), return, else, count[num] = 1
    // if (count.hasOwnProperty(num)) {
    //   return;
    // }
    // count[num] = 1;
    return (
        <td className="bowl-scores" key={num}>{props.bowlScore}</td>
    );
  });
  const indFrames = frames.map((frame) => {
    if (frame === 10) {
      return (
        <th colSpan="3" key={frame}>{frame}</th>
      );
    }
    return (
      <th colSpan="2" key={frame}>{frame}</th>
    );
  });

  return (
    <div className="score-card">
      <table>
        <thead>
          <tr className="top-row">
            {indFrames}
          </tr>
        </thead>
        <tbody>
          <tr className="bowls-row">
            {indBowlScores}
          </tr>
          <tr className="frame-score-row">
            <td colSpan="2" ></td>
            <td colSpan="2" id="total-score">{props.totalScore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreCard;

//numOfPins, frameNum, bowlNumsArr, bowlScore, strike, spare, score, totalScore

/*
bowlNum bowlScore
*/