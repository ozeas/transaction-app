import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { color } from 'styled-system';

export const WrapperIcon = styled.div`
  display: inline;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  -webkit-font-smoothing: antialiased;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.purple200')};
  border-radius: ${themeGet('radii.1')}px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 6px rgba(112, 82, 200, 0.3);
  color: ${themeGet('colors.white')};
  display: inline-flex;
  font-weight: ${themeGet('fontWeights.bold')};
  line-height: 24px;
  max-width: 328px;
  height: 48px;
  outline: 0;
  padding: 12px 0 12px 0;
  width: 100%;
  text-align: center;

  ${color}
`;

export default StyledButton;
