import { createRoot } from 'react-dom/client';
import React from 'react';
import '@fontsource/roboto/500.css';
import BaseContainer from './components/BaseContainer';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BaseContainer />
  </Provider>
);
