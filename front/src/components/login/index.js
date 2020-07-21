import React, { Component } from 'react';
import { MDBCard, MDBCardBody } from 'mdbreact';
import { LoginOutlined } from '@ant-design/icons'
/* Styles */
import './login.css';

export default class Login extends Component {
  render () {
    return (
      <MDBCard className='ctn-login' color='grey lighten-2'>
        <MDBCardBody>
          <div className='text-center'><LoginOutlined className='icon-login' /></div>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
