const React = require('react');

const Icon = require('./components/Icon');
const If = require('./helpers/If');
const BackBehavior = require('./helpers/BackBehavior');
const SetupProgress = require('./components/SetupProgress');
const Footer = require('./components/Footer');

const { SETUP_BROWSER_URL } = require('../env');

class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Tell Your Browser About Interrobang</title>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />

          <link rel="search" type="opensearchdescription+xml" href={`/${this.props.gist}/open-search.xml`} />
        </head>
        <body>
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
                  Next, you need to tell your browser about your Interrobang by following these instructions (<strong>opens a new window</strong>):
                </p>
                <p className="lead">
                  Once you're done, come back here and we'll wrap things up...
                </p>
                <a href={SETUP_BROWSER_URL} target="_blank" className="btn btn-lg btn-block btn-primary shadow-6dp">
                  Configure Your Browser
                </a>
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
        </body>
      </html>
    );
  }
}

module.exports = Index;
