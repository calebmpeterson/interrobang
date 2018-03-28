const React = require('react');

const Layout = require('./layout');
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
      <Layout title="Keep Updated on Interrobang Development">
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
                  One last thing... and <em className="font-weight-bold">it's totally optional</em>. Would you like to receive occasional email updates on Interrobang development?
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
          <script src="/assets/js/setup-browser.js"></script>

      </Layout>
    );
  }
}

module.exports = Index;
