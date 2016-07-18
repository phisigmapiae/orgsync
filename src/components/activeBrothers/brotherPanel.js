import React from 'react';
import { Component } from 'react';

export default class BrotherPanel extends Component {
  render() {
    const { bro: {
              'first name' : fName,
              'last name' : lName,
              position,
              img,
              class: pClass
            }
    } = this.props;

    return (
      <div key={fName + lName} className="brother-panel">
            <p> {position} </p>
            <img alt="brother" src={img} />
            <p> {fName} | {pClass}</p>
      </div>
    );
  }
}

BrotherPanel.propTypes = { bro: React.PropTypes.object };
BrotherPanel.defaultProps = { bro: {} };
