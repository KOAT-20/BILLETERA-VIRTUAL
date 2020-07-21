import React, { Component } from 'react';
/* Images */
import logo from './logo.PNG';

export class Logo extends Component {
  render () {
    return (
      <div>
        <img src={logo} style={{ height: '50px'}} className='rounded img-fluid' alt='logo'/>
      </div>
    );
  }
}
