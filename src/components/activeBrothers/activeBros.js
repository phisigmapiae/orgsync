import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import BrotherPanel from './brotherPanel';

const EXEC_POSITIONS = ["President", "Vice President", "Secretary", "Treasurer", "Parliamentarian",
                        "Historian", "Initiate Advisor"];

const CHAIR_POSITIONS = ["Service", "Social", "Finance", "Scholarship", "Fellowship", "ICR / Regional Rep",
                          "Rush / CO-IA", "Web & Tech", "Alumni Relations", "Risk Management", "Philanthropy",
                        "Public Relations"];

export const PLEDGE_CLASSES = ["A", "B", "Γ", "Δ", "Ε", "Z", "H", "Θ", "I", "K", "Λ", "M", "N", "Ξ", "O", "Π", "P", "Σ", "T",
"Y", "Φ", "X","Ψ","Ω","AA", "AB", "AΓ", "AΔ", "AΕ", "AZ", "AH", "AΘ", "AI", "AK", "AΛ", "AM", "AN", "AΞ", "AO",
"AΠ", "AP", "AΣ", "AT", "AY", "AΦ", "AX","AΨ","AΩ","BA", "BB", "BΓ", "BΔ", "BΕ", "BZ", "BH", "BΘ", "BI", "BK",
"BΛ", "BM", "BN", "BΞ", "BO", "BΠ", "BP", "BΣ","BT", "BY", "BΦ", "BX","BΨ","BΩ"];

class ActiveBros extends Component {
  renderExecBoard() {
    let bros = this.props.brothers.map((bro, index) => {
      if (EXEC_POSITIONS.indexOf(bro["position"]) > -1) {

        return (<BrotherPanel key={bro["first name"] + bro["last name"] + bro["class"]} bro={bro} />);
      }
    });
    bros = _.compact(bros);

    return _.sortBy(bros, function(bro) {
        return EXEC_POSITIONS.indexOf(bro.props.position);
    });
  }

  renderChairs() {
    let bros = this.props.brothers.map((bro, index) => {
      if (CHAIR_POSITIONS.indexOf(bro["position"]) > -1) {
        return (<BrotherPanel key={bro["first name"] + bro["last name"] + bro["class"]} bro={bro} />
      );
      }
    });
    bros = _.compact(bros);
    return _.sortBy(bros, function(bro) {
        return CHAIR_POSITIONS.indexOf(bro["class"]);
    });
  }

  renderAlumniAdvisors() {
    // For now just return the list. TODO: Sort this list before rendering.
    let bros = this.props.brothers.map((bro, index) => {
      if (bro["position"] === "Alumni Advisor") {
        return (<BrotherPanel key={bro["first name"] + bro["last name"] + bro["class"]} bro={bro} />);
      }
    })
    return _.compact(bros);
  }

  renderBrothers() {
    // For now just return the list. TODO: Sort this list before rendering.
    let bros = this.props.brothers.map((bro, index) => {
      if (CHAIR_POSITIONS.indexOf(bro["position"]) === -1 &&
          EXEC_POSITIONS.indexOf(bro["position"]) === -1 &&
          bro["position"] !== "Alumni Advisor" &&
          bro["active"]) {
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
      <div className="col-xs-12 .col-sm-12 col-md-9 activePage">
          <h1 className="pageHeader">Active Brothers</h1>
          <img src="http://os_extranet_images.s3.amazonaws.com/238811_original.jpg" />

          <div className="row brotherRow">
          <h2 className="innerHeader">Executive Board</h2>
          <hr color="#C2A26F" size="1px"/>
          { this.renderExecBoard() }
          </div>

          <div className="row brotherRow">
          <h2 className="innerHeader">Alumni Advisors</h2>
          <hr color="#C2A26F" size="1px"/>
          { this.renderAlumniAdvisors() }
          </div>

          <div className="row brotherRow">
          <h2 className="innerHeader">Chair Positions</h2>
          <hr color="#C2A26F" size="1px"/>
          { this.renderChairs() }
          </div>

          <div className="row brotherRow">
          <h2 className="innerHeader">Brothers</h2>
          <hr color="#C2A26F" size="1px"/>
          { this.renderBrothers() }
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { brothers : state.brothers.brothers };
}

export default connect(mapStateToProps)(ActiveBros);
