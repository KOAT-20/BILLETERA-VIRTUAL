import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import { UserOutlined } from '@ant-design/icons';
/* Styles */
import './register.css';

export default class Register extends Component {
  render () {
    return (
      <MDBCard>
        <MDBCardBody>
          <div className='text-center'><UserOutlined className='icon-register' /></div>
          <form>
            <div className='grey-text mt-3'>
              <label htmlFor='document' className='black-text'>Document</label>
              <div className='row ml-1 mr-1'>
                <select className='browser-default custom-select w-25'>
                  <option value='V'>V</option>
                  <option value='E'>E</option>
                  <option value='J'>J</option>
                </select>
                <input id='document' type='number' className='form-control w-75' />
              </div>
              <br /><br/>
              <label htmlFor='name' className='black-text'>Your Name</label>
              <input type='text' id='name' className='form-control' />
              <br />
              <label htmlFor='email' className='black-text'>Your Email</label>
              <input type='email' id='email' className='form-control' />
              <br />
              <label htmlFor='passwordr' className='black-text'>Your Password</label>
              <input type='password' id='passwordr' className='form-control' />
            </div>
            <div className='text-center mt-3'>
              <MDBBtn color='success w-75' >Register</MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
