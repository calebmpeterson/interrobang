import React, { Fragment } from "react";
import { connect } from "react-redux";

import get from "lodash/get";
import size from "lodash/size";

import { Footer, NavBar } from "@interrobang/ui";

import {
  logoutUser,
  viewAccount,
  viewConfiguration,
  viewNotifications
} from "../../actions";
import If from "../controls/If";
import { selectNotificationItems } from "../../selectors/notifications";

const mapStateToProps = state => {
  const userId = get(state, "user.objectId", "");
  const email = get(state, "user.email", "");
  const notificationItems = selectNotificationItems(state);
  return {
    userId,
    email,
    notificationCount: size(notificationItems)
  };
};

const onConfigure = () => {
  viewConfiguration();
};

const onManageAccount = () => {
  viewAccount();
};

class Layout extends React.Component {
  render() {
    const {
      canLogout,
      canSearch,
      column,
      userId,
      email,
      notificationCount
    } = this.props;

    const colClassName = column || "col";

    return (
      <Fragment>
        <NavBar
          userId={userId}
          username={email}
          notificationCount={notificationCount}
          onViewNotifications={viewNotifications}
          onViewConfiguration={onConfigure}
          onManageAccount={onManageAccount}
          onLogout={logoutUser}
          canLogout={canLogout}
          canSearch={canSearch}
        />

        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
          <div className="container my-5 flex-grow-1">
            <If test={this.props.title}>
              <div className="row my-5 pt-5">
                <div className={colClassName}>
                  <h1 className="text-center">{this.props.title}</h1>
                </div>
              </div>
            </If>

            <div className="row">
              <div className={colClassName}>{this.props.children}</div>
            </div>
          </div>

          <Footer
            className="py-5 gradient-1-135 text-white"
            anchorClassName="text-white"
          />
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Layout);
