import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

// window.login = login;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
