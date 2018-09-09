import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home.js'
import Additem from './components/Additem'
import Mybag from './components/Mybag.js'
import About from './components/About.js'
import ItemShow from './components/ItemShow.js'
import NavigationBar from './components/NavigationBar.js'
import Fetchitems from './components/Fetchitems.js';


export default class App extends Component {
 


  render() {
    return (
      <div className="App">
      <Fetchitems/>
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

