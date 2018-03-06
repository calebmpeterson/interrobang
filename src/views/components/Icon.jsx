const React = require('react');

class Icon extends React.Component {
  render() {
    const className = `mdi mdi-${this.props.icon}`;
    return (<i className={className} />);
  }
}

module.exports = Icon;
