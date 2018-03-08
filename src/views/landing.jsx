const React = require('react');
const Markdown = require('react-markdown');

const Footer = require('./components/Footer');
const Icon = require('./components/Icon');

const personalize = require('../resources/personalize.md');
const withDefaults = require('../resources/with-defaults.md');
const withSearch = require('../resources/with-search.md');

class Index extends React.Component {
  render() {
    const Heading = (props) => <h4>{props.children}</h4>;
    const Content = (props) => (
      <div className={`row my-5 ${props.className}`}>
        <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-2 col-lg-8">
          {props.children}
        </div>
      </div>
    );

    return (
      <html>
        <head>
          <title>Interrobang</title>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </head>
        <body>
          <div className="container search-form-container">
            <div className="row align-items-center">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <h1 className="display-3 text-center">Interrobang</h1>
                <h3 className="text-muted text-center">Skip the search engine!</h3>
                <p className="lead text-center">
                  Customizable, site-specific searches<br />directly from your browser's search input
                </p>
              </div>
            </div>

            <Content>
              <Heading>
                <Icon icon="tune" /> Personalize the power of DuckDuckGo's search !bangs
              </Heading>
              <Markdown source={personalize} />
            </Content>

            <Content>
              <Heading>
                <Icon icon="alert-circle-outline" /> Keep using the DuckDuckGo search !bangs you know and love
              </Heading>
              <Markdown source={withDefaults} />
            </Content>

            <Content>
              <Heading>
                <Icon icon="magnify" /> Keep using your favorite search engine
              </Heading>
              <Markdown source={withSearch} />
            </Content>

            <Content className="text-center">
              <h2>
                <Icon icon="rocket" /> Get started
              </h2>
              <p><strong>No signup required.</strong> Just create a public Gist on GitHub and you're ready to go!</p>
              <a href="/setup" className="btn btn-lg btn-block btn-success">Create your Interrobang</a>
            </Content>

            <Content>
              <Heading>
                <Icon icon="find-replace" /> Recover an existing configuration
              </Heading>
              <p>Already have your Interrobang configured? Just enter the public Gist URL here:</p>
              <form className="form" method="GET" action={`/setup`}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <Icon icon="github-circle" />
                    </span>
                  </div>

                  <input name="gistURL"
                         className="form-control"
                         type="text"
                         placeholder="Public GitHub Gist URL"
                         defaultValue=""
                         autoFocus />

                  <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">Recover</button>
                  </div>
                </div>
              </form>
            </Content>
          </div>

          <Footer />
        </body>
      </html>
    )
  }
}

module.exports = Index;
