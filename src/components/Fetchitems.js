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
        // [
        //     {
        //         id: 1,
        //         name: "Mini Classic",
        //         brand: "Chanel",
        //         description: "Empty description",
        //         created_at: "2018-09-09T20:49:09.107Z",
        //         updated_at: "2018-09-09T20:49:09.107Z"
        //     },
        //     {
        //         id: 2,
        //         name: "Hermes Belt",
        //         brand: "Hermes",
        //         description: "Empty description",
        //         created_at: "2018-09-09T20:49:09.139Z",
        //         updated_at: "2018-09-09T20:49:09.139Z"
        //     },
        //     {
        //         id: 3,
        //         name: "LV cross body",
        //         brand: "Louis Vuitton",
        //         description: "Empty description",
        //         created_at: "2018-09-09T20:49:09.168Z",
        //         updated_at: "2018-09-09T20:49:09.168Z"
        //     },
        //     {
        //         id: 4,
        //         name: "WOC",
        //         brand: "Chanel",
        //         description: "Empty description",
        //         created_at: "2018-09-09T20:49:09.204Z",
        //         updated_at: "2018-09-09T20:49:09.204Z"
        //     },
        //     {
        //         id: 5,
        //         name: "Espadrilles",
        //         brand: "Chanel",
        //         description: "Empty description",
        //         created_at: "2018-09-09T20:49:09.243Z",
        //         updated_at: "2018-09-09T20:49:09.243Z"
        //     },
        //     {
        //         id: 6,
        //         name: "Sneakers",
        //         brand: "Gucci",
        //         description: "Empty description",
        //         created_at: "2018-09-09T20:49:09.280Z",
        //         updated_at: "2018-09-09T20:49:09.280Z"
        //     },
        //     {
        //         id: 7,
        //         name: "Coin purse",
        //         brand: "Fendi",
        //         description: "Empty description",
        //         created_at: "2018-09-09T20:49:09.305Z",
        //         updated_at: "2018-09-09T20:49:09.305Z"
        //     }
        // ]
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
  