import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

import BrotherPanel from './brotherPanel';

import { brothers } from '../../Brothers.js'

const EXEC_POSITIONS = ["President", "Vice President", "Secretary", "Treasurer", "Parliamentarian",
                        "Historian", "Initiate Advisor"];

const CHAIR_POSITIONS = ["Service", "Social", "Finance", "Scholarship", "Fellowship", "ICR / Regional Rep",
                          "Rush / CO-IA", "Web & Tech", "Alumni Relations", "Risk Management", "Philanthropy",
                        "Public Relations"];

const PLEDGE_CLASSES = ["A", "B", "Γ", "Δ", "Ε", "Z", "H", "Θ", "I", "K", "Λ", "M", "N", "Ξ", "O", "Π", "P", "Σ", "T",
"Y", "Φ", "X","Ψ","Ω","AA", "AB", "AΓ", "AΔ", "AΕ", "AZ", "AH", "AΘ", "AI", "AK", "AΛ", "AM", "AN", "AΞ", "AO",
"AΠ", "AP", "AΣ", "AT", "AY", "AΦ", "AX","AΨ","AΩ","BA", "BB", "BΓ", "BΔ", "BΕ", "BZ", "BH", "BΘ", "BI", "BK",
"BΛ", "BM", "BN", "BΞ", "BO", "BΠ", "BP", "BΣ","BT", "BY", "BΦ", "BX","BΨ","BΩ"];

export default class ActiveBros extends Component {
  renderExecBoard() {
    let bros = brothers.map((bro, index) => {
      if (EXEC_POSITIONS.indexOf(bro["position"]) > -1) {

        return (<BrotherPanel
          fName={bro["first name"]}
          lName={bro["last name"]}
          position={bro["position"]}
          img={bro["img"]}
          pClass={bro["class"]} />);
      }
    });
    bros = _.compact(bros);

    bros = _.sortBy(bros, function(bro) {
        return EXEC_POSITIONS.indexOf(bro["class"]);
    });

    const broChunk = _.chunk(bros, 4);
    return broChunk.map(bros => {
      return <div className="row broChunk"> {bros} </div>
    });
  }

  renderChairs() {
    let bros = brothers.map((bro, index) => {
      if (CHAIR_POSITIONS.indexOf(bro["position"]) > -1) {
        return (<BrotherPanel
          fName={bro["first name"]}
          lName={bro["last name"]}
          position={bro["position"]}
          img={bro["img"]}
          pClass={bro["class"]} />
      );
      }
    });
    bros = _.compact(bros);
    bros = _.sortBy(bros, function(bro) {
        return CHAIR_POSITIONS.indexOf(bro["class"]);
    });

    const broChunk = _.chunk(bros, 4);
    return broChunk.map((bros, index) => {
      return <div key={index} className="row broChunk"> { bros } </div>
    });
  }

  renderAlumniAdvisors() {
    // For now just return the list. TODO: Sort this list before rendering.
    let bros = brothers.map((bro, index) => {
      if (bro["position"] === "Alumni Advisor") {
        return (<BrotherPanel
          fName={bro["first name"]}
          lName={bro["last name"]}
          position={bro["position"]}
          img={bro["img"]}
          pClass={bro["class"]} />);
      }
    })
    bros = _.compact(bros);

    const broChunk = _.chunk(bros, 4);
    // return broChunk.map((bros,index) => {
      return <div className="row broChunk"> { broChunk } </div>
    // });
  }

  renderBrothers() {
    // For now just return the list. TODO: Sort this list before rendering.
    let bros = brothers.map((bro, index) => {
      if (CHAIR_POSITIONS.indexOf(bro["position"]) === -1 &&
          EXEC_POSITIONS.indexOf(bro["position"]) === -1 &&
          bro["position"] !== "Alumni Advisor") {
            return (<BrotherPanel
              key={bro["first name"] + bro["last name"] + bro["class"]}
              fName={bro["first name"]}
              lName={bro["last name"]}
              position={bro["position"]}
              img={bro["img"]}
              pClass={bro["class"]} />);
      }
    });
    bros = _.compact(bros);

    bros = _.sortBy(bros, function(bro) {
        return PLEDGE_CLASSES.indexOf(bro["class"]);
    });

    const broChunk = _.chunk(bros, 4);
    return broChunk.map((bros, index) => {
      return <div key={index} className="row broChunk"> { bros } </div>
    });
  }

  render() {
    return (
      <div className="col-xs-12 .col-sm-12 col-md-9 activePage">
          <h1 className="pageHeader">Active Brothers</h1>
          <img src="http://os_extranet_images.s3.amazonaws.com/238811_original.jpg" />

          <h2 className="innerHeader">Executive Board</h2>
          <hr color="#C2A26F" size="1px"/>
          <div className="row"> { this.renderExecBoard() } </div>

          <br/>
          <h2 className="innerHeader">Alumni Advisors</h2>
          <hr color="#C2A26F" size="1px"/>
          <div className="row"> { this.renderAlumniAdvisors() }</div>

          <br/>
          <h2 className="innerHeader">Chair Positions</h2>
          <hr color="#C2A26F" size="1px"/>
          <div className="row"> { this.renderChairs() } </div>

          <br/>
          <h2 className="innerHeader">Brothers</h2>
          <hr color="#C2A26F" size="1px"/>
          <div className="row"> { this.renderBrothers() } </div>

      </div>
    );
  }
}
