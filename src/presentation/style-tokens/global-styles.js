import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${theme.font};
    font-size: ${theme.fontSizes[1]}px;
  }
`;

export default GlobalStyle;
