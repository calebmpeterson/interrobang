import React from "react";
import { connect } from "react-redux";

import { createSearchURL } from "../../api/backendless";

import Layout from "./Layout";
import If from "../controls/If";
import Icon from "../controls/Icon";
import ConfirmingButton from "../controls/ConfirmingButton";

import {
  updateNewPassword,
  updateNewPasswordCheck,
  deleteAllData,
  viewLogin,
  viewConfiguration
} from "../../actions";
import BackendlessApi from "../../api/backendless";
import { selectDeleted } from "../../selectors/configuration";

const mapStateToProps = state => {
  return {
    searchURL: createSearchURL(state.user),
    user: state.user,
    configFileUrl: BackendlessApi.getConfigFileUrl(state.user),
    password: state.password.newPassword,
    passwordCheck: state.password.newPasswordCheck,
    passwordMatch: state.password.newPasswordMatch,
    canChangePassword: state.password.canChangePassword,
    deleted: selectDeleted(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleUpdateNewPassword: event => updateNewPassword(event.target.value),
    handleUpdateNewPasswordCheck: event =>
      updateNewPasswordCheck(event.target.value),
    handleChangePassword: event => {
      event.preventDefault();
      event.stopPropagation();
      console.log("Change password");
    }
  };
};

class AccountPage extends React.Component {
  componentDidMount() {
    if (this.props.user.missing && !this.props.user.loading) {
      viewLogin();
    }
  }

  render() {
    const {
      password,
      passwordCheck,
      passwordMatch,
      canChangePassword
    } = this.props;

    const passwordMismatchError = (
      <div className="text-danger">
        <If test={!passwordMatch}>The passwords entered do not match</If>
        <If test={passwordMatch}>&nbsp;</If>
      </div>
    );

    return (
      <Layout canLogout>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h3>Manage Your Account</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="list-group">
                <div className="list-group-item">
                  <strong>{this.props.user.email}</strong>
                  <br />
                  <span className="badge badge-success">Free Plan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="list-group">
                <div className="list-group-item">
                  <h5>Change Your Password</h5>

                  <form onSubmit={this.props.handleChangePassword}>
                    <div className="form-group">
                      <label htmlFor="password">New Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter a new password"
                        value={password}
                        onInput={this.props.handleUpdateNewPassword}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="passwordCheck">Verify new password</label>
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Verify your new password"
                          value={passwordCheck}
                          onInput={this.props.handleUpdateNewPasswordCheck}
                          required
                        />
                        <span className="input-group-append">
                          <span className="input-group-text">
                            {passwordMatch && (
                              <Icon icon="check" className="text-success" />
                            )}
                            {!passwordMatch && (
                              <Icon
                                icon="exclamation"
                                className="text-danger"
                              />
                            )}
                          </span>
                        </span>
                      </div>
                    </div>

                    {passwordMismatchError}

                    <div className="my-3" />

                    <button
                      type="submit"
                      className="btn btn-outline-success"
                      disabled={!canChangePassword}
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h3>Manage Your Data</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="list-group">
                <div className="list-group-item">
                  <div>
                    <h5>Export Your Data</h5>
                    <p>
                      Your data is your property. You can export it at any time.
                    </p>
                  </div>

                  <a
                    target="_blank"
                    href={this.props.configFileUrl}
                    className="btn btn-outline-primary"
                  >
                    Export
                  </a>
                </div>

                <div className="list-group-item">
                  <div>
                    <h5>Delete Your Data</h5>
                    <p>
                      Your data is your property. You can delete it at any time.
                    </p>
                  </div>

                  <If test={this.props.deleted}>
                    <button className="btn btn-outline-danger" disabled>
                      Deleted
                    </button>
                  </If>

                  <If test={!this.props.deleted}>
                    <ConfirmingButton
                      className="btn btn-outline-danger"
                      confirmation="Are you sure?"
                      confirmationClassName="btn btn-danger"
                      onClick={deleteAllData}
                    >
                      Delete
                    </ConfirmingButton>
                  </If>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 mb-5">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="float-right text-right">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={viewConfiguration}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);
