import React from 'react';


import avatar from '../../assets/images/avatar.png';

const Avatar = (props) => {
  const { name, score, income, expenses } = props
  return (
    <div className="avatar-ctx">
      <img className='avatar-image' src={avatar} alt='avatar'/>
      <div className='avatar-info'>
        <span className='info-item title'>{name}</span><br />
        <span className='info-item'>Credit score: {score}</span><br />
        <span className='info-item'>Income: {income}</span><br />
        <span className='info-item'>Expenses: {expenses}</span><br />
      </div>
    </div>
  )
}

export default Avatar;
