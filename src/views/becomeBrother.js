import React from 'react';
import { Component } from 'react';

import IdealBrother from '../components/about/idealbrother';
import BecomeBrotherSection from '../components/becomeBrother/becomeBrother';


export default class BecomeBrother extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <div className="row">
            <IdealBrother />
            <BecomeBrotherSection />
          </div>
        </div>
      </div>
    );
  }
}
