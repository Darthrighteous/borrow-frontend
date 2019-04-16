import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Avatar from '../../components/avatar';
import LoanSummary from './loansummary';
import LoanModal from './loanmodal';
import LoanOffer from './loanoffer';
import { fetchUserInfo, makePayment, requestLoan } from '../../actions/profileActions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'history',
      isModalOpen: false,
      currentLoanId: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  switchTabs(title) {
    this.setState({
      tab: title
    })
  }

  openModal(id) {
    this.setState({
      isModalOpen: true,
      currentLoanId: id
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

   componentDidMount () {
     const { fetchUserInfo } = this.props;
     fetchUserInfo(localStorage.getItem('user_id'));
   }

  render() {
    const { tab, isModalOpen, currentLoanId } = this.state;
    const { makePayment, requestLoan } = this.props;
    const { info, offers } = this.props.profile;
    const { loans } = info;
    const orderedLoans = loans ? loans.slice().reverse() : []
    const currentLoan = loans ? loans.find((loan) => (loan.id === currentLoanId)) : {}

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
            <div className='tab-content history'>
              {(orderedLoans.length < 1) ? (<div />)
                : (orderedLoans.map((loan) => {
                  return (
                    <LoanSummary
                      key={loan.id}
                      id={loan.id}
                      onSelectLoan={this.openModal}
                      amount={loan.amount}
                      dateTaken={moment(loan.created_at).fromNow()}
                      dueDate={moment(loan.created_at).add(28, 'days').format('DD/MM/YYYY, hh:mma')} />
                    )})
                  )
              }
            </div>
          ) : (
            (offers.length < 1) ? (<div />)
            : <div className='tab-content offers'>
              {(offers.map((offer, i) => (
                <LoanOffer key={i} onClickRequest={requestLoan} amount={offer.amount} />
                ))
              )}
              </div>
          )}
          {(isModalOpen) ? (
            <LoanModal id={currentLoanId} loan={currentLoan} onClickPay={makePayment} />
          ) : (<div />)}
        </div>
        <div className='side-bar'>
          <Avatar onSelectUser={() => {}} name={info.name} score={info.credit_score} income={info.income} expenses={info.expenses}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapActionsToProps = {
  fetchUserInfo,
  makePayment,
  requestLoan
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
