import React from 'react';

const ScoreCard = (props) => {
  const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const indBowlScores = props.bowlNumsArr.map((num, index) => {
    return (
        <td className="bowl-scores" key={index}>{props.bowlScore}</td>
    );
  })
  //map through frames for top-row and incl. if for frames[9]
  return (
    <div className="score-card">
      <table>
        <thead>
          <tr className="top-row">
            <th colSpan="2">{frames[0]}</th>
            <th colSpan="2">{frames[1]}</th>
            <th colSpan="2">{frames[2]}</th>
            <th colSpan="2">{frames[3]}</th>
            <th colSpan="2">{frames[4]}</th>
            <th colSpan="2">{frames[5]}</th>
            <th colSpan="2">{frames[6]}</th>
            <th colSpan="2">{frames[7]}</th>
            <th colSpan="2">{frames[8]}</th>
            <th colSpan="3">{frames[9]}</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bowls-row">
            {indBowlScores}
            <td id="total-score">{props.totalScore}</td>
          </tr>
          <tr className="frame-score-row">
            <td colSpan="2"></td>
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