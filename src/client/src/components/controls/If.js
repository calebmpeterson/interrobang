import isFunction from "lodash/isFunction";

const renderChildren = children => {
  return isFunction(children) ? children() : children;
};

const If = props => (props.test ? renderChildren(props.children) : null);

export default If;
