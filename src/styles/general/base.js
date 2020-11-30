import {theme} from 'styles/theme';

export const Base = `
  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.colors.echo};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }


  img {
    max-width: 100%;
    height: auto;
  }
`;
