import React from "react";

export default class MenuItem extends React.Component {
  onClick = event => {
    event.stopPropagation();
    event.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <a
        className="dropdown-item"
        href={this.props.href}
        onMouseDown={this.onClick}
      >
        {this.props.children}
      </a>
    );
  }
}
