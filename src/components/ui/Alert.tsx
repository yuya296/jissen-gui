import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

type AlertProps = {
  message: string;
  color: string;
  show: boolean;
  close: () => void;
}

const Alert = ({ message, color, show, close}: AlertProps) => {

  return show ? (
    <BootstrapAlert
      onClose={() => close()}
      variant={color}
      dismissible={true}
    >
      {message}
    </BootstrapAlert>
  ) : (<></>)
}

export default Alert;