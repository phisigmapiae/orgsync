import React, { Component } from 'react';

import IdealBrother from '../components/about/idealbrother';

export default class Contact extends Component {
  render() {
    return (
      <div className="content" >
        <div className="row">
          <IdealBrother/>
          <div className="col-xs-12 col-md-9 highlightPage">
            <iframe height="1200" width="100%" src="https://docs.google.com/spreadsheet/embeddedform?formkey=dFozaGw2d0VURHhZWmQwWF9CRFYxY3c6MQ">Loading...</iframe>
          </div>
        </div>
      </div>
    );
  }
}
