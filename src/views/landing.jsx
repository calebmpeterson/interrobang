const React = require('react');
const Markdown = require('react-markdown');

const Layout = require('./layout');
const OmniBar = require('./components/OmniBar');
const Footer = require('./components/Footer');
const Icon = require('./components/Icon');

const personalize = require('../resources/personalize.md');
const withDefaults = require('../resources/with-defaults.md');
const withSearch = require('../resources/with-search.md');

class Index extends React.Component {
  render() {
    const Heading = (props) => (
      <h3 className={props.className || "text-primary"}>{props.children}</h3>
    );

    const Content = (props) => (
      <div className={`row ${props.className || ''}`}>
        <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-2 col-lg-8">
          {props.children}
        </div>
      </div>
    );

    const Onward = () => (
      <div className="text-center">
        <h1 className="display-1 text-muted">
          <Icon icon="chevron-down" />
        </h1>
      </div>
    );

    return (
      <Layout title="Interrobang" navbarVariant="light" canSignup canLogin>
          <div className="bg-success-to-primary-gradient text-white">
            <div className="container pt-5">
              <div className="row align-items-center mt-5">
                <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                  <img className="img-fluid logo" src="/assets/logo.svg" />
                  <h1 className="display-4 text-center">Interrobang</h1>
                  <h3 className="text-center">Skip the search engine!</h3>
                  <p className="lead text-center">
                    Customizable, site-specific searches<br />directly from your browser's search input
                  </p>

                  <a href="#more-target" className="smooth-scroll">
                    <div className="text-center more-wrapper">
                      <Icon icon="chevron-down" className="text-white more" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="chevron-top" id="more-target" />
          </div>

          <div className="container">
            <div className="container mt-5 py-5">
              <div className="row align-items-center">
                <div className="offset-md-1 col-md-10">
                  <OmniBar />
                </div>
              </div>
            </div>

            <Content className="my-5 py-5 feature">
              <h5 className="text-muted mb-5">What are <em>!bangs</em>?</h5>
              <Heading>
                Search on thousands of sites directly
              </Heading>
              <Markdown source={withDefaults} />
              <Onward />
            </Content>
          </div>

          <div className="container">
            <Content className="my-5 py-5 feature">
              <h5 className="text-muted mb-5">Make <em>!bangs</em> your own...</h5>
              <Heading>
                Personalize the power of search
              </Heading>
              <Markdown source={personalize} />
              <Onward />
            </Content>
          </div>

          <div className="container">
            <Content className="my-5 py-5 feature">
              <Heading>
                Keep using your favorite search engine
              </Heading>
              <Markdown source={withSearch} />
              <Onward />
            </Content>

            <Content className="text-center text-success d-none">
              <h1 className="display-1 rocket-launch">
                <Icon icon="rocket" />
              </h1>
            </Content>
          </div>

          <div className="bg-primary chevron-bottom" />

          <div className="bg-primary text-white">
            <div className="container py-5">
              <Content className="text-center">
                <h1 className="display-3">
                  Get Started
                </h1>
                <p className="lead">
                  Create a <strong className="font-weight-bold">FREE</strong> account<br className="d-md-none" /> and you're ready to go!
                </p>
                <div className="shadow-6dp rounded">
                  <a href="/account/#register" className="btn btn-lg btn-block btn-light">
                    Create your Interrobang <Icon icon="chevron-double-right" />
                  </a>
                </div>
              </Content>
            </div>
          </div>

          <div className="bg-primary pt-5 text-white">
            <Footer />

            <Footer>
              Chevron graphics licensed CC-BY 3.0 from <a href="https://html5up.net/directive">HTML5UP.net</a>
            </Footer>
          </div>

          <div className="d-none">
            <div className="container py-5 my-5">
              <Content className="text-center text-muted">
                <Heading className="text-muted">
                  <Icon icon="find-replace" /> Recover an existing configuration
                </Heading>

                <p className="lead">
                  Already have your Interrobang configured? <br />
                  Enter the public Gist URL here:
                </p>

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

          <script defer src="/assets/js/landing.js"></script>
      </Layout>
    );
  }
}

module.exports = Index;
