import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import stash from './reducers/stash';
import App from './components/App';

const store = createStore(stash, {
  name: 'Rovan',
  platinum: 1,
  gold: 3,
  silver: 34,
  copper: 432
});

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
