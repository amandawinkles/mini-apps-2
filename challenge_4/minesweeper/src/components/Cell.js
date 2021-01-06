import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//actions imported once finished

const Cell = () => {
  const cellClicked = useSelector(state => state.cellClicked);
  const flagClicked = useSelector(state => state.flagClicked);
}

export default Cell;