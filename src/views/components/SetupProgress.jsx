const React = require('react');

const STEPS = 4;

class SetupProgress extends React.Component {
  render() {
    const { step } = this.props;
    const percentage = 100.0 * step / STEPS;
    const complete = `${percentage}%`;
    return (
      <div className="progress">
        <div className="progress-bar bg-success" style={{width: complete}}/>
      </div>
    );
  }
}

module.exports = SetupProgress;
