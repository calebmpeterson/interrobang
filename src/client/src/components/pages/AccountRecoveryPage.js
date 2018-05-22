import React from 'react';
import { connect } from 'react-redux';

import { isEmpty } from 'lodash';

import { updateRecoveryUsername, recoverAccount, viewLogin } from '../../actions';

import Layout from './Layout';

const mapStateToProps = (state) => {
  return state.recovery;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUpdateUsername: (event) => updateRecoveryUsername(event.target.value),
    handleSubmit: (event) => {
      event.preventDefault();
      event.stopPropagation();
      recoverAccount();
    },
    viewLogin: (event) => viewLogin()
  };
};

class AccountRecoveryPage extends React.Component {
  render() {
    const { username, canProceed, error } = this.props;

    const errorElement = (
      <div className="border border-danger rounded p-3 text-danger">
        {error}
      </div>
    );

    return (
      <Layout title="Recover Account" column="col-md-6 offset-md-3">
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail address</label>
            <input type="email" className="form-control form-control-lg" placeholder="Your e-mail address..." value={username} onChange={this.props.handleUpdateUsername} autoFocus required />
          </div>

          {!isEmpty(error) && errorElement}

          <div className="my-5" />

          <button type="submit" className="btn btn-lg btn-block btn-success" disabled={!canProceed}>
            Recover Account
          </button>

          <div className="mt-3 d-none d-md-block">
            <button type="button" className="btn btn-block btn-link" onClick={this.props.viewLogin}>
              Login
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountRecoveryPage);
