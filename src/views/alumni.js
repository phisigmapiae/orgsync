import React from 'react';
import { Component } from 'react';

import IdealBrother from '../components/about/idealbrother';

export default class Alumni extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <div className="row">
            <IdealBrother />
          </div>
        </div>
      </div>
    );
  }
}
