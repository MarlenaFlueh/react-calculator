import React from "react";
import styled from "styled-components";

const DisplayGrid = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  grid-template-areas: "history" "nums";
  background-color: white;
  display: grid;
  padding-right: 20px;
`;

const HistoryItem = styled.div`
  grid-area: history;
  justify-self: end;
  font-size: 20px;
`;

const NumberItem = styled.div`
  grid-area: nums;
  justify-self: end;
  font-size: 35px;
`;

const Display = props => (
  <DisplayGrid>
    <HistoryItem>{props.history}</HistoryItem>
    <NumberItem>{props.nums}</NumberItem>
  </DisplayGrid>
);

Display.defaultProps = {
  history: "",
  nums: "0"
};

export default Display;
