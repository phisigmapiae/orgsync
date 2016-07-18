import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import BrotherPanel from '../activeBrothers/brotherPanel';

import { PLEDGE_CLASSES } from '../activeBrothers/activeBros'

class Highlight extends Component {

  renderBrothers() {
    // For now just return the list. TODO: Sort this list before rendering.

    let bros = this.props.brothers.map((bro, index) => {
      if (!bro["active"]) {
            return (<BrotherPanel key={bro["first name"] + bro["last name"] + bro["class"]} bro={bro} />);
      }
    });
    bros = _.compact(bros);

    return _.sortBy(bros, function(bro) {
        return PLEDGE_CLASSES.indexOf(bro["class"]);
    });
  }

  render() {
    return (
        <div className="col-xs-12 col-md-9 highlightPage">
            <h1 className="pageHeader">Alumni Spotlight</h1>
            <hr color="#C2A26F" size="1px" />

              <div className="highlightImage">
                <p>Brother Patrick Herron</p>
                <img src="http://os_extranet_images.s3.amazonaws.com/284847_original.jpg" />
              </div>
              <h2 className="innerHeader">Initiate Class</h2>

              <hr color="#C2A26F" size="1px"/>
              <p>Iota (Spring 1993)</p>

              <h2 className="innerHeader">What I Am Doing Now</h2>

              <hr color="#C2A26F" size="1px"/>
              <p>I am an Assistant Professor in the Department of Family &amp; Social Medicine at Albert Einstein College of Medicine &amp; Montefiore Medical Center in the Bronx, NY. I'm also in the final year of completing my doctorate in Clinical Bioethics.</p>

              <h2 className="innerHeader">How Phi Sigma Pi Has Helped Me</h2>

              <hr color="#C2A26F" size="1px"/>
              <p>My fondness for WCU and the time I spent there is almost entirely Phi Sigma Pi related. Through the fraternity I developed not only some amazing and long lasting friendships, but I gained invaluable experience working with peers and learning what it means to be a leader. It was many years after graduating and having spent a number of years of being an inactive alum, that I decided to give back to the fraternity through volunteering and eventually serving on National Council for three terms as Vice President of Membership Development. Those were six wonderful years and reignited my enthusiasm and devotion to helping Phi Sigma Pi be a stronger organization.</p>

              <h2 className="innerHeader">Best Memory from Phi Sigma Pi</h2>

              <hr color="#C2A26F" size="1px"/>
              <p>I was very humbled when in 2012, I was awarded both the Rolla F. Wood Alumni Scholarship and a Distinguished Service Key. After 20 years of involvement with Phi Sigma Pi, I feel very confident in sharing that joining has been among the best decisions I've ever made.</p>

              <h2 className="innerHeader">Alumni</h2>

              <hr color="#C2A26F" size="1px"/>

              <div className="row brotherRow">
              <hr color="#C2A26F" size="1px"/>
              { this.renderBrothers() }
              </div>
        </div>
    );
  }
}

function mapStateToProps(props) {
  return { brothers : props.brothers.brothers };
}

export default connect(mapStateToProps)(Highlight)
