import React from 'react';

const LoanOffer = (props) => {
  const { amount} = props;
  return (
    <div className="loan-offer">
      <div className='loan-details'>
        <span className='label'>amount</span>
        <div>
          <span className='value'>{amount}</span>
          <span className='suffix'>NGN</span>
        </div>
      </div>
      <button className='request-btn'>Request</button>
    </div>
  )
}

export default LoanOffer;
