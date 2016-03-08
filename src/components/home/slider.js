import React, { Component } from 'react';
var ImageGallery = require('react-image-gallery');

var images = [
  {
    original: 'http://os_extranet_images.s3.amazonaws.com/390715_original.jpg',
    originalClass: 'featured-slide',
    description: 'Family Day 2015'
  },
  {
    original: 'http://os_extranet_images.s3.amazonaws.com/390713_original.jpg'
  },
  {
    original: 'http://os_extranet_images.s3.amazonaws.com/390714_original.jpg'
  },
  {
    original: 'http://os_extranet_images.s3.amazonaws.com/390712_original.jpg'
  }
];

export default class Carousel extends Component {

  handleSlide(index) {
    console.log('Slid to ' + index);
  }

  render() {

    // <img  src="http://os_extranet_images.s3.amazonaws.com/283272_original.jpg" />
    // <img  src="http://os_extranet_images.s3.amazonaws.com/278191_original.jpg" />
    // <img  src="http://os_extranet_images.s3.amazonaws.com/278190_original.jpg" />
    // <img  src="http://os_extranet_images.s3.amazonaws.com/282884_original.jpg" />
    // <img  src="http://os_extranet_images.s3.amazonaws.com/278192_original.jpg" />


    return (
      <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={4000}
        showThumbnails={false}
        onSlide={this.handleSlide}/>
    );
  }
}
