import React from 'react';
import { connect } from 'react-redux';

import get from 'lodash/get';

import { logoutUser } from '../../actions';
import If from '../controls/If';
import Icon from '../controls/Icon';

const mapStateToProps = (state) => {
  const userId = get(state, 'user.objectId', '');
  const email = get(state, 'user.email', '');
  return {
    userId,
    email
  };
};

class Layout extends React.Component {
  render() {
    const { canLogout, canSearch, column, userId, email } = this.props;
    const colClassName = column || 'col';
    return (
      <div>
        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-white shadow-2dp">
          <div className="container">
            <a className="navbar-brand mr-3" href="/">Interrobang</a>

            <If test={canSearch}>
              <form className="form-inline d-none d-md-block" method="GET" action={`/b/${userId}/search`}>
                <div className="input-group">
                  <input className="form-control" name="query" type="text" placeholder="Search..." />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <Icon icon="magnify" />
                    </span>
                  </div>
                </div>
              </form>
            </If>

            <div className="mr-auto" />

            <If test={email}>
              <span className="navbar-text d-none d-md-block">
                {email}
              </span>
            </If>
            <If test={canLogout}>
              <button className="btn btn-outline-secondary ml-3" onClick={logoutUser}>
                Logout <Icon icon="logout-variant" />
              </button>
            </If>
          </div>
        </nav>

        <div className="container my-5 pt-5">
          <div className="row my-5">
            <div className={colClassName}>
              <h1 className="text-center">{this.props.title}</h1>
            </div>
          </div>

          <div className="row">
            <div className={colClassName}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Layout);