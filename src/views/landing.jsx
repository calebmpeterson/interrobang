const React = require('react');
const Markdown = require('react-markdown');

const OmniBar = require('./components/OmniBar');
const Footer = require('./components/Footer');
const Icon = require('./components/Icon');

const personalize = require('../resources/personalize.md');
const withDefaults = require('../resources/with-defaults.md');
const withSearch = require('../resources/with-search.md');

class Index extends React.Component {
  render() {
    const Heading = (props) => (
      <h3 className="text-primary">{props.children}</h3>
    );

    const Content = (props) => (
      <div className={`row ${props.className || ''}`}>
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
          <div className="bg-primary text-white">
            <div className="container pt-5">
              <div className="row align-items-center">
                <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                  <img className="img-fluid logo" src="/assets/logo.svg" />
                  <h1 className="display-3 text-center">Interrobang</h1>
                  <h3 className="text-center">Skip the search engine!</h3>
                  <p className="lead text-center text-muted">
                    Customizable, site-specific searches<br />directly from your browser's search input
                  </p>
                </div>
              </div>

              <div className="container mt-5 py-5">
                <div className="row align-items-center">
                  <div className="offset-md-1 col-md-10">
                    <OmniBar />
                  </div>
                </div>
              </div>
            </div>

            <div className="chevron-top" />
          </div>

          <div className="container">
            <Content className="my-5 py-5 feature">
              <Heading>
                Personalize the power of DuckDuckGo's search !bangs
              </Heading>
              <Markdown source={personalize} />
            </Content>

            <Content className="my-5 py-5 feature">
              <Heading>
                Keep using the DuckDuckGo search !bangs you know and love
              </Heading>
              <Markdown source={withDefaults} />
            </Content>

            <Content className="my-5 py-5 feature">
              <Heading>
                Keep using your favorite search engine
              </Heading>
              <Markdown source={withSearch} />
            </Content>

            <Content className="text-center text-success">
              <h1 className="display-1 rocket-launch">
                <Icon icon="rocket" />
              </h1>
            </Content>
          </div>

          <div className="bg-success chevron-bottom" />

          <div className="bg-success text-white">
            <div className="container" style={{marginBottom: '-5rem'}}>
              <Content className="text-center">
                <h1 className="display-3">
                  Get Started
                </h1>
                <p className="lead"><strong>No signup required.</strong> Just create a public Gist on GitHub and you're ready to go!</p>
                <a href="/setup" className="btn btn-lg btn-block btn-light shadow-6dp">
                  Create your Interrobang <Icon icon="chevron-double-right" />
                </a>
              </Content>
            </div>
          </div>

          <div className="bg-success chevron-top" />

          <div className="">
            <div className="container py-5">
              <Content className="text-center text-muted">
                <Heading>
                  <Icon icon="find-replace" /> Recover an existing configuration
                </Heading>

                <p className="lead">Already have your Interrobang configured? Just enter the public Gist URL here:</p>

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
                           defaultValue="" />

                    <div className="input-group-append">
                      <button type="submit" className="btn btn-secondary">Recover</button>
                    </div>
                  </div>
                </form>
              </Content>
            </div>
          </div>

          <Footer />

          <Footer>
            Chevron graphics licensed CC-BY 3.0 from <a href="https://html5up.net/directive">HTML5UP.net</a>
          </Footer>

          <script src="https://code.jquery.com/jquery-1.12.4.min.js" crossorigin="anonymous"></script>
          <script src="/assets/bootstrap/js/bootstrap.bundle.js"></script>
          <script src="/assets/js/landing.js"></script>
        </body>
      </html>
    )
  }
}

module.exports = Index;
