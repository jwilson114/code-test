import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/global';

import Questionnaire from 'views/questionnaire';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <Questionnaire />
  </React.StrictMode>,
  document.getElementById('root')
);
