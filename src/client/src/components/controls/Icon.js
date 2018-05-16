import React from 'react';

export default function Icon(props) {
  const className = `mdi mdi-${props.icon} ${props.className}`;
  return (
    <i className={className} />
  );
}
