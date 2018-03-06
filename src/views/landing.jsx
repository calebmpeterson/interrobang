const React = require('react');

const Footer = require('./components/Footer');
const Icon = require('./components/Icon');

class Index extends React.Component {
  render() {
    const Heading = (props) => <h3>{props.children}</h3>;

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

            <div className="row my-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <Heading><Icon icon="rocket" /> Get started</Heading>
                <p><strong>No signup required.</strong> Just create a public Gist on GitHub and you're ready to go!</p>
                <a href="/setup" className="btn btn-lg btn-block btn-success">Create your Interrobang</a>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <h3>
                  <Icon icon="find-replace" /> Recover an existing configuration
                </h3>
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
              </div>
            </div>
          </div>

          <Footer />
        </body>
      </html>
    )
  }
}

module.exports = Index;
