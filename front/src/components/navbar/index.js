import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav
} from 'mdbreact';
import { UserOutlined } from '@ant-design/icons';
import { Logo } from '../../images/images.js';
/* Style */
import './navbar.css';

export default class Navbar extends Component {
  render () {
    return (
      <MDBNavbar className='nav-style' color='stylish-color' light>
        <MDBNavbarBrand>
        <Logo />
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <UserOutlined className='icon-login' />
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}
