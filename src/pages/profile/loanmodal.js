import React from 'react';
import ReactDOM from "react-dom";

const modal = (props) => {
  return (
    <div className='dimmer'>
      <div className='modal-content'>
        <div className="loan-modal-summary">
          <div className='summary-item-ctx principal'>
            <span className='label'>principal</span>
            <span className='value'>principal</span>
          </div>
          <div className='summary-item-ctx interest'>
            <span className='label'>interest</span>
            <span className='value'>principal</span>
          </div>
          <div className='summary-item-ctx total'>
            <span className='label'>total</span>
            <span className='value'>principal</span>
          </div>
          <div className='summary-item-ctx rate'>
            <span className='label'>rate</span>
            <span className='value'>principal</span>
          </div>
        </div>
        <div className='installment-list'>
          <span>Payments</span>
          <table className='installment-table'>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Installment</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Today</td>
                <td>1/4</td>
                <td>paid</td>
                <td>10000</td>
                <td><button>pay</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const LoanModal = (props) => (
  ReactDOM.createPortal(modal(props), document.querySelector("#modal"))
)

export default LoanModal;
