import React, { Component } from "react";

import whiteLogo from "../../public/assets/logo/white.png";

class Footer extends Component {
  constructor() {
    super()
  }
  render() {
    return (

      <div className="footer">
        <div footer-logo-container="" >
        </div>
        <ul className="footer-container">
          <li className="social"> social network icon box</li>
        </ul>
      </div>
    )
  }
}

export default Footer;