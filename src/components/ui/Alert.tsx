import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { Result } from '../../types/Result';

type AlertProps = {
  result: Result;
  close: () => void;
}

const Alert = ({ result, close }: AlertProps) => {

  return result.show ? (
    <div className='container-fluid'>
      <BootstrapAlert
        onClose={() => close()}
        variant={result.succeeded ? 'primary' : 'danger'}
        dismissible={true}
      >
        {result.message}
      </BootstrapAlert>
    </div>
  ) : (<></>)
}

export default Alert;