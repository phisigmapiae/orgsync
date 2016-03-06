import React, { Component } from 'react';
var Slider = require('react-slick');

export default class Carousel extends Component {
  render() {
    var settings = {
      autoplay: true,
      arrows: false
    }
    return (
      <Slider {...settings}>
        <img src="http://os_extranet_images.s3.amazonaws.com/278189_original.jpg" height="450px"/>
        <img src="http://os_extranet_images.s3.amazonaws.com/283272_original.jpg" height="450px"/>
        <img src="http://os_extranet_images.s3.amazonaws.com/278191_original.jpg" height="450px"/>
        <img src="http://os_extranet_images.s3.amazonaws.com/278190_original.jpg" height="450px"/>
        <img src="http://os_extranet_images.s3.amazonaws.com/282884_original.jpg" height="450px"/>
        <img src="http://os_extranet_images.s3.amazonaws.com/278192_original.jpg" height="450px"/>
      </Slider>
    );
  }
}
