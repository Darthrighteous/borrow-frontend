import React, { Component } from 'react';

import Avatar from '../../components/avatar';
import LoanSummary from './loansummary';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'history'
    };
  }

  switchTabs(title) {
    this.setState({
      tab: title
    })
  }

  render() {
    const { tab } = this.state;
    const historyClass = (tab === 'history') ? 'active' : ''
    const loanClass = tab === 'loans' ? 'active' : ''

    return (
      <div className='page' id='dashboard'>
        <div className='main-content'>
          <div className='tab-buttons'>
            <button className={`tab-btn ${historyClass}`} onClick={this.switchTabs.bind(this, 'history')}>Loan History</button>
            <button className={`tab-btn ${loanClass}`} onClick={this.switchTabs.bind(this, 'loans')}>Available Loans</button>
          </div>
          {(tab === 'history') ? (
            <div className='tab-content'>
              <LoanSummary amount={100000} status={'paid'} dueDate={'5 days ago'}/>
              <LoanSummary amount={100000} status={'paid'} dueDate={'5 days ago'}/>
            </div>
          ) : (
            <div className='tab-content'>AVAILABLE LOANS</div>
          )}
        </div>
        <div className='side-bar'>
          <Avatar name='Nnamdi Azikwe' score={750} income={10000} expenses={5000}/>
        </div>
      </div>
    )
  }
}
