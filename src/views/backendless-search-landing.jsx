const React = require("react");
const { map } = require("lodash");

const { MiniFooter } = require("@interrobang/ui");

const { Selectors } = require("../suggestions");
const Layout = require("./layout");
const Icon = require("./components/Icon");

class Index extends React.Component {
  render() {
    const queryAutocompleteId = "query-autocomplete";

    const autocompleteOptions = map(
      Selectors.allBangs(this.props.bangs),
      bang => <option key={bang}>!{bang}</option>
    );

    const openSearchIframeURL = `/?search=opensearch&userId=${
      this.props.userId
    }`;

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
                    className="form-control is-valid shadow-2dp"
                    type="text"
                    placeholder="What do you wish of me?"
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    list={queryAutocompleteId}
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
              </small>
            </div>
          </div>
        </div>

        <datalist id={queryAutocompleteId}>{autocompleteOptions}</datalist>

        <MiniFooter />
      </Layout>
    );
  }
}

module.exports = Index;
