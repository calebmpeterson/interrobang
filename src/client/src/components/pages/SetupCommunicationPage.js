import React from 'react';
import { connect } from 'react-redux';

import { createLandingURL } from '../../api/backendless';

import { viewBrowserSetup, submitSubscriptionUpdate } from '../../actions';

import Layout from './Layout';
import SetupProgress from '../controls/SetupProgress';

const mapStateToProps = (state) => {
  return {
    landingURL: createLandingURL(state.user)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribe: () => submitSubscriptionUpdate(true, true)
  };
};

class SetupCommunicationPage  extends React.Component {
  render() {
    return (
      <Layout title="Stay in Touch">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <SetupProgress step={3} />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <p className="lead">
                  One last thing... and <em className="font-weight-bold">it's totally optional</em>. Would you like to receive occasional email updates on Interrobang development?
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <div className="float-left text-left">
                  <button type="button" className="btn btn-link" onClick={viewBrowserSetup}>
                    &laquo; Back
                  </button>
                </div>
                <div className="float-right text-right">
                  <a href={this.props.landingURL} className="btn btn-outline-secondary mr-2">
                    No, thank you
                  </a>
                  <button type="button" className="btn btn-success" onClick={this.props.subscribe}>
                    Yes, please &raquo;
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupCommunicationPage);
