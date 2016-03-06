import React from 'react';
import { Component } from 'react';

import IdealBrother from '../components/about/idealbrother';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <div className="row">
            <IdealBrother />
            <div className="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
          </div>
        </div>
      </div>
    );
  }
}
