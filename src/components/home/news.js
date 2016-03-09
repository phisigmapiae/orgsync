import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
  renderNews() {
    return this.props.news.map((item) => {
      return (
        <div key={ item.text } className="news-item">
          <a href="http://wcu.orgsync.com/org/phisigmapi/News_1" target="_blank">
            <img src="http://os_extranet_images.s3.amazonaws.com/283156_original.png" />
          </a>
          <p>
            <a href={ item.url } target="_blank">
              { item.text }
            </a>
          </p>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="index-section news-section">
        <h2>AE In The News</h2>
        <hr color="#C2A26F" size="1px" />
        { this.renderNews() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.brothers.news
  }
}

export default connect(mapStateToProps)(News);
