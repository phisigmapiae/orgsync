import React from 'react';
import { Component } from 'react';

import IdealBrother from '../components/about/idealbrother';
import Highlight from '../components/alumni/highlight';

export default class Alumni extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <div className="row">
            <IdealBrother />
            <Highlight />
          </div>
        </div>
      </div>
    );
  }
}
