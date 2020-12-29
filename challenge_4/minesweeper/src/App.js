import React from 'react';
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
  padding-bottom: .75rem;
  color: #e6e6e6;
`;

const Container = styled.div`
  display: flex;
  border-style: outset;
  border-width: 8.5px;
  border-color: #fff #c5c7c8 #c5c7c8 #fff;
  background-color: #e6e6e6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 618px;
  width: 600px;
  padding: 1.3rem 0rem 1.3rem 0rem;
`;

const HeaderContainer = styled.div`
  height: 48px;
  width: 480px;
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #fff #fff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

//5inx5in
const BoardContainer = styled.div`
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #fff #fff #dadcdd;
  background-color: #e6e6e6;
  height: 480px;
  width: 480px;
  padding: 0px 30px 0px 30px;
`;

const FooterContainer = styled.div`
  height: 48px;
  width: 480px;
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #fff #fff #dadcdd;
  background-color: #e6e6e6;
  cursor: pointer;
  margin: auto;
  padding: 0px 30px 0px 30px;
`;

const NewGameButton = styled.button`
  &:focus {outline:0;};
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      win: false,
      lose: false,
      minesLeft: 10,
      time: Date.now(),
      cellClicked: false,
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
          <HeaderContainer>
            <div>

            </div>
          </HeaderContainer>
          <BoardContainer>

          </BoardContainer>
          <FooterContainer>
            <NewGameButton>

            </NewGameButton>
          </FooterContainer>
        </Container>
      </div>
    );
  }
}

export default App;
