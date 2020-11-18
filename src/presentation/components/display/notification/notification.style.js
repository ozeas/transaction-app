import styled, { css } from 'styled-components';

import { Flex } from '@components';

const setVariation = ({ variation }) =>
  ({
    warning: css`
      background: #eee8a9;
    `,
  }[variation]);

export const Wrapper = styled(Flex).attrs({
  justifyContent: 'center',
  alignItems: 'center',
})`
  position: 'fixed';
  top: 0;
  height: 50px;
  width: 100%;
  font-weight: 400;
  ${setVariation}
`;
