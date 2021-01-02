import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
//import BoardContainer from './components/Board.js';
//import Cell from './components/Cell.js';
//import { init } from './actions/initGame.js';

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
  padding-bottom: .75rem;
  color: #e6e6e6;
`;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 640px;
  width: 580px;
  border-style: outset;
  border-width: 8.5px;
  border-color: #ffffff #c5c7c8 #c5c7c8 #ffffff;
  background-color: #e6e6e6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1.3rem 0rem 1.3rem 0rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 48px;
  width: 460px;
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 8.2px 30px 8.2px 30px;
`;

const MinesWrapper = styled.div`
  padding: 4px 24px 4px 24px;
  position: relative;
  margin: auto;
`;

const TimeWrapper = styled.div`
  padding: 4px 24px 4px 24px;
  position: relative;
  margin: auto;
`;

const HeaderText = styled.span`
  height: 48px;
  width: 480px;
  border-width: 2.5px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

const MinesWindow = styled.span`
  height: 48px;
  width: 480px;
  border-width: 2.5px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

const TimeWindow = styled.span`
  height: 48px;
  width: 480px;
  border-width: 2.5px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

//5inx5in
const BoardContainer = styled.div`
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  height: 460px;
  width: 460px;
  padding: 0px 30px 0px 30px;
  display: flex;
`;

// const Cell = styled.div`
//   display: flex;
// `;

const FooterContainer = styled.div`
  height: 48px;
  width: 460px;
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  margin: auto;
  padding: 8.2px 30px 8.2px 30px;
`;

const NewGameButton = styled.div`
  height: 24px;
  width: 114px;
  border-width: 2.5px;
  padding: 2px 1.5px 2.6px 1.5px;
  margin: auto;
  &:focus {outline:0;};
  border-style: outset;
  border-color: #ffffff #dadcdd #dadcdd #ffffff;
  justify-content: center;
  text-align: center;
`;

const App = () => (

  // componentDidMount() {
  //   if (!this.state.win && !this.state.lose) {
  //     setInterval(() => {
  //       this.setState({
  //         time: Date.now()
  //       });
  //     }, 1000)
  //   }
  // }

  // render() {
  //   return (
      <div className="main">
        <GlobalStyle />
        <Title>
          <h2>M I N E S W E E P E R</h2>
        </Title>
        <Container>
          <HeaderContainer>
            <MinesWrapper>
              <HeaderText>mines:</HeaderText>
              <MinesWindow>2</MinesWindow>
            </MinesWrapper>
            <TimeWrapper>
              <HeaderText>time:</HeaderText>
              <TimeWindow>095</TimeWindow>
            </TimeWrapper>
          </HeaderContainer>
          <BoardContainer />
          <FooterContainer>
            <NewGameButton>
              <button type="submit" value="New Game">NEW GAME</button>
            </NewGameButton>
          </FooterContainer>
        </Container>
      </div>
  //   );
  // }
);

export default App;
