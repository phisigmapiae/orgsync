import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class PledgeHistory extends Component {
  renderClasses() {
    return this.props.classes.map((pClass, index) => {
      return (
        <div key={ pClass.name }>
          <h2 id="founders">{ pClass.name }</h2>
          <h3>{ pClass.inducted }</h3>
          <p>
            { pClass.members }
            <a href={pClass.photo}>[photo]</a>
          </p>
        </div>
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
