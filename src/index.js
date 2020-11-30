import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/global';
import store from 'store';
import { Provider } from 'react-redux';
import Questionnaire from 'views/questionnaire';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <Questionnaire />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
