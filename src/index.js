import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
import './index.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import rootReducer from './reducers/rootReducer.js';

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// Understand better id management => Error: Each child in array or iterator should have  a unique "key" prop (hone and mybag)
// Better understand expectations for containers vs components
// Conflict for active style Navbar
//Post data to the DB







// const mapStateToProps = state => {
//   return {
//     bag: state.bag,
//     items: state.items
//   }
// }
 
// const mapDispatchToProps = dispatch => {
//   return {
//     addItemToBag: () => dispatch({type: 'ADD_ITEM_TO_BAG', payload: {name: "Mini", brand: "Chanel"}}),
//     removeItemToBag: (item) => dispatch({type: 'REMOVE_ITEM_TO_BAG', payload: item}),
//     checkout: () => dispatch({type: 'CHECKOUT'}),
//     empty_bag: () => dispatch({type: 'EMPTY_BAG'}),
//     addItem: (item) => dispatch({type: 'ADD_ITEM', payload: item}),
//     removeItem: (item) => dispatch({type: 'REMOVE_ITEM', payload: item}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
