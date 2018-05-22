import React from 'react';
import { connect } from 'react-redux';

import { viewLogin } from '../../actions';

import Layout from './Layout';

const mapStateToProps = (state) => {
  return state.recovery;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    viewLogin: (event) => viewLogin()
  };
};

class AccountRecoveryPage extends React.Component {
  render() {
    return (
      <Layout title="Email Sent" column="col-md-6 offset-md-3">
        <p>
          An email has been sent to <strong>{this.props.username}</strong>.
        </p>
        <p>
          Please follow the included instructions to recover your account.
        </p>

        <div className="mt-3 d-none d-md-block">
          <button type="button" className="btn btn-block btn-success" onClick={this.props.viewLogin}>
            Return to Login
          </button>
        </div>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountRecoveryPage);
