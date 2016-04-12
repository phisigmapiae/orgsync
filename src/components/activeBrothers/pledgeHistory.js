import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import { PledgeClass } from './pledgeClass';

class PledgeHistory extends Component {
  renderClasses() {
    return this.props.classes.map((pClass, index) => {
        return (
          <PledgeClass
            key={pClass.name}
            name={pClass.name}
            inducted={pClass.inducted}
            members={pClass.members}
            photo={pClass.photo}
            />
        );
    });
  }

  render() {
    return (
      <div className="col-xs-6 col-md-3 ideal-brother hidden-xs hidden-sm">
        <div className="sidebar">
          <img src="http://os_extranet_images.s3.amazonaws.com/238812_original.jpg"  />
          <img src="http://os_extranet_images.s3.amazonaws.com/238810_original.jpg"  />
          <h1 className="the_ideal_brother">Pledge Class History</h1>
          { this.renderClasses() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { classes : state.brothers.classes };
}

export default connect(mapStateToProps)(PledgeHistory);
