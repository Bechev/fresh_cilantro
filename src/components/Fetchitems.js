import React, { Component } from 'react';
import {fetchItems} from '../actions/items'
import { connect } from 'react-redux'

class Fetchitems extends Component {

    render(){
        return null
    }

    componentDidMount() {
        this.fetchItems()
    }

    fetchItems() {
        const items = fetch("http://localhost:3000/items.json")
        .then(response => response.json())
        .then(json => this.props.fetchItems(json))
        return items
    };
    
}

const mapStateToProps = state => {
    return {
      items: state.items
    }
  }
   
  const mapDispatchToProps = dispatch => {
    return {
      fetchItems: (items) => dispatch(fetchItems(items)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Fetchitems);
  