const React = require("react");

const Layout = require("./layout");
const If = require("./helpers/If");
const Icon = require("./components/Icon");
const Footer = require("./components/Footer");

class Index extends React.Component {
  render() {
    const { searchUrl } = this.props;

    return (
      <Layout title="Interrobang" searchUrl={`b/${this.props.userId}`}>
        <Footer fixedBottom />
      </Layout>
    );
  }
}

module.exports = Index;
