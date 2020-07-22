import React, { Component } from 'react';
import * as axios from 'axios';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdbreact';
import { LoginOutlined } from '@ant-design/icons';
/* Styles */
import './login.css';
/* Components */
import Alert from '../alerts';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    btn: false,
    flagMsg: false,
    case: 'success',
    msg: '',
  }

  login = async (e) => {
    e.preventDefault();
    const regexEmail = /^[a-z0-9-_.]{5,30}@[a-z]{5,30}.[a-z]{2,3}$/;
    const regexPassword = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[_$.!])[0-9a-zA-Z_$.!-]{8,16}$/;
    if (regexEmail.test(this.state.email) && regexPassword.test(this.state.password)) {
      try {
        const res = await axios.post('http://localhost:4000/api/auth', {
          email: this.state.email,
          password: this.state.password,
        });
        localStorage.setItem('user_data', JSON.stringify(res.data.data));
        localStorage.setItem('session', true);
        window.location.href = '/profile';
      } catch (error) {
        console.log('Usuario no registrado!');
      }
    } else if (this.state.email !== '' && this.state.password.length !== '') {
      this.setState({
        btn: true,
        flagMsg: !this.state.flagMsg,
        case: 'warning',
        msg: 'Por favor verifique sus datos!',
      });
    } else {
      this.setState({
        btn: true,
        flagMsg: !this.state.flagMsg,
        case: 'error',
        msg: 'Campos no validos!',
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
      <MDBCard className='ctn-login'>
        <MDBCardBody>
          <div className='text-center'><LoginOutlined className='icon-login' /></div>
          <form onSubmit={this.login}>
            <div className='grey-text mt-3'>
              <label className='black-text'>Email</label>
              <input type='email' id='email' className='form-control' onChange={this.changeInput} />
              <br />
              <label className='black-text'>Password</label>
              <input type='password' id='password' className='form-control' onChange={this.changeInput} />
            </div>
            <div className='text-center mt-5'>
              <MDBBtn type='submit' color='secondary w-75'>Login</MDBBtn>
            </div>
            <div className='text-center mt-5'>
              <a href='/'><small>Restore User</small></a>
              <br/>
              <a href='/'><small>Restore Password</small></a>
            </div>
          </form>
        </MDBCardBody>
        <Alert btn={this.state.btn} setFlagMsg={this.setFlagMsg} case={this.state.case} msg={this.state.msg} flagMsg={this.state.flagMsg} />
      </MDBCard>
    );
  }
}
