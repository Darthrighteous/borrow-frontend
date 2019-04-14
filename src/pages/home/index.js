import React, { Component } from 'react';
import Avatar from './avatar';

export default class Home extends Component {
  render() {
    return (
      <div class='page' id='homepage'>
        <h1>HOME PAGE</h1>
        <Avatar name='Nnamdi Azikwe'/>
      </div>
    )
  }
}
