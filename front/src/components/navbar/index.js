import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav
} from 'mdbreact';
import { LogoutOutlined } from '@ant-design/icons';
import { Logo } from '../../images/images.js';
/* Style */
import './navbar.css';

export default class Navbar extends Component {
  state = {
    logout: false
  }
  render () {
    return (
      <MDBNavbar className='nav-style' color='stylish-color' light>
        <MDBNavbarBrand>
        <Logo />
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          {this.state.logout === false ? '' : <LogoutOutlined className='logout' /> }
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}
