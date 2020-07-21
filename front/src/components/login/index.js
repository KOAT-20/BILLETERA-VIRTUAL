import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import { LoginOutlined } from '@ant-design/icons';
/* Styles */
import './login.css';

export default class Login extends Component {
  render () {
    return (
      <MDBCard className='ctn-login'>
        <MDBCardBody>
          <div className='text-center'><LoginOutlined className='icon-login' /></div>
          <form>
            <div className='grey-text mt-3'>
              <label htmlFor='user' className='black-text'>User</label>
              <input type='text' id='user' className='form-control' />
              <br />
              <label htmlFor='password' className='black-text'>Password</label>
              <input type='text' id='password' className='form-control' />
            </div>
            <div className='text-center mt-5'>
              <MDBBtn color='secondary w-75'>Login</MDBBtn>
            </div>
            <div className='text-center mt-5'>
              <a href='/'><small>Restore User</small></a>
              <br/>
              <a href='/'><small>Restore Password</small></a>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
