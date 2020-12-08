import React from 'react';
import ScoreCard from './ScoreCard.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfPins: 0,
      frameNum: 1,
      bowlNum: 1,
      bowlNumsArr: [],
      bowlScore: 0,
      bowlScores: [],
      strike: 0,
      spare: 0,
      score: 0,
      scores: [],
      totalScore: 0
    };
    this.handleInput = this.handleInput.bind(this);
  }

  //strikes & spares
  //frame 10
  //reset the game

  handleInput(e) {
    e.preventDefault();
    let roll = Number(e.target.value);
    this.state.bowlScores.push(roll);
    this.setState({
      numOfPins: roll,
      bowlScore: roll,
      totalScore: this.state.totalScore + roll
    }, () => {console.log('bowlScore', this.state.bowlScore)});

    if (this.state.frameNum !== 10 && this.state.frameNum !== 11) {
      if (this.state.bowlNum % 2 === 0) {
        this.setState({
          bowlNum: this.state.bowlNum + 1,
          frameNum: this.state.frameNum + 1,
          score: this.state.score + roll
        }, () => {console.log('bowlScore', this.state.bowlScore)});
        this.state.bowlNumsArr.push(this.state.bowlNum);
        //scores getting pushed after needed
        this.state.scores.push(this.state.score);
        console.log('scores: ', this.state.scores);
      } else {
        this.setState({
          bowlNum: this.state.bowlNum + 1,
          score: 0 + roll
        });
        this.state.bowlNumsArr.push(this.state.bowlNum);
        this.state.scores.push(this.state.score);
        console.log('scores: ', this.state.scores);
      }
    }
    if (this.state.frameNum === 10) {
      if (this.state.bowlNum === 19) {
        if (roll === 10) {
          this.setState({
            bowlNum: this.state.bowlNum + 1,
            strike: this.state.strike + 1,
            score: 0 + roll
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
          //scores getting pushed after needed
          this.state.scores.push(this.state.score);
        } else {
          this.setState({
            bowlNum: this.state.bowlNum + 1,
            score: 0 + roll
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
          this.state.scores.push(this.state.score);
        }
      } else if (this.state.bowlNum === 20) {
        if (roll === 10) {
          this.setState({
            bowlNum: this.state.bowlNum + 1,
            strike: this.state.strike + 1,
            score: this.state.score + roll
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
          this.state.scores.push(this.state.score);
        } else {
          this.setState({
            bowlNum: this.state.bowlNum + 1,
            score: this.state.score + roll
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
          this.state.scores.push(this.state.score);
        }
      } else {
        //if strike on this.state.bowlNum 19 - this.state.frameNum[this.state.bowlNum] setState, //else roll = 0
        this.setState({
          bowlNum: this.state.bowlNum + 1,
          score: this.state.score + roll
        });
        this.state.bowlNumsArr.push(this.state.bowlNum);
        this.state.scores.push(this.state.score);
      }
    }
  }

  render() {
    return (
      <div className="main">
        <h2 id="title">Solo Bowlo</h2>
        <button value="0" onClick={(e) => this.handleInput(e)}>0</button>
        <button value="1" onClick={(e) => this.handleInput(e)}>1</button>
        <button value="2" onClick={(e) => this.handleInput(e)}>2</button>
        <button value="3" onClick={(e) => this.handleInput(e)}>3</button>
        <button value="4" onClick={(e) => this.handleInput(e)}>4</button>
        <button value="5" onClick={(e) => this.handleInput(e)}>5</button>
        <button value="6" onClick={(e) => this.handleInput(e)}>6</button>
        <button value="7" onClick={(e) => this.handleInput(e)}>7</button>
        <button value="8" onClick={(e) => this.handleInput(e)}>8</button>
        <button value="9" onClick={(e) => this.handleInput(e)}>9</button>
        <button value="10" onClick={(e) => this.handleInput(e)}>10</button>
        <ScoreCard numOfPins={this.state.numOfPins} frameNum={this.state.frameNum} bowlNumsArr={this.state.bowlNumsArr} bowlScore={this.state.bowlScore} bowlScores={this.state.bowlScores} strike={this.state.strike} spare={this.state.spare} score={this.state.score} scores={this.state.scores} totalScore={this.state.totalScore} />
      </div>
    );
  }
}

export default App;