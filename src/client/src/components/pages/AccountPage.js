import React from "react";
import { connect } from "react-redux";

import { createSearchURL } from "../../api/backendless";

import Layout from "./Layout";

import { deleteAllData, viewLogin, viewConfiguration } from "../../actions";
import BackendlessApi from "../../api/backendless";

const mapStateToProps = state => {
  return {
    searchURL: createSearchURL(state.user),
    user: state.user,
    configFileUrl: BackendlessApi.getConfigFileUrl(state.user)
  };
};

class AccountPage extends React.Component {
  componentDidMount() {
    if (this.props.user.missing && !this.props.user.loading) {
      viewLogin();
    }
  }

  render() {
    return (
      <Layout canLogout>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <p className="lead">Manage Your Account</p>
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
                  <h6>Change Your Password</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <p className="lead">Manage Your Data</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="list-group">
                <div className="list-group-item">
                  <div>
                    <h6>Export Your Data</h6>
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
                    <h6>Delete Your Data</h6>
                    <p>
                      Your data is your property. You can delete it at any time.
                    </p>
                  </div>

                  <button
                    className="btn btn-outline-danger"
                    onClick={deleteAllData}
                  >
                    Delete
                  </button>
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

export default connect(mapStateToProps)(AccountPage);
