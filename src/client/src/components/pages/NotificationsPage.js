import React from "react";
import Markdown from "react-markdown";
import { connect } from "react-redux";

import map from "lodash/map";

import { viewLogin, viewConfiguration } from "../../actions";
import { selectNotificationItems } from "../../selectors/notifications";
import Layout from "./Layout";
import Icon from "../controls/Icon";

const mapStateToProps = state => {
  return {
    items: selectNotificationItems(state),
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
    const { items } = this.props;

    const messageElements = map(items, (item, index) => (
      <div key={index} className="border rounded p-3">
        <h5>
          <Icon icon="bell-outline" />
          &nbsp;
          {item.title}
        </h5>
        <Markdown source={item.message} />
      </div>
    ));

    return (
      <Layout title="Notifications" canLogout hasFooter>
        <div className="row mt-3 mb-5">
          <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            {messageElements}
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
      </Layout>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationPage);
