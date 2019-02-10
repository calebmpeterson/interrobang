import React from "react";

import { logoutUser } from "../../actions";

class LogoutPage extends React.Component {
  componentWillMount() {
    logoutUser();
  }

  render() {
    return null;
  }
}

export default LogoutPage;
