const React = require('react');

const Icon = require('./components/Icon');
const If = require('./helpers/If');
const BackBehavior = require('./helpers/BackBehavior');
const NewsletterForm = require('./components/NewsletterForm');
const SetupProgress = require('./components/SetupProgress');
const Footer = require('./components/Footer');

const { SETUP_BROWSER_URL } = require('../env');

class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Keep Updated on Interrobang Development</title>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </head>
        <body>
          <div className="container search-form-container">
            <div className="row">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <h1 className="display-4 text-center">Keep In Touch</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <SetupProgress step={3} />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <p className="lead">
                  One last thing... <em>and it's totally optional</em>. Would you like to receive occasional email updates on Interrobang development?
                </p>
                <NewsletterForm />
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
                  <a href={`/setup/complete/${this.props.gist}`} className="btn btn-link">Finish &raquo;</a>
                </div>
              </div>
            </div>
          </div>

          <Footer fixedBottom />

          <script src="https://code.jquery.com/jquery-1.12.4.min.js" crossorigin="anonymous"></script>
          <script src="/assets/bootstrap/js/bootstrap.bundle.js"></script>
          <script src="/assets/js/setup-browser.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Index;