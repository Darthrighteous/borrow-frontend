import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export default class Header extends Component {
  render() {
    return (
      <header className='app-header'>
        <Link to='/'>
          <img className='logo' src={logo} alt='borrow'/>
        </Link>
        <Link to='/my-profile'>
          Dashboard
        </Link>
      </header>
    )
  }
}
