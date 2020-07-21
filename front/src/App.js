import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
/* Components */
import Navbar from './components/navbar';
import Login from './components/login';

export default class App extends Component {
  render () {
    return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <MDBContainer className='mt-5'>
        <MDBRow>
          <MDBCol><Login /></MDBCol>
          <MDBCol>Register</MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
    );
  }
}
