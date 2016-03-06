import React from 'react';
import { Component } from 'react';

import PledgeHistory from '../components/activeBrothers/pledgeHistory';

export default class ActiveBrothers extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <div className="row">
            <PledgeHistory />
          </div>
        </div>
      </div>
    );
  }
}
