const React = require('react');

const If = require('./helpers/If');
const Navbar = require('./components/Navbar');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico" />
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />

          <If test={this.props.gist}>s
            <link rel="search" type="opensearchdescription+xml" href={`/${this.props.gist}/open-search.xml`} />
          </If>
        </head>
        <body>
          <script src="https://code.jquery.com/jquery-1.12.4.min.js" crossOrigin="anonymous"></script>
          <script src="/assets/bootstrap/js/bootstrap.bundle.js"></script>
          <script src="/assets/scrollpos-styler/scrollPosStyler.js"></script>

          <Navbar variant={this.props.navbarVariant} {...this.props} />

          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
