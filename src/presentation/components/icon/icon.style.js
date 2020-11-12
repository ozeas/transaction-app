import styled from 'styled-components';
import { layout } from 'styled-system';

import { colorHover, iconColor } from '../utils/custom-props';

const { size } = layout;

const SVG = styled.svg`
  display: inline-block;
  vertical-align: middle;
  ${size}
  path {
    ${iconColor}
  }
  &:hover {
    path {
      ${colorHover(['fill'])}
    }
  }
`;

export default SVG;
