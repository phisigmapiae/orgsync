import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class Base extends Component {
  render() {
    return (
      <div className="outer_container">
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

        <div className="container" >
          <Navbar className="pspNavbar">
            <Navbar.Header>
              <Navbar.Brand>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                  <IndexLinkContainer to={{ pathname: '/'}}><NavItem >Home</NavItem></IndexLinkContainer>
                  <LinkContainer to={{ pathname: '/About'}}><NavItem >About</NavItem></LinkContainer>
                  <LinkContainer to={{ pathname: '/Become_a_Brother'}}><NavItem >Become a Brother</NavItem></LinkContainer>
                  <LinkContainer to={{ pathname: '/Active_Brothers'}}><NavItem >Active Brothers</NavItem></LinkContainer>
                  <LinkContainer to={{ pathname: '/Initiates'}}><NavItem >Initiates</NavItem></LinkContainer>
                  <LinkContainer to={{ pathname: '/Alumni'}}><NavItem >Alumni</NavItem></LinkContainer>
                  <LinkContainer to={{ pathname: '/Contact_Us'}}><NavItem >Contact Us</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

            {this.props.children}
        </div>

        <div className="footer">
        	<div className="footer_container">
        		<p>© 2014 Phi Sigma Pi - Alpha Epsilon Chapter at West Chester University of Pennsylvania</p>
        		<p>West Chester University of Pennsylvania | West Chester, PA 19383 | 610-436-1000</p>
            <p>Made with <i className="fa fa-heart"></i> by  <a href="http://piotr.codes">piotr.codes</a></p>
        	</div>
        </div>
      </div>
    );
  }
}
