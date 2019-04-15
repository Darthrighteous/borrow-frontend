import React from 'react';

const LoanSummary = (props) => {
  const { amount, status, dueDate } = props
  return (
    <div className='loan-summary'>
      <div className='info-block'>
        <span className='info-item label'>amount</span>
        <span className='info-item amount'>
          {amount}
          <span className='info-item suffix'>NGN</span>
        </span>
      </div>
      <div className='info-block'>
        <span className='info-item label'>status</span>
        <span className='info-item status'>
          {status}
        </span>
      </div>
      <div className='info-block'>
        <span className='info-item label'>due date</span>
        <span className='info-item due-date'>
          {dueDate}
        </span>
      </div>
    </div>
  )
}

export default LoanSummary;
