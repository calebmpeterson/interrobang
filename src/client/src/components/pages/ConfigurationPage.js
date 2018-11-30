import React from "react";
import { connect } from "react-redux";

import map from "lodash/map";

import { viewLogin, saveConfiguration } from "../../actions";

import Layout from "./Layout";
import Icon from "../controls/Icon";
import If from "../controls/If";
import ConfigurationForm from "../controls/ConfigurationForm";

const mapStateToProps = state => {
  return {
    configuration: state.configuration,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class ConfigurationPage extends React.Component {
  componentDidMount() {
    if (this.props.user.missing && !this.props.user.loading) {
      viewLogin();
    }
  }

  render() {
    const { error, messages, persisting, persisted } = this.props.configuration;

    const messageElements = map(messages, (message, index) => (
      <div key={index} className="border border-info rounded text-info p-3">
        <Icon icon="information-outline" />
        &nbsp;
        {message}
      </div>
    ));

    return (
      <Layout title="Configuration" canLogout canSearch hasFooter>
        <div>
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
              <a
                href={`/b/${this.props.user.objectId}`}
                className="btn btn-outline-primary mr-3"
              >
                Done
              </a>
              <button
                type="button"
                disabled={persisting || persisted}
                className="btn btn-success"
                onClick={saveConfiguration}
              >
                <If test={!persisting && !persisted}>Save</If>
                <If test={persisting}>Saving</If>
                <If test={persisted}>
                  Saved <Icon icon="check" />
                </If>
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
)(ConfigurationPage);
