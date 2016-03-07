import React from 'react';
import { Component } from 'react';

import Resources from '../components/intitiates/resources';
import Process from '../components/intitiates/process';

import IdealBrother from '../components/about/idealbrother';

export default class Initiates extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <div className="row">
            <Resources />
            <Process />
          </div>
        </div>
      </div>
    );
  }
}
