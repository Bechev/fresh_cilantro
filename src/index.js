import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import rootReducer from './reducers/rootReducer.js';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// Verify best practices for nested routing and how I get the link to the ItemsShow
// Understand better id management => Error: Each child in array or iterator should have  a unique "key" prop (hone and mybag)
// Better understand expectations for containers vs components
// Stop propagation
// Conflict for active style Navbar