import React, { Component } from 'react';

class LoanSummary extends Component {
  handleClick = () => {
    this.props.onSelectLoan(this.props.id)
  }

  render () {
    const { amount, dateTaken, dueDate } = this.props
    return (
      <div onClick={this.handleClick} className='loan-summary'>
        <div className='info-block'>
          <span className='info-item label'>amount</span>
          <span className='info-item amount'>
            {amount}
            <span className='info-item suffix'>NGN</span>
          </span>
        </div>
        <div className='info-block'>
          <span className='info-item label'>date taken</span>
          <span className='info-item date-taken'>
            {dateTaken}
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
}

export default LoanSummary;
