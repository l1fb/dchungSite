import React, { Component } from 'react';
import prof from "../../public/assets/prof/prof.jpg";
import icon from "../../public/assets/logo/white.png";

class Welcome extends Component {
  render() {
    var style = {
      backgroundImage: `url(${prof})`,
    };

    return (
      <div style={style} className="welcome-container">
      
        <h2 className="welcome-text first">
           David Chung
        </h2>
        
        {/* <h2 className="welcome-text role">
            Full Stack Developer
        </h2> */}
      </div>
    )
  }
}

export default Welcome;

{/* <img src={icon} width="75%" className="welcome-text logo"></img> */}