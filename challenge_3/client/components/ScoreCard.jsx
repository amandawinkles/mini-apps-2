import React from 'react';

const ScoreCard = (props) => {
  const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total'];
  const indFrames = frames.map((frame, index) => {
    return (
      <th key={index}>{frame}</th>
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
            <td>{props.bowlScores[0]}{props.bowlScores[1]}</td>
            <td>{props.bowlScores[2]}{props.bowlScores[3]}</td>
            <td>{props.bowlScores[4]}{props.bowlScores[5]}</td>
            <td>{props.bowlScores[6]}{props.bowlScores[7]}</td>
            <td>{props.bowlScores[8]}{props.bowlScores[9]}</td>
            <td>{props.bowlScores[10]}{props.bowlScores[11]}</td>
            <td>{props.bowlScores[12]}{props.bowlScores[13]}</td>
            <td>{props.bowlScores[14]}{props.bowlScores[15]}</td>
            <td>{props.bowlScores[16]}{props.bowlScores[17]}</td>
            <td>{props.bowlScores[18]}{props.bowlScores[19]}{props.bowlScores[20]}</td>
            <td></td>
          </tr>
          <tr className="frame-scores-row">
            <td>{props.scores[2]}</td>
            <td>{props.scores[4]}</td>
            <td>{props.scores[6]}</td>
            <td>{props.scores[8]}</td>
            <td>{props.scores[10]}</td>
            <td>{props.scores[12]}</td>
            <td>{props.scores[14]}</td>
            <td>{props.scores[16]}</td>
            <td>{props.scores[18]}</td>
            <td>{props.scores[21]}</td>
            <td id="total-score">{props.totalScore}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreCard;

//numOfPins, frameNum, bowlNumsArr, bowlScore, bowlScores, strike, spare, score, scores, totalScore