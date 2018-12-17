import React, { Component } from 'react';
import './styles.scss';

class Stars extends Component {
  render() {
    var stars = [];
    for (var i = 0; i < this.props.stars; i++) {
      stars.push(<span className='star' key={i}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 18.5">
          <path fill="#eb008b" d="M9.7 1.1l2 6.2h6.5l-5.3 3.8 2.1 6.2-5.3-3.8-5.3 3.8 2.1-6.2-5.3-3.8h6.5z"/>
          <path d="M5.1 7.9c1-.2 2.1-.2 3.1-.2l-.2.1c.2-.5.4-1.1.6-1.6.2-.5.4-1 .7-1.5-.1.6-.2 1.1-.4 1.7-.1.5-.3 1-.4 1.6l-.1.2h-.2c-1-.1-2-.1-3.1-.3z" fill="#fff"/>
        </svg>
      </span>);
    }
    return stars;
  }
}

export default Stars;
