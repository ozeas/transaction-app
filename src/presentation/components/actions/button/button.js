import React from 'react';
import { bool, func, node, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon } from '@components/display';
import { StyledButton, WrapperIcon, StyledLink } from './button.style';

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

const LinkButton = (props) => <StyledLink {...props} />;
LinkButton.defaultProps = {
  as: Link,
};
Button.Link = LinkButton;

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
