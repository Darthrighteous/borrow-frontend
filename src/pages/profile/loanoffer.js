import React from 'react';

const LoanOffer = (props) => {
  const { onClickRequest, amount} = props;
  const userId = localStorage.getItem('user_id')
  return (
    <div className="loan-offer">
      <div className='loan-details'>
        <span className='label'>amount</span>
        <div>
          <span className='value'>{amount}</span>
          <span className='suffix'>NGN</span>
        </div>
      </div>
      <button onClick={() => {onClickRequest(userId, amount)}} className='request-btn'>Request</button>
    </div>
  )
}

export default LoanOffer;
