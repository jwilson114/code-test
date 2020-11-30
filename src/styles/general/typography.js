import {theme} from 'styles/theme';

export const Typography = `
  body {
  	font-family: ${theme.font.alpha};
  	font-size: ${theme.font.baseSize}px;
  	line-height: 1.3;
  	color: ${theme.colors.alpha};
    font-weight: 400;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  }

  h1{
    font-size: 1.85rem;
    line-height: 2.19em;
    font-weight: 700;
  }

  .text-center{
    text-align: center;
  }
`;
