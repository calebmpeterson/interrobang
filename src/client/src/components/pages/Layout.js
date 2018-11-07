import React from "react";
import { connect } from "react-redux";

import get from "lodash/get";
import size from "lodash/size";

import {
  logoutUser,
  viewAccount,
  viewConfiguration,
  viewBrowserConfiguration,
  viewNotifications
} from "../../actions";
import If from "../controls/If";
import Icon from "../controls/Icon";
import { Dropdown as NavbarDropdown } from "../controls/Navbar";
import MenuItem from "../controls/MenuItem";
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
      <div>
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-white shadow-2dp">
          <div className="container">
            <a className="navbar-brand mr-3" href={`/b/${userId}`}>
              Interrobang
            </a>

            <If test={canSearch}>
              <form
                className="form-inline d-none d-md-block"
                method="GET"
                action={`/b/${userId}/search`}
              >
                <div className="input-group">
                  <input
                    className="form-control"
                    name="query"
                    type="text"
                    placeholder="Search..."
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <Icon icon="magnify" />
                    </span>
                  </div>
                </div>
              </form>
            </If>

            <div className="mr-auto" />

            <div className="mr-3">
              <button
                className="btn btn-outline-info"
                onClick={viewNotifications}
              >
                <Icon icon="bell" />
                &nbsp;
                <span className="badge badge-light">{notificationCount}</span>
              </button>
            </div>

            <If test={canLogout}>
              <NavbarDropdown
                href="#/menu"
                title={email}
                menuClassName="dropdown-menu-right"
                linkClassName="btn btn-outline-primary"
              >
                <MenuItem href="#/configuration" onClick={onConfigure}>
                  <Icon icon="settings" /> Configuration
                </MenuItem>

                <MenuItem href="#/configuration/opensearch">
                  <Icon icon="web" /> Setup Browser
                </MenuItem>

                <MenuItem href="#/settings" onClick={onManageAccount}>
                  <Icon icon="account" /> Manage Account
                </MenuItem>

                <div className="dropdown-divider" />

                <MenuItem href="#/logout" onClick={logoutUser}>
                  <Icon icon="logout-variant" /> Logout
                </MenuItem>
              </NavbarDropdown>
            </If>
          </div>
        </nav>

        <div className="container my-5">
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);
