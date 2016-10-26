import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';

const configureStore = (preloadedState = {}) => {
  createStore(
    RootReducer,
    preloadedState
  );
};

export default configureStore;
