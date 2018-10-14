const React = require("react");

const Layout = require("./layout");
const Footer = require("./components/Footer");
const If = require("./components/If");
const Icon = require("./components/Icon");

class Index extends React.Component {
  render() {
    return (
      <Layout
        title="Interrobang"
        canConfigure
        canSetup
        searchUrl={`b/${this.props.userId}`}
      >
        <div className="container search-form-container">
          <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h1 className="display-4 text-center my-5">Interrobang</h1>

              <form
                className="form rounded shadow-16dp"
                method="GET"
                action={`/b/${this.props.userId}/search`}
              >
                <div className="input-group input-group-lg">
                  <input
                    name="query"
                    className="form-control is-valid"
                    type="text"
                    placeholder="What do you wish of me?"
                    value={this.props.query}
                    autoFocus
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-success"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Search"
                    >
                      <Icon icon="magnify" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-4 text-center">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <small className="text-muted">
                Custom search <em>!bangs</em>. DuckDuckGo default{" "}
                <em>!bangs</em>. Pick your search engine.
                <br />
                <a href={`/account/#/configuration`}>Edit your configuration</a>
                .
              </small>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="card border border-danger mt-3">
                <div className="card-header">
                  <h5 className="text-danger float-left">
                    {this.props.message}
                  </h5>
                </div>
                <If test={this.props.config}>
                  <div className="card-body">
                    <pre>
                      <code>{this.props.config}</code>
                    </pre>
                  </div>
                </If>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Layout>
    );
  }
}

module.exports = Index;
