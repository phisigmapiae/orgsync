import React, { Component } from 'react';

export default class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {mounted: false};
  }

  paintTwitter() {
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  }

  componentDidMount() {
      this.paintTwitter();
      this.setState({mounted: true});
  }
  render() {
    if (this.state.mounted) {
      twttr.widgets.load()
    }

    return (
      <div className="indexSection connectSection">
        <h2>Connect With AE</h2>
        <hr color="#C2A26F" size="1px" />
          <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/phisigmapiae">
            <span className="fa fa-twitter"></span>
          </a>
          <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/wcuphisigmapi/">
            <span className="fa fa-facebook"></span>
          </a>
          <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/phisigmapiae/">
            <span className="fa fa-instagram"></span>
          </a>
          <a className="twitter-timeline" href="https://twitter.com/phisigmapiae" data-widget-id="706522265932926977">Tweets by @phisigmapiae</a>
      </div>
    );
  }
}
