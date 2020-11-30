import { createGlobalStyle } from 'styled-components';
import { Reset } from './general/reset';
import { Base } from './general/base';
import { Typography } from './general/typography';
import { Form } from './general/form';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Base}
  ${Typography}
  ${Form}
`;

export default GlobalStyle;
