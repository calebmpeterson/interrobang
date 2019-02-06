const React = require("react");

const Layout = require("./layout");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Interrobang">
        <div className="mt-5 pt-5 text-center text-danger">
          <p>The page you're looking for is unavailable in self-hosted mode.</p>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
