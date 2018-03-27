const React = require('react');

const Layout = require('./layout');
const If = require('./helpers/If');
const Icon = require('./components/Icon');
const Footer = require('./components/Footer');

class Index extends React.Component {
  render() {
    return (
      <Layout title="Interrobang">
        <div className="container search-form-container">
            <div className="row">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <h1 className="display-3 text-center mb-5">Interrobang</h1>

                <form className="form rounded shadow-16dp" method="GET" action={`/${this.props.gist}/search`}>
                  <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="mdi mdi-magnify" />
                      </span>
                    </div>
                    <input name="query" className="form-control" type="text" placeholder="What do you wish of me?" autoFocus />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-primary">
                        <span className="d-none d-xl-inline">Search&nbsp;</span>
                        <Icon icon="chevron-double-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-4 text-center">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <small className="text-muted">
                  Custom search <em>!bangs</em>. DuckDuckGo default <em>!bangs</em>. Pick your search engine.
                  <br/>
                  <a href={`/${this.props.gist}/config/edit`}>Edit your configuration</a>.
                </small>
              </div>
            </div>
          </div>

          <Footer fixedBottom />
      </Layout>
    );
  }
}

module.exports = Index;
