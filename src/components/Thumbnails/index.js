import React, { Component } from 'react';
import './styles.scss';
import ForkIcon from '../ForkIcon';
import {  Link } from "@reach/router";

class thumbnail extends Component {
  render() {
    return(
      <>
        <div className="thumbnail__container">
          {this.props.recipies.filter(recipie => recipie.type === this.props.current_type || this.props.current_type === 'All').map((recipie, index) => (
            <>
              <Link to={`forked-food/${recipie.link}`} key={index}>
                <div className="thumbnail__item" >
                  <img src={recipie.teaser_image} alt={recipie.title}/>
                  <div class="thumbnail__header-cont">
                    <h3>{recipie.title}</h3>
                    <ForkIcon/>
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

export default thumbnail;
