import Reac, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
/* Components */
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';

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

  render () {
    return (
      <div>
        <header>
          <Navbar setSession={this.setSession} />
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
        </MDBContainer>
      </div>
    );
  }
}
