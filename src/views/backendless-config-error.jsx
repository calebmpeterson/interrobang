const React = require("react");

const { get, has, startsWith } = require("lodash");

const router = require("../services/router");

const Layout = require("./layout");
const Footer = require("./components/Footer");
const If = require("./components/If");
const Icon = require("./components/Icon");

class Index extends React.Component {
  render() {
    const hasSearchEngine = has(this.props, "config.search-engine");
    const searchEnginePattern = get(this.props, "config.search-engine");
    const isBangQuery = startsWith(this.props.query, "!");

    console.log(hasSearchEngine, searchEnginePattern, isBangQuery);

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
                    defaultValue={this.props.query}
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

          <div className="row mt-4">
            <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <div className="card border border-danger my-3">
                <div className="card-header text-danger">
                  <h5>
                    <Icon icon="alert-octagon" /> {this.props.message}
                  </h5>
                </div>

                <If test={hasSearchEngine}>
                  {() => (
                    <div className="p-3">
                      In the meantime, you can&nbsp;
                      <a
                        href={router.defaultSearch(
                          searchEnginePattern,
                          this.props.query
                        )}
                      >
                        search directly on your default search engine &raquo;
                      </a>
                    </div>
                  )}
                </If>

                <If test={!hasSearchEngine && isBangQuery}>
                  {() => (
                    <div className="p-3">
                      In the meantime, you can&nbsp;
                      <a href={router.duckDuckGoSearch(this.props.query)}>
                        search directly on DuckDuckGo &raquo;
                      </a>
                    </div>
                  )}
                </If>

                <If test={!hasSearchEngine && !isBangQuery}>
                  {() => (
                    <div className="p-3">
                      In the meantime, you can&nbsp;
                      <a href={router.duckDuckGoSearch(this.props.query)}>
                        search directly on DuckDuckGo &raquo;
                      </a>
                    </div>
                  )}
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
