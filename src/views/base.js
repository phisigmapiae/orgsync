import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class Base extends Component {
  render() {
    return (
      <div className="container">

        <div className="outer_header">
          <div className="header">
         		<div className="org_title">
        			<div className="shield">
        				<img src="http://os_extranet_images.s3.amazonaws.com/283156_original.png" />
        			</div>
         			<h1>Phi Sigma Pi</h1>
        			<h2>National Honor Fraternity</h2>
         		</div>
        		<div className="org_info">
        			<h3>Alpha Epsilon Chapter</h3>
        			<h4>West Chester University of Pennsylvania</h4>
        		</div>
          </div>
        </div>

        <div className="navigation_wrapper">
          <div className="navigation">
            <ul>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/home" >Home</a></li>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/About">About</a></li>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/Calendar">Calendar</a></li>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/Become_a_Brother">Become a Brother</a></li>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/Active_Brothers">Active Brothers</a></li>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/Initiates">Initiates</a></li>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/Alumni_Spotlight">Alumni Spotlight</a></li>
            	<li><a href="http://wcu.orgsync.com/org/phisigmapi/Contact_Us">Contact Us</a></li>
            </ul>
          </div>
        </div>

        Base
        {this.props.children}
      </div>
    );
  }
}
