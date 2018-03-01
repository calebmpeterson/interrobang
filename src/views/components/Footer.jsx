const React = require('react');

class Footer extends React.Component {
  render() {
    const delim = (<span> &bull; </span>);
    const { fixedBottom } = this.props;
    const fixedBottomClassName = fixedBottom ? 'fixed-bottom' : '';
    return (
      <div className={`footer text-center text-muted p-2 ${fixedBottomClassName}`}>
        <small>
          <a href="/">Interrobang</a>
          {delim}
          Made by Caleb Peterson with <i className="mdi mdi-nodejs text-success"></i> in Texas
          {delim}
          <a href="https://www.github.com/calebmpeterson/interrobang" target="_blank">Source on GitHub</a>
          {delim}
          <a href="mailto:caleb.peterson@cubicle6.com">Contact me</a>
        </small>
      </div>
    );
  }
}

module.exports = Footer;
