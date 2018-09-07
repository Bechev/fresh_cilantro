import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to Fresh Cilantro</h1>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
 
  addItemToBag = (event) => {
    this.props.addItemToBag()
  }
 
  removeItemToBag = (event) => {
    this.props.removeItemToBag()
  }

  checkout = (event) => {
    this.props.checkout()
  }

  empty_bag = (event) => {
    this.props.empty_bag()
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addItemToBag} >
          Add item
        </button>
        <button onClick={this.removeItemToBag} >
          Remove item
        </button>
        <button onClick={this.checkout} >
          Checkout
        </button>
        <button onClick={this.empty_bag} >
          Empty
        </button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    bag: state.bag
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addItemToBag: (item) => dispatch({type: 'ADD_ITEM_TO_BAG', payload: item}),
    removeItemToBag: (item) => dispatch({type: 'REMOVE_ITEM_TO_BAG', payload: item}),
    checkout: () => dispatch({type: 'CHECKOUT'}),
    empty_bag: () => dispatch({type: 'EMPTY_BAG'})
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
