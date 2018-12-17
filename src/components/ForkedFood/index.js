import React, { Component } from 'react';
import Stars from '../Stars';
import './styles.scss'

class ForkedFood extends Component {

  render() {
    const location= window.location.pathname.split("/").pop();
    return(
      <>
        {this.props.recipies.filter(recipie => recipie.link === location).map((recipie, index) => (
          <>
            <div key={index} className="forked__container">
              <div className="forked__img-contain">
                <img src={recipie.main_image} alt={recipie.title}/>
              </div>
              <div className="forked__content-container">
                <h2>{recipie.title}</h2>
                <div className="forked__stars">
                  <Stars stars={recipie.rating} />
                </div>
                <div className="forked__text">
                  {recipie.main_text}
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
  }
}

export default ForkedFood;
