const React = require('react');

const Icon = require('./Icon');
const If = require('./If');

class Navbar extends React.Component {
  render() {
    const { variant, canSignup, canLogin, canSetup, canConfigure } = this.props;
    const navbarVariantClassName = variant === 'light' ? 'navbar-dark' : 'navbar-light';

    const primaryVariantButtonClassName = variant === 'light' ? 'btn-light' : 'btn-primary';
    const secondaryVariantButtonClassName = variant === 'light' ? 'btn-outline-light' : 'btn-outline-primary';

    return (
      <nav className={`navbar navbar-expand-sm fixed-top ${navbarVariantClassName}`}>
        <div className="container">
          <a className="navbar-brand mr-auto" href="/">Interrobang</a>

          <If test={canLogin}>
            <a className={`btn ${secondaryVariantButtonClassName}`} href="/account/#/login">
              Login
            </a>
          </If>
          <If test={canSignup}>
            <a className={`btn ${primaryVariantButtonClassName} ml-2`} href="/account/#/register">
              Sign Up
            </a>
          </If>

          <If test={canSetup}>
            <a className={`btn btn-link mr-2`} href="/account/#/configuration/browser">
              Setup Your Browser
            </a>
          </If>

          <If test={canConfigure}>
            <a className={`btn ${secondaryVariantButtonClassName}`} href="/account/#/configuration">
              Configure <Icon icon="settings" />
            </a>
          </If>
        </div>
        <script type="text/javascript" src="/assets/js/navbar.js"></script>
      </nav>
    );
  }
}

module.exports = Navbar;
