import React from "react";

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.setState({ show: !this.state.show });
  }

  render() {
    const { title, linkClassName, menuClassName, children, href } = this.props;

    const showClassName = this.state.show ? "show" : "";

    const dropdownId = "dropdown-" + Math.random();

    return (
      <ul className="navbar-nav">
        <li className={`nav-item dropdown ${showClassName}`}>
          <a
            className={`${linkClassName || "nav-link"} dropdown-toggle`}
            href={href}
            id={dropdownId}
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={this.onClick}
          >
            {title}
          </a>
          <div
            className={`dropdown-menu ${menuClassName || ""} ${showClassName}`}
            aria-labelledby={dropdownId}
          >
            {children}
          </div>
        </li>
      </ul>
    );
  }
}
