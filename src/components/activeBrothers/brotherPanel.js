import React from 'react';
import { Component } from 'react';

export default class BrotherPanel extends Component {
  render() {

    const { fName, lName, position, img, pClass } = this.props;

    return (
      <div key={fName + lName} className="col-lg-3 col-md-4 col-xs-6 thumb broPanel">
            <p> {position} </p>
            <img className="img-responsive" alt="brother" src={img} />
            <p>{fName} | {pClass}</p>
      </div>
    );
  }
}
