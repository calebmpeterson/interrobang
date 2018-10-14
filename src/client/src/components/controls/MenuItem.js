import React from "react";

export default class MenuItem extends React.Component {
  onClick = event => {
    event.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <a className="dropdown-item" href="#" onClick={this.onClick}>
        {this.props.children}
      </a>
    );
  }
}
