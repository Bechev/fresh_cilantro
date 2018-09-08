import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
import './index.css';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'; 
import bagReducer from './reducers/bagReducer.js';
import itemsReducer from './reducers/itemsReducer.js';

const store = createStore(bagReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const reducers = combineReducers({
  bag: bagReducer,
  items: itemsReducer
})

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);