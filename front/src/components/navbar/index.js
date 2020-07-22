import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav
} from 'mdbreact';
import { LogoutOutlined } from '@ant-design/icons';
import { Logo } from '../../images/images.js';
/* Style */
import './navbar.css';

export default class Navbar extends Component {
  constructor (props) {
    super (props);
    this.state = {
      logout: true,
    }
  }

  async componentDidMount () {
    const flag = (localStorage.session === 'true') ? true : false;
    this.setState({
      logout: flag,
    }, () => {
      this.props.setSession(this.state.logout)
    })
  }

  render () {
    return (
      <MDBNavbar className='nav-style' color='stylish-color' light>
        <MDBNavbarBrand>
        <Logo />
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          {(JSON.parse(localStorage.getItem('user_data'))) ?
          <LogoutOutlined className='logout' onClick={this.props.logOut} /> 
          :
          ''
        }
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}
