import React from "react";
import { connect } from "react-redux";

import { isEmpty } from "lodash";

import {
  updateLoginUsername,
  updateLoginPassword,
  loginUser,
  viewRegistration,
  viewAccountRecovery
} from "../../actions";

import Layout from "./Layout";

const mapStateToProps = state => {
  return state.login;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUpdateUsername: event => updateLoginUsername(event.target.value),
    handleUpdatePassword: event => updateLoginPassword(event.target.value),
    handleSubmit: event => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(loginUser());
    },
    viewRegistration: event => viewRegistration(),
    viewAccountRecovery: () => viewAccountRecovery()
  };
};

class LoginPage extends React.Component {
  render() {
    const { username, password, canProceed, error } = this.props;

    const errorElement = (
      <div className="border border-danger rounded p-3 text-danger">
        {error}
      </div>
    );

    return (
      <Layout title="Login" column="col-md-6 offset-md-3" hasFooter>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Your e-mail address..."
              value={username}
              onChange={this.props.handleUpdateUsername}
              autoFocus
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter a password"
              value={password}
              onChange={this.props.handleUpdatePassword}
              required
            />
          </div>

          {!isEmpty(error) && errorElement}

          <div className="my-5" />

          <button
            type="submit"
            className="btn btn-lg btn-block btn-success"
            disabled={!canProceed}
          >
            Login
          </button>

          <div className="mt-3 d-none d-lg-block">
            <button
              type="button"
              className="btn btn-link w-50"
              onClick={this.props.viewAccountRecovery}
            >
              Forgot your password?
            </button>
            <button
              type="button"
              className="btn btn-link w-50"
              onClick={this.props.viewRegistration}
            >
              Create an account
            </button>
          </div>

          <div className="mt-3 d-lg-none">
            <button
              type="button"
              className="btn btn-block btn-outline-success"
              onClick={this.props.viewAccountRecovery}
            >
              Forgot your password?
            </button>
            <button
              type="button"
              className="btn btn-block btn-outline-success"
              onClick={this.props.viewRegistration}
            >
              Create an account
            </button>
          </div>
        </form>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
