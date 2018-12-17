import React, { Component } from 'react';
import Stars from '../Stars';
import './styles.scss';
import {  Link } from "@reach/router";

class Featured extends Component {
  render() {
    return(
      <>
        <div className="featured__container">
          {this.props.recipies.filter(recipie => recipie.featured).map((recipie, index) => (
            <>
              <Link to={`forked-food/${recipie.link}`}>
                <div key={index} className="featured__container">
                  <div className="featured__inner-left">
                  <div className="featured__img-container">
                    <img src={recipie.main_image} alt={recipie.title}/>
                  </div>
                  </div>
                  <div className="featured__inner-right">
                    <h2>{recipie.title}</h2>
                    <div className="featured__text">
                      {recipie.teaser_text}
                    </div>
                    <Stars stars={recipie.rating} />
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </>
    );
  }
}

export default Featured;
