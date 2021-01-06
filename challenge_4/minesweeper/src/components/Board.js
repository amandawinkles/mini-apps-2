import React from 'react';
import styled from "styled-components";
import Cell from './Cell.js';
import { useSelector, useDispatch, shallowEqual } from "react-redux";


//5inx5in
const PuzzleContainer = styled.div`
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
  display: grid;
`;

const Td = styled.td`
  padding: 0.5rem;
  text-align: center;
  border-style: outset;
  border-color: #ffffff #dadcdd #dadcdd #ffffff;
`;

// {board, handleLeftClick, handleFlagClick}
const Board = () => {
  const dispatch = useDispatch();
  const { board, win, lose, minesLeft, time} = useSelector((state) => state.initGame);
  console.log('board: ', board);
  // const cellClicked = useSelector(state => state.cellClicked);
  // const flagClicked = useSelector(state => state.flagClicked);
  return (
    <PuzzleContainer>
      <PuzzleTable>
        <tbody>
          {
            board.map((row) => {
              return (
                <Tr key={row}>
                  {
                    row.map((cell, col) => {
                      return (
                        <Cell key={col} />
                      );
                    })
                  }
                  <Td className="closed"></Td>
                </Tr>
              );
            })
          }
          <Tr>
            <Td className="closed"></Td>
          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
          <Tr>

          </Tr>
        </tbody>
      </PuzzleTable>
    </PuzzleContainer>
  );
};

export default Board;