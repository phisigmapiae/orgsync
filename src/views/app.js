import React from 'react';
import { Component } from 'react';
import Carousel from '../components/slider';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="content" >
        <div className="wrapper">
          <div className="carousel">
            <Carousel />
          </div>
        </div>
        </div>
      </div>
    );
  }
}
