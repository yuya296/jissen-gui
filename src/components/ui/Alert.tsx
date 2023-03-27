import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

type AlertProps = {
  message: string;
  color: string;
  show: boolean;
  close: () => void;
  children?: any;
}

const Alert = ({ message, color, show, close, children }: AlertProps) => {

  return show ? (<></>) : (
    <BootstrapAlert
      onClose={() => close()}
    >
      {children}
    </BootstrapAlert>
  );
}

export default Alert;