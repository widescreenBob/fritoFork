import React, { Component } from 'react';
import './styles.scss';
import Logo from '../ForkLogo';
import { Router, Link } from "@reach/router";

class Header extends Component {
  render() {
    return(
      <>
      <div className="footer__container">
        <div className="footer__container-inner">
          <div className="footer__logo">
          <Link to="/"><Logo /></Link>{" "}
          </div>
          <ul class="footer__contact">
            <li><Link to="about">About</Link>{" "}</li>
            <li><a href="twitter.com">Twitter</a></li>
          </ul>
        </div>
        <div className="footer__copyright">©{(new Date().getFullYear())} EatingGood</div>
      </div>
      </>
    );
  }
}

export default Header;
