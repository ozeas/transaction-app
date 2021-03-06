import styled, { css } from 'styled-components';
import { Flex } from 'reflexbox';
import { layout } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import NumberFormat from 'react-number-format';
// import InputMask from 'react-input-mask';

const floatedLabel = css`
  transform: translate(0, -7px) scale(1);
  background-color: ${themeGet('colors.white')};
  padding: 0 4px;
  margin-left: 12px;
`;

const setActiveLabel = ({ isActive }) =>
  isActive &&
  css`
    ${floatedLabel}
  `;

export const Wrapper = styled(Flex).attrs({
  flexDirection: 'column',
  width: 1,
})`
  position: relative;
  z-index: 0;

  :focus-within label {
    ${floatedLabel}
  }
`;

export const InputStyledMasked = styled(NumberFormat)`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 12px;
  outline: 0;
  border: 1px solid ${themeGet('gray400')};
  border-radius: ${themeGet('radii.0')}px;
  border: 1px solid ${themeGet('colors.gray200')};
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.gray400')};
  ${layout}
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 12px;
  outline: 0;
  border: 1px solid ${themeGet('gray400')};
  border-radius: ${themeGet('radii.0')}px;
  border: 1px solid ${themeGet('colors.gray200')};
  background: ${themeGet('colors.white')};
  color: ${themeGet('colors.gray400')};
  ${layout}
`;

export const Label = styled.label`
  background-color: transparent;
  font-size: ${themeGet('fontSizes.1')}px;
  color: ${themeGet('colors.gray200')};
  pointer-events: none;
  position: absolute;
  transform: translate(12px, 13px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  ${setActiveLabel}
`;
