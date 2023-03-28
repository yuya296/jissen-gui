import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { Result } from '../../types/Result';

type AlertProps = {
  alertState: Result;
  // message: string;
  // color: string;
  // show: boolean;
  close: () => void;
}

const Alert = ({ alertState, close }: AlertProps) => {

  return alertState.show ? (
    <BootstrapAlert
      onClose={() => close()}
      variant={alertState.succeeded ? 'primary' : 'danger'}
      dismissible={true}
    >
      {alertState.message}
    </BootstrapAlert>
  ) : (<></>)
}

export default Alert;