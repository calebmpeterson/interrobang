const React = require("react");

class DeveloperBio extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-6 offset-3 col-md-2 offset-md-2">
            <img
              className="rounded-circle img-fluid border border-white"
              src="/assets/img/profile.png"
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <p style={{ margin: 0 }}>
              Hey there! I’m Caleb, an entrepreneur and the developer of
              Interrobang. I built Interrobang to help my fellow productivity
              nerds search the web more efficiently. I’m committed to making
              sure you love Interrobang! If there’s any way I can help, please
              email me directly at{" "}
              <a
                href="mailto:caleb.peterson@cubicle6.com"
                className="text-white text-underline"
              >
                caleb.peterson@cubicle6.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = DeveloperBio;
