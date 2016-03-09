import React, { Component } from 'react';
import { connect } from 'react-redux';
var ImageGallery = require('react-image-gallery');

class Carousel extends Component {
  render() {
    return (
      <ImageGallery
        items={this.props.images}
        autoPlay={true}
        slideInterval={4000}
        showThumbnails={false} />
    );
  }
}

function mapStateToProps(state) {
  return {
      images: state.brothers.homepageImages
  }
}

export default connect(mapStateToProps)(Carousel);
