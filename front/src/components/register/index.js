import React, { Component } from 'react';
import * as axios from 'axios';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import { UserOutlined } from '@ant-design/icons';
/* Styles */
import './register.css';
/* Components */
import Alert from '../alerts';

export default class Register extends Component {
  state = {
    documents: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    btn: false,
    flagMsg: false,
    case: 'success',
    msg: '',
  }

  registerUser = async (e) => {
    try {
      e.preventDefault();
      if (this.state.documents.length === '' ||
          this.state.name.length === '' ||
          this.state.phone.length === '' ||
          this.state.email.length === '' ||
          this.state.password.length === '') {
        this.setState({
          btn: true,
          flagMsg: !this.state.flagMsg,
          case: 'warning',
          msg: 'Por favor, complete todos los campos',
        })
        console.log('error');
      } else {
        await axios.post('http://localhost:4000/api/users', {
          documents: this.state.documents,
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email,
          password: this.state.password,
        })
        this.setState({
          documents: '',
          name: '',
          phone: '',
          email: '',
          password: '',
          btn: true,
          flagMsg: !this.state.flagMsg,
          case: 'success',
          msg: 'Usuario registrado exitosamente',
        });
      }
    } catch (error) {
      this.setState({
        btn: true,
        flagMsg: !this.state.flagMsg,
        case: 'warning',
        msg: 'Por Favor complete todos los campos!',
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
          <div className='text-center'><UserOutlined className='icon-register' /></div>
          <form onSubmit={this.registerUser}>
            <div className='grey-text mt-3'>
              <label htmlFor='documents' className='black-text'>Document (DNI)</label>
              <input id='documents' type='number' className='form-control' onChange={this.changeInput} />
              <br />
              <div className='row'>
                <div className='col'>
                  <label className='black-text'>Your Name</label>
                  <input type='text' id='name' className='form-control' onChange={this.changeInput} />
                </div>
                <div className='col'>
                  <label className='black-text'>Your phone</label>
                  <input type='number' id='phone' className='form-control' onChange={this.changeInput} />
                </div>
              </div>
              <br />
              <label className='black-text'>Your Email</label>
              <input type='email' id='email' className='form-control' onChange={this.changeInput} />
              <br />
              <label className='black-text'>Your Password</label>
              <input type='password' id='password' className='form-control' onChange={this.changeInput} />
            </div>
            <div className='text-center mt-3'>
              <MDBBtn type='submit' color='success w-75' >Register</MDBBtn>
            </div>
          </form>
        </MDBCardBody>
          <Alert btn={this.state.btn} setFlagMsg={this.setFlagMsg} case={this.state.case} msg={this.state.msg} flagMsg={this.state.flagMsg} />
      </MDBCard>
    );
  }
}
