import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme.js';


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <main>{children}</main>
    </Fragment>
  </ThemeProvider>
);


Layout.propTypes ={
  children: PropTypes.any
};

export default Layout;
