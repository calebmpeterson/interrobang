import React from "react";

const defaultValue = "inline-block";

const className = ({ xs, sm, md, lg, xl }) =>
  `d-${xs || defaultValue} d-sm-${sm || defaultValue} d-md-${md ||
    defaultValue} d-lg-${lg || defaultValue} d-xl-${xl || defaultValue}`;

const Visible = ({ children, xs, sm, md, lg, xl }) => (
  <div className={className({ xs, sm, md, lg, xl })}>{children}</div>
);

export default Visible;
