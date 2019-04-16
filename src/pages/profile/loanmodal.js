import React from 'react';
import ReactDOM from "react-dom";
import moment from 'moment';

const modal = (props) => {
  const { loan, onClickPay } = props;
  const userId = localStorage.getItem('user_id');

  return (
    <div className='dimmer'>
      <div className='modal-content'>
        <div className="loan-modal-summary">
          <div className='summary-item-ctx principal'>
            <span className='label'>principal</span>
            <span className='value'>{loan.amount}</span>
          </div>
          <div className='summary-item-ctx interest'>
            <span className='label'>interest</span>
            <span className='value'>{loan.interest_rate}</span>
          </div>
          <div className='summary-item-ctx total'>
            <span className='label'>total</span>
            <span className='value'>{loan.amount + loan.interest_rate}</span>
          </div>
          <div className='summary-item-ctx rate'>
            <span className='label'>rate</span>
            <span className='value'>{(loan.interest_rate/loan.amount * 100).toFixed(2)}%</span>
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
              {(loan.installments.length < 1) ? <div />
              : (
                loan.installments.map((install, i) => (
                  <tr key={install.id}>
                    <td>{moment(install.due_date).format('DD/MM/YYYY, hh:mma')}</td>
                    <td>{i + 1}/4</td>
                    <td>{install.status}</td>
                    <td>{install.amount}</td>
                    {(install.status === 'pending') ? (
                      <td><button onClick={() => {onClickPay(userId, install.id, install.amount)}} >pay</button></td>
                    ): (<td>Done</td>)}
                  </tr>
                ))
              )}
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
