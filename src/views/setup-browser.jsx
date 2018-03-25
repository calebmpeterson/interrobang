const React = require('react');

const Layout = require('./layout');
const Icon = require('./components/Icon');
const If = require('./helpers/If');
const BackBehavior = require('./helpers/BackBehavior');
const SetupProgress = require('./components/SetupProgress');
const Modal = require('./components/Modal');
const Footer = require('./components/Footer');

const { SETUP_BROWSER_URL, SETUP_CHROME_URL, SETUP_SAFARI_URL, SETUP_EDGE_URL, SETUP_FIREFOX_URL } = require('../env');

class Index extends React.Component {
  render() {
    const BrowserButton = (props) => (
      <div>
        <a href={props.href} target="_blank" className="d-inline-block" data-toggle="tooltip" title={props.title}>
          <Icon className="browser-icon" icon={props.icon} />
        </a>
      </div>
    );

    return (
      <Layout title="Tell Your Browser About Interrobang">
          <div className="container search-form-container">
            <div className="row">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <h1 className="display-4 text-center">Tell Your Browser</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <SetupProgress step={2} />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <p className="lead text-success">
                  <Icon icon="checkbox-marked-circle-outline" /> Your configuration looks great!
                </p>
                <p className="lead">
                  Next, you need to tell your browser about your Interrobang by following the instructions for your browser.
                </p>
                <div className="row text-center my-5">
                  <div className="col-3">
                    <BrowserButton icon="google-chrome" title="Google Chrome" href={SETUP_CHROME_URL} />
                  </div>
                  <div className="col-3">
                    <BrowserButton icon="edge" title="Microsoft Edge" href={SETUP_EDGE_URL} />
                  </div>
                  <div className="col-3">
                    <BrowserButton icon="apple-safari" title="Apple Safari" href={SETUP_SAFARI_URL} />
                  </div>
                  <div className="col-3">
                    <BrowserButton icon="firefox" title="Mozilla Firefox" href={SETUP_FIREFOX_URL} />
                  </div>
                </div>
                <p className="lead font-weight-bold">
                  When you're done, come back here and wrap things up...
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <div className="float-left text-left">
                  <BackBehavior>
                    <a href="#" className="btn btn-link with-back-behavior">&laquo; Back</a>
                  </BackBehavior>
                </div>
                <div className="float-right text-right">
                  <a href={`/setup/communications/${this.props.gist}`} className="btn btn-link">Continue &raquo;</a>
                </div>
              </div>
            </div>
          </div>

          <Footer fixedBottom />

          <script src="https://code.jquery.com/jquery-1.12.4.min.js" crossOrigin="anonymous"></script>
          <script src="/assets/bootstrap/js/bootstrap.bundle.js"></script>
          <script src="/assets/js/setup-browser.js"></script>
      </Layout>
    );
  }
}

module.exports = Index;
