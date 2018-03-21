const React = require('react');

class BackBehavior extends React.Component {
  render() {
    return React.Children.only(this.props.children);
  }
}

module.exports = BackBehavior;
