import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  * {
    font-family: ${theme.font};
  }
`;

export default GlobalStyle;
