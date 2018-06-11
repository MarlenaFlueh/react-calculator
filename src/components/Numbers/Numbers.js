import React, { Component } from "react";
import styled from "styled-components";

const Num = styled.div`
  background-color: #d3b9b9;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "item7 item8 item9" "item4 item5 item6" "item1 item2 item3"
    "item0 itemPoint itemEqual";
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
`;

class Numbers extends Component {
  render() {
    return (
      <Num>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
          <GridItem
            key={num}
            item={"item" + { num }}
            onClick={() => this.props.clicked(num)}
          >
            {num}
          </GridItem>
        ))}
        <GridItem item="itemPoint" onClick={() => this.props.clicked(".")}>
          .
        </GridItem>
        <GridItem item="itemEqual" onClick={this.props.equaled}>
          =
        </GridItem>
      </Num>
    );
  }
}

export default Numbers;
