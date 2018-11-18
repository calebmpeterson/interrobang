import React from "react";

import Layout from "./Layout";
import { viewBrowserConfiguration } from "../../actions";

class BrowserLoadingPage extends React.Component {
  componentDidMount() {
    viewBrowserConfiguration();
  }

  render() {
    return (
      <Layout>
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="progress my-3">
                <div
                  className="progress-bar gradient-primary progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BrowserLoadingPage;
