import React, { Component } from 'react';
import './styles.scss';


class Filter extends Component {
  render() {
    return(
      <>
      <div className="filter__container">
        <div className="filter__container-inner">
          <h2>Filter by flavor:</h2>
          <ul className="filter__list">
            {this.props.items.map((item, index) =>
              <li className="filter__list-item" key={index}>
                <button onClick={() => this.props.update(item)}>
                  {item}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      </>
    );
  }
}

export default Filter;
