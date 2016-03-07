import React, { Component } from 'react';

export default class Philanthropy extends Component {
  render() {
    return (
      <div className="indexSection philanthropySection">
        <h2>Philanthropy</h2>
        <hr color="#C2A26F" size="1px" />

        <a href="http://www.hoby.org/" target="_blank" >
        <img className="philanthropyImg" src="http://os_extranet_images.s3.amazonaws.com/383556_original.png" />
        </a>

        <a href="http://chestercountyfoodbank.org/" target="_blank">
        <img className="philanthropyImg" src="http://os_extranet_images.s3.amazonaws.com/278188_original.png" />
        </a>

        <a href="https://www.caseyfeldmanfoundation.org/" target="_blank">
        <img className="philanthropyImg" src="http://os_extranet_images.s3.amazonaws.com/278186_original.jpg" />
        </a>


      </div>
    );
  }
}
