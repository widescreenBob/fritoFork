import React, { Component } from 'react';
import './styles.scss';

class About extends Component {
  render() {
    return(
      <>
      <div className="about__container">
        <img src={this.props.about.image} alt="fritos being enjoyed"/>
        <h2> About us </h2>
        <div className="about__text">
          {this.props.about.text}
        </div>
      </div>
      </>
    );
  }
}

export default About;
