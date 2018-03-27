const React = require('react');

const { getApplicationName, getApplicationVersion } = require('../../env');

const delim = (<span> &bull; </span>);

const nameAndVersion = `${getApplicationName()} ${getApplicationVersion()}`;

const DefaultFooterContent = () => (
  <span>
    <a href="/" data-toggle="tooltip" data-placement="top" title={nameAndVersion}>Interrobang</a>
    {delim}
    Made by Caleb Peterson with <i className="mdi mdi-nodejs text-success"></i> in Texas
    {delim}
    <a href="mailto:caleb.peterson@cubicle6.com">Contact me</a>
    {delim}
    <a href="https://www.github.com/calebmpeterson/interrobang" target="_blank">Source on GitHub</a>
    {delim}
    <a href="http://www.uptimedoctor.com/publicreport/25lngu4k/156281" target="_blank">Status</a>
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
        <script type="text/javascript" defer src="/assets/js/enable-tooltips.js" />
      </div>
    );
  }
}

module.exports = Footer;
