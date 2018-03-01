const React = require('react');

const Footer = require('./components/Footer');

class Index extends React.Component {
  render() {
    const colClassName = `col-sm-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6`;
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
          <div className="container search-form-container">
            <div className="row align-items-center">
              <div className={colClassName}>
                <h1 className="display-4 text-center">
                  Setup Interrobang<span className="">&#8253;</span>
                </h1>
              </div>
            </div>

            <div className="row">
              <div className={colClassName}>
                <h4>Step 1 <small>Create your configuration</small></h4>
                <p>Create a public Gist on GitHub with a single file named <code>interrobang.json</code>.</p>
                <pre><code>Example interrobang.json contents go here...</code></pre>
              </div>
            </div>

            <div className="row align-items-center">
              <div className={colClassName}>
                <h4>Step 3 <small>Create your Interrobang</small></h4>
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
                    <small className="form-text text-muted">
                      Example: <a href={exampleGistURL}>{exampleGistURL}</a>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Footer fixedBottom />
        </body>
      </html>
    )
  }
}

module.exports = Index;
