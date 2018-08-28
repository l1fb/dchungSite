import React, { Component } from 'react';

import whiteLogo from "../../public/assets/logo/white.png";

class Nav extends Component {
  render() {
    return (
      <ul className="header-container">
        <li className="header-left">
          <a className="logo_container" href="www.davidyonchung.com">
            {/* <img src={whiteLogo} height="50px">
            </img> */}
          </a>
        </li>

        <li className="header-right">
          <a className="bttn"> Home </a>
          <a className="bttn"> About </a>
          <a className="bttn"> Projects </a>
          <a className="bttn"> Contact </a>
        </li >

        <div className="native-button-container">

          <div className="native-button">&#9776;</div>
        
        </div>

      </ul >
    )
  }
}

export default Nav;