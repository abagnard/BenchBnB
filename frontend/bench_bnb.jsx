import React from 'react';
import ReactDOM from 'react-dom';

import { login } from './util/session_api_util.js';
import configureStore from './store/store';

// window.login = login;

document.addEventListener('DOMContentLoaded', () => {

  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
