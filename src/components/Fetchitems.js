import { Component } from 'react';
import {fetchItems} from '../actions/items'
import { connect } from 'react-redux'

class Fetchitems extends Component {

    render(){
        return null
    }

    componentWillMount() {
        this.fetchItemsFromServer()
    }

    fetchItemsFromServer() {
        const loadedItems = fetch("http://localhost:3000/items")
        .then(response => response.json())
        .then(items => this.props.fetchItems(items))
        return loadedItems
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
  