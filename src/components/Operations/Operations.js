import React, { Component } from "react";
import styled from "styled-components";

const OperationContainer = styled.div`
  background-color: rgb(253, 251, 251);
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  grid-template-areas: "deleted" "added" "minused" "multiplied" "divided";
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 20px;
  font-size: 30px;
`;

const Operator = styled.div`
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

class Operations extends Component {
  render() {
    return (
      <OperationContainer>
        {[
          ["deleted", "AC"],
          ["added", "+"],
          ["minused", "-"],
          ["multiplied", "*"],
          ["divided", "/"]
        ].map(operator => {
          return (
            <Operator
              key={operator[0]}
              item={operator[0]}
              onClick={this.props.added}
            >
              {operator[1]}
            </Operator>
          );
        })}
      </OperationContainer>
    );
  }
}

export default Operations;
