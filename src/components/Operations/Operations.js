import React from "react";
import styled from "styled-components";

const OperationGrid = styled.div`
  background-color: rgb(253, 251, 251);
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas: "deleted shortened" "added minused" "multiplied divided" "bracketOpen bracketClose";
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px;
  font-size: 30px;
`;

const GridItem = styled.div`
  grid-area: ${props => props.item};
  background-color: rgb(241, 236, 236);
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgb(219, 214, 214);
    cursor: pointer;
  }
`;

const operatorObj = {
  deleted: "AC",
  shortened: "CE",
  added: "+",
  minused: "-",
  multiplied: "*",
  divided: "/",
  bracketOpen: "(",
  bracketClose: ")"
};

const Operations = props => (
  <OperationGrid>
    {Object.keys(operatorObj).map(key => (
      <GridItem key={key} item={key} onClick={props[key]}>
        {operatorObj[key]}
      </GridItem>
    ))}
  </OperationGrid>
);

export default Operations;
