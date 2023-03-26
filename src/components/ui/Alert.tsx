import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = (props:any) => {

  const {
    variant,
    children,
    ...otherProps
  } = props;

  return (
    <BootstrapAlert variant={variant} {...otherProps}>
      {children}
    </BootstrapAlert>
  );
}

export default Alert;