import { createGlobalStyle } from 'styled-components';
import { Reset } from './general/reset';
import { Base } from './general/base';
import { Typography } from './general/typography';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Base}
  ${Typography}
`;

export default GlobalStyle;
