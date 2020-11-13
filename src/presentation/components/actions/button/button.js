import React from 'react';
import { bool, func, node, string } from 'prop-types';

import { Icon } from '@components/display';
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

Button.defaultProps = {
  disabled: false,
  func: () => {},
  icon: null,
};

Button.propTypes = {
  children: node.isRequired,
  disabled: bool,
  icon: string,
  onClick: func,
};

export default Button;
