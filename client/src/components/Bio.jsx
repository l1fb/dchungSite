import React, { Component } from "react";

class Bio extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="bio-body-container">
        <div className="bio-left">Bio Left </div>
        <div className="bio-right"> Probabaly picture of myself </div>
      </div>
    )
  }
}

export default Bio;