import React, { Component } from 'react';
import './styles.scss';
import Logo from '../ForkLogo';
import { Router, Link } from "@reach/router";

class Header extends Component {
  render() {
    return(
      <>
      <div className="header__container">
        <div className="header__container-inner">
          <div className="header__logo">
            <Link to="/"><Logo /></Link>{" "}
          </div>
          <div className="header__motto">
            {this.props.motto}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Header;
