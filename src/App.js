import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import Calculator from "./components/Calculator/Calculator";

class App extends Component {
  render() {
    return (
      <Layout>
        <Calculator />
      </Layout>
    );
  }
}

export default App;
