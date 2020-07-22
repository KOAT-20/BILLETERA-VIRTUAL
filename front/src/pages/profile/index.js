import React, { Component } from 'react';
import { MDBCard, MDBCardBody }from 'mdbreact';

export default class Profile extends Component {

  async componentDidMount () {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    if (!userData) {
      return window.location.href = ('/');
    }
  }

  render () {
    return (
      <MDBCard>
        <MDBCardBody>
          Profile
        </MDBCardBody>
      </MDBCard>
    );
  }
}
