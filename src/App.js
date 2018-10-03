import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {fetchItems} from './actions/items';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import './App.css';
import Home from './components/Home.js'
import Additem from './components/Additem'
import Mybag from './components/Mybag.js'
import About from './components/About.js'
import ItemShow from './components/ItemShow.js'
import NavigationBar from './components/NavigationBar.js'



class App extends Component {
 
  componentDidMount(){
    this.props.fetchItems();
  }

  render() {
    console.log("itemList: ", itemList)
    const itemList = this.props.items
    return (
      <div className="App">
      <NavigationBar />
        <React.Fragment>
          <Route exact path='/' component={Home} items={itemList}/>
          <Route exact path={`/items/:itemID`} component={ItemShow}/>
          <Route exact path="/my_bag" component={Mybag} />
          <Route exact path="/add_item" component={Additem} />
          <Route exact path="/about" component={About} />
        </React.Fragment>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      items: state.items
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      fetchItems: () => dispatch(fetchItems()),
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

