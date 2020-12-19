import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";

/* site theme */
import Theme from './styles/theme/theme';
import GlobalStyle from "./styles/base/core";

/* ui components */
import App from './App';
import store from './store';

const app = document.getElementById('root');

render (
  <Provider store={store}>
    <ThemeProvider theme={ Theme } >
      <App/>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  app
);
