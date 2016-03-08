import React, { Component } from 'react';

export default class News extends Component {
  render() {
    return (
      <div className="index-section news-section">
        <h2>AE In The News</h2>
        <hr color="#C2A26F" size="1px" />

          <div className="news-item">
            <a href="http://wcu.orgsync.com/org/phisigmapi/News_1" target="_blank">
              <img src="http://os_extranet_images.s3.amazonaws.com/283156_original.png" />
            </a>
            <p>
              <a href="http://wcu.orgsync.com/org/phisigmapi/News_1" target="_blank">
                Alpha Epsilon Travels to St. Joseph's University for the Philadelphia Metropolitan Regional Conference
              </a>
            </p>
          </div>

      </div>
    );
  }
}
