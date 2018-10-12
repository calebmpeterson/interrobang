import React from "react";

export default class ConfirmationButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirming: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    if (this.state.confirming) {
      this.props.onClick(event);
    }
    this.setState({ confirming: !this.state.confirming });
  }

  render() {
    const className = this.state.confirming
      ? this.props.confirmationClassName
      : this.props.className;
    const children = this.state.confirming
      ? this.props.confirmation
      : this.props.children;
    return (
      <button
        type="button"
        className={className || "btn btn-outline-secondary"}
        onClick={this.onClick}
      >
        {children}
      </button>
    );
  }
}
