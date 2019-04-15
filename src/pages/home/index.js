import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from '../../components/avatar';
import { fetchUsers } from '../../actions/userActions';

class Home extends Component {
  handleSelectUser(id) {
    const { history } = this.props;
    localStorage.setItem('user_id', id);
    history.push('/my-profile');
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className='page' id='homepage'>
        <h1 className='select-prompt'>Proceed as</h1>
        <div className='avatar-list'>
          {
            (users.length < 1) ? (<div />)
            : (
              users.map((user) => (
                <Avatar
                key={user.id}
                onSelectUser={this.handleSelectUser.bind(this)}
                id={user.id}
                name={user.name}
                score={user.credit_score}
                income={user.income}
                expenses={user.expenses}/>
              ))
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapActionsToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
