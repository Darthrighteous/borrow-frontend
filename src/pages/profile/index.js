import React, { Component } from 'react';

import Avatar from '../../components/avatar';
import LoanSummary from './loansummary';
import LoanModal from './loanmodal';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'history',
      isModalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  switchTabs(title) {
    this.setState({
      tab: title
    })
  }

  openModal() {
    this.setState({
      isModalOpen: true
    }, () => {
      document.addEventListener('click', this.handleClick);
    })
  }

  handleClick = (e) => {
    if (e.target.className === 'dimmer') {
      this.closeModal()
    }
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    }, () => {
      document.removeEventListener('click', this.handleClick);
    })
  }

  render() {
    const { tab, isModalOpen } = this.state;
    const historyClass = tab === 'history' ? 'active' : ''
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
              <LoanSummary onSelectLoan={this.openModal} amount={100000} status={'paid'} dueDate={'5 days ago'}/>
              <LoanSummary onSelectLoan={this.openModal} amount={100000} status={'paid'} dueDate={'5 days ago'}/>
            </div>
          ) : (
            <div className='tab-content'>
              <div>Loan offer 1</div>
              <div>Loan offer 2</div>
            </div>
          )}
          {(isModalOpen) ? (
            <LoanModal />
          ) : (<div />)}
        </div>
        <div className='side-bar'>
          <Avatar name='Nnamdi Azikwe' score={750} income={10000} expenses={5000}/>
        </div>
      </div>
    )
  }
}
