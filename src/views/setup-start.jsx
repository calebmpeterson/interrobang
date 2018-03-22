const React = require('react');

const SetupProgress = require('./components/SetupProgress');
const Footer = require('./components/Footer');

const EXAMPLE_CONFIG = require('../resources/example-config.json');
const EXAMPLE_CONFIG_JSON = JSON.stringify(EXAMPLE_CONFIG, null, '\t');

class Index extends React.Component {
  render() {
    const colClassName = `col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6`;
    const stepContainerClassName = `my-3 ${colClassName}`;
    const stepHeaderClassName = `card-header`;
    const stepBodyClassName = `card-body`;
    const exampleGistURL = `https://gist.github.com/calebmpeterson/e711f4f0a92ee500f3ebd68ea5fb130d`;

    const hasError = this.props.error;
    const inputClassName = hasError ? 'form-control is-invalid' : 'form-control';
    const inputFeedback = hasError ? (<div className="text-danger">{this.props.error}</div>) : null;

    return (
      <html>
        <head>
          <title>Setup Interrobang</title>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </head>
        <body>
          <div className="container my-5">
            <div className="row align-items-center">
              <div className={colClassName}>
                <h1 className="display-4 text-center">
                  Create Your Configuration
                </h1>
              </div>
            </div>

            <div className="row">
              <div className={stepContainerClassName}>
                <SetupProgress step={1} />
              </div>
            </div>

            <div className="row">
              <div className={stepContainerClassName}>
                <div className="card">
                  <div className={stepHeaderClassName}>
                    <h4>Create your configuration</h4>
                  </div>
                  <div className={stepBodyClassName}>
                    <p>Create a public Gist on GitHub with a <strong>single file</strong> named <code>interrobang.json</code>.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className={stepContainerClassName}>
                <div className="card">
                  <div className={stepHeaderClassName}>
                    <h4>Edit your configuration</h4>
                  </div>
                  <div className={stepBodyClassName}>
                    <p>A simple example <code>interrobang.json</code></p>
                    <pre><code>{EXAMPLE_CONFIG_JSON}</code></pre>
                  </div>

                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Property</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>bangs</code></td>
                          <td>
                            <p>These are your custom search !bangs.</p>
                            <p>Each entry <strong>key</strong> is a !bang command.</p>
                            <p>
                              Each entry <strong>value</strong> is the !bang url pattern.<br/>
                              <code>{`{{{s}}}`}</code> will be replaced with your site-specific search query.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td><code>search-engine</code></td>
                          <td>
                            This is the default search engine which your Interrobang uses when no search !bang is used.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className={colClassName}>
                <h4 className="mt-5 pb-3">Create your Interrobang</h4>

                <p>Paste your Gist's URL here:</p>
                <form className="form rounded shadow-16dp" method="GET" action={`/setup/check`}>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="mdi mdi-github-circle" />
                        </span>
                      </div>

                      <input name="gistURL"
                             className={inputClassName}
                             type="text"
                             placeholder="Public GitHub Gist URL"
                             defaultValue={this.props.gistURL || ""}
                             autoFocus={hasError} />

                      <div className="input-group-append">
                        <button type="submit" className="btn btn-success">Setup &raquo;</button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="mt-3">
                  {inputFeedback}
                </div>
              </div>
            </div>
          </div>

          <Footer />

          <script src="https://code.jquery.com/jquery-1.12.4.min.js" crossOrigin="anonymous"></script>
          <script src="/assets/bootstrap/js/bootstrap.bundle.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Index;
