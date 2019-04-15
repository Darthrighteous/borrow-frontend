import React from 'react';


import avatar from '../assets/images/avatar.png';

const Avatar = (props) => {
  const { name, score, income, expenses } = props
  return (
    <div className="avatar-ctx">
      <img className='avatar-image' src={avatar} alt='avatar'/>
      <div className='avatar-info'>
        <span className='info-item name'>{name}</span><br />
        <div className='info-block'>
          <span className='info-item label'>credit score</span>
          <span className='info-item score'>{score}</span>
        </div>
        <div className='income-info'>
          <div className='info-block'>
            <span className='info-item label'>income</span>
            <span className='info-item income'>
              {income}
              <span className='info-item suffix'>NGN</span>
            </span>
          </div>
          <div className='info-block'>
            <span className='info-item label'>expenses</span>
            <span className='info-item expenses'>
              {expenses}
              <span className='info-item suffix'>NGN</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar;
