const React = require("react");

const Layout = require("./layout");
const Icon = require("./components/Icon");
const Footer = require("./components/Footer");

class Index extends React.Component {
  render() {
    const { redirect = "setup/browser" } = this.props;
    const redirectDelay = 2;
    const redirectUrl = `/account/#/${redirect}`;

    const headTags = (
      <meta
        http-equiv="Refresh"
        content={`${redirectDelay}; url=${redirectUrl}`}
      />
    );

    return (
      <Layout
        title="Interrobang"
        searchUrl={`b/${this.props.userId}`}
        headTags={headTags}
      >
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h1 className="text-center mt-5">Open Search</h1>

              <div className="progress my-3">
                <div
                  className="progress-bar gradient-secondary progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                />
              </div>

              <p className="text-center">
                Adding an{" "}
                <a href="http://www.opensearch.org/" target="_blank">
                  OpenSearch
                </a>{" "}
                definition to your browser's search engines.
              </p>
            </div>
          </div>
        </div>

        <Footer fixedBottom />
      </Layout>
    );
  }
}

module.exports = Index;
