import styled from 'styled-components';
import { layout } from 'styled-system';

import { colorHover, iconColor } from '@components/utils/custom-props';

const { size } = layout;

const SVG = styled.svg`
  display: flex;
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
