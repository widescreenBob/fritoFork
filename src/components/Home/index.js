import React, { Component } from 'react';
import Featured from '../Featured';
import Filter from '../Filter';
import Thumbnails from '../Thumbnails';

class Home extends Component {
  render() {
    return(
      <>
        <Featured recipies={this.props.recipies}/>
        <Filter items={this.props.items} update= {this.props.update} />
        <Thumbnails recipies={this.props.recipies} current_type={this.props.current_type} />
      </>
    );
  }
}

export default Home;
