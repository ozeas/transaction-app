import React from 'react';
import { node, string } from 'prop-types';

import Icon from '../icon/icon';
import StyledButton, { WrapperIcon } from './button.style';

const Button = ({ children, icon, ...props }) => (
  <StyledButton {...props}>
    {icon && (
      <WrapperIcon>
        <Icon name={icon} />
      </WrapperIcon>
    )}
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: node.isRequired,
  icon: string,
};

export default Button;
