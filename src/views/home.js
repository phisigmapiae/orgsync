import React from 'react';
import { Component } from 'react';

import Carousel from '../components/home/slider';
import Connect from '../components/home/connect';
import News from '../components/home/news';
import Philanthropy from '../components/home/philanthropy';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content" >
          <Carousel />
          <div className="row show-grid">
            <div className="col-md-4"><Connect/></div>
            <div className="col-md-4"><News/></div>
            <div className="col-md-4"><Philanthropy/></div>
          </div>
        </div>
      </div>
    );
  }
}
