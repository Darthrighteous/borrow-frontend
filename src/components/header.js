import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='app-header'>
        <Link to='/'>
          Borrow
        </Link>
        <Link to='/my-profile'>
          dashboard
        </Link>
      </header>
    )
  }
}
