import React from "react";
import { connect } from "react-redux";

import map from "lodash/map";

import { viewRegistration, saveConfiguration } from "../../actions";

import Layout from "./Layout";
import Icon from "../controls/Icon";
import If from "../controls/If";
import ConfigurationForm from "../controls/ConfigurationForm";
import SetupProgress from "../controls/SetupProgress";

const mapStateToProps = state => {
  return {
    configuration: state.configuration,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveConfiguration() {
      saveConfiguration({ setup: true });
    }
  };
};

class SetupConfigurationPage extends React.Component {
  componentDidMount() {
    if (this.props.user.missing && !this.props.user.loading) {
      viewRegistration();
    }
  }

  render() {
    const { error, messages, persisting } = this.props.configuration;

    const messageElements = map(messages, (message, index) => (
      <div
        key={index}
        className="bg-info text-white rounded p-3 mb-3 shadow-3dp"
      >
        <Icon icon="information-outline" />
        &nbsp;
        <strong>{message}</strong>
      </div>
    ));

    return (
      <Layout title="Setup Configuration">
        <div className="row">
          <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <SetupProgress step={1} />
          </div>
        </div>

        <div className="mt-5">
          {messageElements}

          <If test={error}>
            <div className="border border-danger rounded text-danger p-3 mb-3">
              <Icon icon="alert-circle" />
              &nbsp;
              {error}
            </div>
          </If>

          <ConfigurationForm {...this.props} />

          <div className="row">
            <div className="col text-right">
              <button
                type="button"
                disabled={persisting}
                className="btn btn-success"
                onClick={this.props.saveConfiguration}
              >
                <If test={!persisting}>Save &amp; Continue &raquo;</If>
                <If test={persisting}>Saving</If>
              </button>
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
)(SetupConfigurationPage);
