import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home.js'
import Additem from './components/Additem'
import Mybag from './components/Mybag.js'
import About from './components/About.js'
import ItemShow from './components/ItemShow'
import NavigationBar from './components/NavigationBar'


export default class App extends Component {
 
  render() {
    return (
      <div className="App">
      <NavigationBar />
        <React.Fragment>
          <Route exact path='/' render={routerProps => <Home {...routerProps} items={this.props.items}/>} />
          <Route exact path={`/items/:itemID`} component={ItemShow}/>
          <Route exact path="/my_bag" component={Mybag} />
          <Route exact path="/add_item" component={Additem} />
          <Route exact path="/about" component={About} />
        </React.Fragment>
      </div>
    );
  }
};

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

