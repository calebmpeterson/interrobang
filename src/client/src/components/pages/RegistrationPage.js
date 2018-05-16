import React from 'react';
import { connect } from 'react-redux';

import { isEmpty } from 'lodash';

import { updateRegistrationUsername, updateRegistrationPassword, updateRegistrationPasswordCheck, registerUser } from '../../actions';

import Layout from './Layout';
import Icon from '../controls/Icon';
import If from '../controls/If';

const mapStateToProps = (state) => {
  return state.registration;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUpdateUsername: (event) => updateRegistrationUsername(event.target.value),
    handleUpdatePassword: (event) => updateRegistrationPassword(event.target.value),
    handleUpdatePasswordCheck: (event) => updateRegistrationPasswordCheck(event.target.value),
    handleSubmit: (event) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(registerUser());
    }
  };
};

class RegistrationPage extends React.Component {
  render() {
    const { username, password, passwordCheck, passwordMatch, canProceed, error } = this.props;

    const passwordMismatchError = (
      <div className="text-danger">
        <If test={!passwordMatch}>
          The passwords entered do not match
        </If>
        <If test={passwordMatch}>
          &nbsp;
        </If>
      </div>
    );

    const errorElement = (
      <div className="border border-danger rounded p-3 text-danger">
        {error}
      </div>
    );

    return (
      <Layout title="Register" column="col-md-6 offset-md-3">
        <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">E-mail address</label>
          <input type="email" className="form-control form-control-lg" placeholder="Your e-mail address..." value={username} onInput={this.props.handleUpdateUsername} autoFocus required />
          <small className="form-text text-muted">Your e-mail address will never be shared with anyone else</small>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control form-control-lg" placeholder="Enter a password" value={password} onInput={this.props.handleUpdatePassword} required />
        </div>

        <div className="form-group">
          <label htmlFor="passwordCheck">Verify password</label>
          <div className="input-group">
            <input type="password" className="form-control form-control-lg" placeholder="Verify your password" value={passwordCheck} onInput={this.props.handleUpdatePasswordCheck} required />
            <span className="input-group-append">
              <span className="input-group-text">
                {passwordMatch && (<Icon icon="check" className="text-success" />)}
                {!passwordMatch && (<Icon icon="exclamation" className="text-danger" />)}
              </span>
            </span>
          </div>
        </div>

        {passwordMismatchError}
        {!isEmpty(error) && errorElement}

        <div className="my-5" />

        <button type="submit" className="btn btn-lg btn-block btn-success" disabled={!canProceed}>
          Sign Up
        </button>
        </form>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
