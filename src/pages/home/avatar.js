import React from 'react';


import avatar from '../../assets/images/avatar.png';

const Avatar = (props) => {
  const { name } = props
  return (
    <div class="avatar-ctx">
      <img class='avatar-image' src={avatar} alt='avatar'/>
      <div class='profile-info'>
        <span>{name}</span><br />
        <span>credit score: 750</span><br />
        <span>income: 750</span><br />
        <span>expenses: 750</span><br />
      </div>
    </div>
  )
}

export default Avatar;
