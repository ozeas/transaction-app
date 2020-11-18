import React from 'react';
import { string, oneOf } from 'prop-types';

import { Wrapper } from './notification.style';

const Notification = ({ message, variation }) => (
  <Wrapper variation={variation}>{message}</Wrapper>
);

Notification.defaultProps = {
  message: '',
  variation: 'warning',
};

Notification.propTypes = {
  message: string,
  variation: oneOf(['warning']),
};

export default Notification;
