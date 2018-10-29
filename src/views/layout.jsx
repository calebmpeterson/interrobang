const React = require("react");

const If = require("./helpers/If");
const Navbar = require("./components/Navbar");

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
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="/assets/favicon/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="/assets/favicon/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="/assets/favicon/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/assets/favicon/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="/assets/favicon/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="/assets/favicon/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="/assets/favicon/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/assets/favicon/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon/favicon-128.png"
            sizes="128x128"
          />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="/assets/favicon/mstile-144x144.png"
          />
          <meta
            name="msapplication-square70x70logo"
            content="/assets/favicon/mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/assets/favicon/mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/assets/favicon/mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/assets/favicon/mstile-310x310.png"
          />

          <link rel="stylesheet" href="/style/css/bootstrap.min.css" />
          <link
            rel="stylesheet"
            href="/style/css/materialdesignicons.min.css"
          />

          <link rel="stylesheet" href="/assets/css/style.css" />

          {this.props.headTags}

          <If test={this.props.searchUrl}>
            <link
              rel="search"
              title="Interrobang"
              type="application/opensearchdescription+xml"
              href={`/${this.props.searchUrl}/opensearch.xml`}
            />
          </If>
        </head>
        <body>
          <script
            src="https://code.jquery.com/jquery-1.12.4.min.js"
            crossOrigin="anonymous"
          />
          <script src="/style/js/bootstrap.bundle.js" />
          <script src="/assets/scrollpos-styler/scrollPosStyler.js" />

          <Navbar variant={this.props.navbarVariant} {...this.props} />

          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
