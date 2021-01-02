import React from 'react';
import styled from "styled-components";


//5inx5in
const BoardContainer = styled.div`
  border-width: 6px;
  border-style: inset;
  border-color: #dadcdd #ffffff #ffffff #dadcdd;
  background-color: #e6e6e6;
  height: 460px;
  width: 460px;
  padding: 0px 30px 0px 30px;
  display: grid;
`;

const PuzzleTable = styled.table`
  height: 100%
  width: 100%;

`;

const Tr = styled.tr`

`;

const Td = styled.td`

`;

const Board = () => {
  <BoardContainer>
    <PuzzleTable>
      <tbody>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
        <tr>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
          <td class="closed"></td>
        </tr>
      </tbody>
    </PuzzleTable>
  </BoardContainer>
};

export default Board;



// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const {  }
//   }
// }