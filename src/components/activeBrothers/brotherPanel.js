import React from 'react';
import { Component } from 'react';

export default class BrotherPanel extends Component {
  render() {

    const { fName, lName, position, img, pClass } = this.props;

    return (
      <div key={fName + lName} className="brotherThumbnail">
            <p> {position} </p>
            <img alt="brother" src={img} />
            <p> {fName} | {pClass}</p>
      </div>
    );
  }
}