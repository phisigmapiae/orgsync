import React from 'react';
import { Component } from 'react';

import IdealBrother from '../components/about/idealbrother';
import AboutPsp from '../components/about/about';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <div className="row">
            <IdealBrother />
            <AboutPsp />
          </div>
        </div>
      </div>
    );
  }
}
