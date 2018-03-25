const React = require('react');

const If = require('./helpers/If');

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <title>{this.props.title}</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/mdi/css/materialdesignicons.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />

          <If test={this.props.gist}>
            <link rel="search" type="opensearchdescription+xml" href={`/${this.props.gist}/open-search.xml`} />
          </If>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Layout;
