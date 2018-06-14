import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: inline-grid;
  grid-template-columns: 300px 200px;
  grid-template-rows: 100px 300px;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background-color: #ebeaea;
  padding: 30px;
  font-family: sans-serif;
`;

const Layout = props => <LayoutContainer>{props.children}</LayoutContainer>;

export default Layout;
