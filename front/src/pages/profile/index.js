import React, { Component } from 'react';
import axios from 'axios'
import {
  MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardHeader, MDBBtn, MDBCardTitle
}from 'mdbreact';

export default class Profile extends Component {
  state = {
    documents: '',
    name: '',
    phone: '',
    email: ''
  }

  async componentDidMount (id) {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    console.log(userData);
    if (!userData) {
      return window.location.href = ('/');
    }
    try {
      const res = await axios.get(`http://localhost:4000/api/users/${userData.data.id}`, userData.token);
      console.log(res.data);
      this.setState({
        token: userData.token,
        documents: res.data.documents,
        name: res.data.name,
        phone: res.data.phone,
        email: res.data.email
      })
    } catch (e) {

    }
  }

  render () {
    return (
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol>
              <MDBCardHeader>
                <MDBCardTitle>Your Data</MDBCardTitle>
              </MDBCardHeader>
              <div className="form-group mt-3">
                {this.state.documents === '' ? <div>Document: Cargando...</div> : this.state.documents }
              </div>
              <div className="form-group">
                {this.state.name === '' ? <div>Name: Cargando...</div> : this.state.name }
              </div>
              <div className="form-group">
                {this.state.phone === '' ? <div>Phone: Cargando...</div> : this.state.phone }
              </div>
              <div className="form-group">
                {this.state.email === '' ? <div>Email: Cargando...</div> : this.state.email }
              </div>
            </MDBCol>
            <MDBCol>
              <MDBCardHeader>
                <MDBCardTitle>Reload Wallet</MDBCardTitle>
              </MDBCardHeader>
              <form className='mt-2'>
                <div className="form-group">
                  <label htmlFor="documents" className="disabled">Document:</label>
                  <input type="number" id="documents" className="form-control" placeholder="Your document" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="numbre" className="disabled">Phone:</label>
                  <input type="number" id="numbre" className="form-control" placeholder="Your phone" disabled />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount:</label>
                  <input type="number" id="amount" className="form-control" placeholder="USD $" />
                </div>
                <div className='text-center mt-3'>
                  <MDBBtn color='orange w-75'>Send</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
