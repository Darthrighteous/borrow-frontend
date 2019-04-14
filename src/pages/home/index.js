import React, { Component } from 'react';
import Avatar from './avatar';

export default class Home extends Component {
  render() {
    return (
      <div className='page' id='homepage'>
        <h1 className='select-prompt'>Proceed as</h1>
        <div className='avatar-list'>
          <Avatar name='Nnamdi Azikwe' score={750} income={10000} expenses={5000}/>
          <Avatar name='Bill Gates' score={750} income={10000} expenses={5000}/>
          <Avatar name='Tahmir Mardling' score={750} income={10000} expenses={5000}/>
        </div>
      </div>
    )
  }
}
