const React = require('react');

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

    return (
      <html>
        <head>
          <title>Setup Interrobang</title>
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
        </head>
        <body>
          <div className="container">
            <div className="row align-items-center">
              <div className={colClassName}>
                <h1 className="display-4 text-center">
                  Setup Interrobang<span className="">&#8253;</span>
                </h1>
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
                <h4 className="p-3">Create your Interrobang</h4>

                <form className="form" method="GET" action={`/setup/complete`}>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="mdi mdi-github-circle" />
                        </span>
                      </div>

                      <input name="gist"
                             className="form-control"
                             type="text"
                             placeholder="Public GitHub Gist URL"
                             defaultValue="" autoFocus />

                      <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary">Setup</button>
                      </div>
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
