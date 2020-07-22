import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
/* Components */
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
/* Pages */
import Profile from './pages/profile';

export default class App extends Component {
  constructor () {
    super ();
    this.state = {
      session: null,
    }
  }

  setSession = (rol) => {
    this.setState({
      rolUser: rol,
    })
  }

  logOut = () => {
    localStorage.removeItem('user_data');
    localStorage.removeItem('session');
    console.log(`sesion cerrada.`);
    window.location.href = '/';
  }

  render () {
    return (
      <div>
        <header>
          <Navbar setSession={this.setSession} logOut={this.logOut} />
        </header>
        <MDBContainer className='mt-4'>
          <MDBRow>
            <MDBCol>
              <Route exact path='/' component={Login} />
            </MDBCol>
            <MDBCol>
                <Route exact path='/' component={Register} />
            </MDBCol>
          </MDBRow>
          <Route path='/profile' component={Profile} />
        </MDBContainer>
      </div>
    );
  }
}
