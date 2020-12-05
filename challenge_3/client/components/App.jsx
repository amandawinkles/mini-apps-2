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
      strike: 0,
      spare: 0,
      score: 0,
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
    this.setState({
      numOfPins: roll,
      score: this.state.score + roll
    }, () => {console.log(this.state.numOfPins)});

    if (this.state.frameNum !== 10 && this.state.frameNum !== 11) {
      if (this.state.bowlNum % 2 === 0) {
        this.setState({
          bowlScore: roll,
          bowlNum: this.state.bowlNum + 1,
          frameNum: this.state.frameNum + 1
        });
        this.state.bowlNumsArr.push(this.state.bowlNum);
      } else {
        this.setState({
          bowlScore: roll,
          bowlNum: this.state.bowlNum + 1
        });
        this.state.bowlNumsArr.push(this.state.bowlNum);
      }
    }
    if (this.state.frameNum === 10) {
      if (this.state.bowlNum === 19) {
        if (roll === 10) {
          this.setState({
            bowlScore: roll,
            bowlNum: this.state.bowlNum + 1,
            strike: this.state.strike + 1
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
        } else {
          this.setState({
            bowlScore: roll,
            bowlNum: this.state.bowlNum + 1
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
        }
      } else if (this.state.bowlNum === 20) {
        if (roll === 10) {
          this.setState({
            bowlScore: roll,
            bowlNum: this.state.bowlNum + 1,
            strike: this.state.strike + 1
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
        } else {
          this.setState({
            bowlScore: roll,
            bowlNum: this.state.bowlNum + 1
          });
          this.state.bowlNumsArr.push(this.state.bowlNum);
        }
      } else {
        //if strike on this.state.bowlNum 19 - this.state.frameNum[this.state.bowlNum] setState, //else roll = 0
        this.setState({
          bowlScore: roll,
          bowlNum: this.state.bowlNum + 1
        });
        this.state.bowlNumsArr.push(this.state.bowlNum);
      }
    }
    if (this.state.frameNum === 11) {
      this.setState({
        totalScore: this.state.score
      });
    }
  }

  render() {
    return (
      <div className="main">
        <h2 id="title">Bowling For One</h2>
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
        <ScoreCard numOfPins={this.state.numOfPins} frameNum={this.state.frameNum} bowlNumsArr={this.state.bowlNumsArr} bowlScore={this.state.bowlScore} strike={this.state.strike} spare={this.state.spare} score={this.state.score} totalScore={this.state.totalScore} />
      </div>
    );
  }
}

export default App;