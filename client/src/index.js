import React from 'react';
import ReactDOM from 'react-dom';

// ---- redux parts
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer.js';

// thunk for async calls
// logger for making dev easier
const middleware = [thunk, logger()];

let store = createStore(reducer, applyMiddleware(...middleware));

const App = require('./components/app.jsx');

const ProvidedApp = () => {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  );
}

ReactDOM.render(<ProvidedApp />, document.getElementById('react_target'));
