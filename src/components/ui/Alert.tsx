import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { Result } from '../../types/Result';

type AlertProps = {
  alertState: Result;
  close: () => void;
}

const Alert = ({ alertState, close }: AlertProps) => {

  return alertState.show ? (
    <div className='container-fluid'>
      <BootstrapAlert
        onClose={() => close()}
        variant={alertState.succeeded ? 'primary' : 'danger'}
        dismissible={true}
      >
        {alertState.message}
      </BootstrapAlert>
    </div>
  ) : (<></>)
}

export default Alert;