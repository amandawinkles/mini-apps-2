import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import './App.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Spectral', serif;
    background-color: #333333;
  }
`;

const Title = styled.div`
  font-weight: bold;
  text-align: center;
  padding-top: 2rem;
  color: #e6e6e6;
`;

const Container = styled.div`
  display: flex;
  background-color: #e6e6e6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 625px;
  width: 600px;
  padding-top: 3rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      win: false,
      lose: false,
      minesLeft: 10,
      time: Date.now()
    };
  }

  componentDidMount() {
    if (!this.state.win && !this.state.lose) {
      setInterval(() => {
        this.setState({
          time: Date.now()
        });
      }, 1000)
    }
  }

  render() {
    return (
      <div className="main">
        <GlobalStyle />
        <Title>
          <h2>M I N E S W E E P E R</h2>
        </Title>
        <Container>

        </Container>

        <button></button>
      </div>
    );
  }
}

export default App;
