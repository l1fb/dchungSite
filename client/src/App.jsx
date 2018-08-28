import React, { Component } from "react";

import Nav from "./components/Nav.jsx";
import Welcome from "./components/Welcome.jsx";
import Work from "./components/Work.jsx";
import Bio from "./components/Bio.jsx";
import Footer from "./components/Footer.jsx";

require("./stylesheets/main.scss");

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Nav />
        <Welcome />
        <Work />
        <Bio />
        <Footer />
      </div >
    );
  }
}

export default App;
