import React from 'react';

import useOnline from '@presentation/pages/hooks/use-online';
import { Notification } from '@presentation/components/display';

const NetworkWarning = () => {
  const { isOffline } = useOnline();
  return isOffline ? (
    <Notification message="Ops...você está offline!" />
  ) : (
    <></>
  );
};

export default NetworkWarning;
