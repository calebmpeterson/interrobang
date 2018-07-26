const React = require('react');

const { getApplicationName, getApplicationVersion } = require('../../env');

const delim = (<span> &bull; </span>);

const nameAndVersion = `${getApplicationName()} ${getApplicationVersion()}`;

const DefaultFooterContent = () => (
  <span>
    <a href="/" data-toggle="tooltip" data-placement="top" title={nameAndVersion}>Interrobang</a>
    {delim}
    Made by Caleb Peterson with <i className="mdi mdi-nodejs text-success"></i> and <i className="mdi mdi-react text-success"></i> in Texas
    <span className="d-none d-md-inline">{delim}</span>
    <br className="d-md-none" />
    <a href="https://www.github.com/calebmpeterson/interrobang" target="_blank">Source on GitHub</a>
    {delim}
    <a href="http://www.uptimedoctor.com/publicreport/25lngu4k/156281" target="_blank">Status</a>
    {delim}
    <img src="https://app.codeship.com/projects/84685410-0b95-0136-a02e-3a0ed76fbcd7/status?branch=master" />
  </span>
);

class Footer extends React.Component {
  render() {
    const { children, fixedBottom, className } = this.props;
    const fixedBottomClassName = fixedBottom ? 'fixed-bottom' : '';
    return (
      <div className={`footer text-center p-2 ${className || ''} ${fixedBottomClassName}`}>
        <small>
          {children || (<DefaultFooterContent />)}
        </small>
        <script type="text/javascript" defer src="/assets/js/enable-tooltips.js" />
      </div>
    );
  }
}

module.exports = Footer;
