const React = require("react");

const Icon = require("./Icon");
const If = require("./If");

class Navbar extends React.Component {
  render() {
    const { variant, canSignup, canLogin, canSetup, canConfigure } = this.props;
    const navbarVariantClassName =
      variant === "light" ? "navbar-dark" : "navbar-light";

    const primaryVariantButtonClassName =
      variant === "light" ? "btn-light" : "btn-primary";
    const secondaryVariantButtonClassName =
      variant === "light" ? "btn-outline-light" : "btn-outline-primary";

    return (
      <nav
        className={`navbar navbar-expand-sm fixed-top ${navbarVariantClassName}`}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            Interrobang
          </a>

          <ul className="navbar-nav ml-3 mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/about/privacy-policy/">
                Privacy Policy
              </a>
            </li>
          </ul>

          <If test={canLogin}>
            <a
              className={`btn ${secondaryVariantButtonClassName}`}
              href="/account/#/login"
            >
              Login
            </a>
          </If>
          <If test={canSignup}>
            <a
              className={`btn ${primaryVariantButtonClassName} ml-2`}
              href="/account/#/register"
            >
              Sign Up
            </a>
          </If>

          <If test={canSetup || canConfigure}>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="btn btn-outline-primary dropdown-toggle"
                  href="#"
                  id="navbar-configure-dropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <Icon icon="account" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbar-configure-dropdown"
                >
                  <If test={canConfigure}>
                    <a
                      className="dropdown-item"
                      href="/account/#/configuration"
                    >
                      <Icon icon="settings" /> Configuration
                    </a>
                  </If>

                  <If test={canSetup}>
                    <a
                      className="dropdown-item"
                      href="/account/#/configuration/browser"
                    >
                      <Icon icon="web" /> Setup Browser
                    </a>
                  </If>

                  <If test={canSetup || canConfigure}>
                    <a className="dropdown-item" href="/account/#/settings">
                      <Icon icon="account" /> Manage Account
                    </a>
                  </If>
                </div>
              </li>
            </ul>
          </If>
        </div>
        <script type="text/javascript" src="/assets/js/navbar.js" />
      </nav>
    );
  }
}

module.exports = Navbar;
