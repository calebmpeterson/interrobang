const React = require("react");
const Markdown = require("react-markdown");

const Layout = require("./layout");
const OmniBar = require("./components/OmniBar");
const { Footer, MiniFooter } = require("@interrobang/ui");
const Icon = require("./components/Icon");
const DeveloperBio = require("./components/DeveloperBio");

const personalize = require("../resources/personalize.md");
const withDefaults = require("../resources/with-defaults.md");
const withSearch = require("../resources/with-search.md");

const backgroundCss = (backgroundUrl, position) => ({
  background: `url(${backgroundUrl})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: `${position} bottom`
});

const WithBackground = ({ backgroundUrl, backgroundPosition, children }) => (
  <div className="container">
    <div style={backgroundCss(backgroundUrl, backgroundPosition)}>
      {children}
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    const Heading = props => (
      <h3 className={props.className || "text-primary"}>{props.children}</h3>
    );

    const Content = props => (
      <div className={`row ${props.className || ""}`}>
        <div
          className={
            props.col || "col-sm-12 offset-md-2 col-md-8 offset-lg-2 col-lg-8"
          }
        >
          <div className="feature-content">{props.children}</div>
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
        <div className="gradient-1-135 text-white">
          <div className="container pt-5">
            <div className="row align-items-center mt-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <img className="img-fluid logo" src="/assets/logo.svg" />
                <h1 className="display-4 text-center">Interrobang</h1>
                <h3 className="text-center">Skip the search engine!</h3>
                <p className="lead text-center">
                  Customizable, site-specific searches
                  <br />
                  directly from your browser's search input
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

        <div className="container mt-5 py-5">
          <div className="row align-items-center">
            <div className="offset-md-1 col-md-10">
              <OmniBar />
            </div>
          </div>
        </div>

        <WithBackground
          backgroundUrl="/assets/img/undraw_bookmarks.svg"
          backgroundPosition="right"
        >
          <div className="container">
            <Content className="my-5 py-5 feature feature-left" col="col-md-8">
              <h5 className="text-muted mb-5">
                What are <em>!bangs</em>?
              </h5>
              <Heading>Search on thousands of sites directly</Heading>
              <Markdown source={withDefaults} />
            </Content>
          </div>
        </WithBackground>

        <WithBackground
          backgroundUrl="/assets/img/undraw_operating_system.svg"
          backgroundPosition="left"
        >
          <div className="container">
            <Content
              className="my-5 py-5 feature feature-right"
              col="col-md-8 offset-md-4"
            >
              <h5 className="text-muted mb-5">
                Make <em>!bangs</em> your own...
              </h5>
              <Heading>Personalize the power of search</Heading>
              <Markdown source={personalize} />
            </Content>
          </div>
        </WithBackground>

        <WithBackground
          backgroundUrl="/assets/img/undraw_search_engines.svg"
          backgroundPosition="right"
        >
          <div className="container">
            <Content className="mt-5 pt-5 feature feature-left" col="col-md-8">
              <Heading>Keep using your favorite search engine</Heading>
              <Markdown source={withSearch} />
            </Content>
          </div>
        </WithBackground>

        <div className="gradient-2-45 text-white">
          <div className="chevron-bottom" />

          <div className="container py-5">
            <Content className="text-center mb-5">
              <h1 className="display-3">Get Started</h1>
              <p className="lead">Create an account and you're ready to go!</p>
              <div className="shadow-6dp rounded">
                <a
                  href="/account/#register"
                  className="btn btn-lg btn-block btn-success"
                >
                  Create your Interrobang <Icon icon="chevron-double-right" />
                </a>
              </div>
            </Content>

            <div className="pt-5">
              <DeveloperBio />

              <Footer anchorClassName="text-white" />

              <MiniFooter>
                Chevron graphics licensed CC-BY 3.0 from{" "}
                <a className="text-white" href="https://html5up.net/directive">
                  HTML5UP.net
                </a>
              </MiniFooter>
            </div>
          </div>
        </div>

        <script defer src="/assets/js/landing.js" />
      </Layout>
    );
  }
}

module.exports = Index;
