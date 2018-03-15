const React = require('react');

const delim = (<span> &bull; </span>);

const DefaultFooterContent = () => (
  <span>
    <a href="/">Interrobang</a>
    {delim}
    Made by Caleb Peterson with <i className="mdi mdi-nodejs text-success"></i> in Texas
    {delim}
    <a href="mailto:caleb.peterson@cubicle6.com">Contact me</a>
    {delim}
    <a href="https://www.github.com/calebmpeterson/interrobang" target="_blank">Source on GitHub</a>
  </span>
);

class Footer extends React.Component {
  render() {
    const { children, fixedBottom } = this.props;
    const fixedBottomClassName = fixedBottom ? 'fixed-bottom' : '';
    return (
      <div className={`footer text-center text-muted p-2 ${fixedBottomClassName}`}>
        <small>
          {children || (<DefaultFooterContent />)}
        </small>
      </div>
    );
  }
}

module.exports = Footer;
