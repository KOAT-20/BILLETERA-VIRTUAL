import React, { Component } from 'react';
import axios from 'axios'
import {
  MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardHeader, MDBBtn, MDBCardTitle,
  MDBCardFooter
}from 'mdbreact';
/* Components */
import Alert from '../../components/alerts';

export default class Profile extends Component {
  state = {
    documents: '',
    name: '',
    phone: '',
    email: '',
    amount: ''
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

  reloadWallet = async (e) => {
    try {
      e.preventDefault();
      if (this.state.documents.length === '' ||
          this.state.phone.length === '' ||
          this.state.amount.length === '') {
        this.setState({
          btn: true,
          flagMsg: !this.state.flagMsg,
          case: 'warning',
          msg: 'Por favor, complete todos los campos',
        })
        console.log('error');
      } else {
        await axios.post('http://localhost:4000/api/wallet', {
          documents: this.state.documents,
          phone: this.state.phone,
          amount: this.state.amount,
        })
        this.setState({
          documents: '',
          phone: '',
          amount: '',
          btn: true,
          flagMsg: !this.state.flagMsg,
          case: 'success',
          msg: 'Billetera Recargada!',
        });
      }
    } catch (error) {
      this.setState({
        btn: true,
        flagMsg: !this.state.flagMsg,
        case: 'warning',
        msg: 'Por Favor ingrese el monto a recargar!',
      });
    }
  }

  setFlagMsg = () => {
    this.setState({
      flagMsg: false,
      btn: false,
    });
  };

  changeInput = (e) => {
    this.setState ({
      [e.target.id]: e.target.value
    })
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
              <MDBCardFooter>
                <MDBCardTitle className='h1'>Your balance</MDBCardTitle>
                <h1>0.0 USD $</h1>
              </MDBCardFooter>
            </MDBCol>
            <MDBCol>
              <MDBCardHeader>
                <MDBCardTitle>Reload Wallet</MDBCardTitle>
              </MDBCardHeader>
              <form onSubmit={this.reloadWallet} className='mt-2'>
                <div className="form-group">
                  <label htmlFor="documents" className="disabled">Document:</label>
                  <input type="number" id="documents" className="form-control" placeholder="Your document" disabled onChange={this.changeInput} />
                </div>
                <div className="form-group">
                  <label htmlFor="numbre" className="disabled">Phone:</label>
                  <input type="number" id="numbre" className="form-control" placeholder="Your phone" disabled onChange={this.changeInput} />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount:</label>
                  <input type="number" id="amount" className="form-control" placeholder="USD $" onChange={this.changeInput} />
                </div>
                <div className='text-center mt-3'>
                  <MDBBtn type='submit'color='orange w-75'>Send</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        <Alert btn={this.state.btn} setFlagMsg={this.setFlagMsg} case={this.state.case} msg={this.state.msg} flagMsg={this.state.flagMsg} />
      </MDBCard>
    );
  }
}
