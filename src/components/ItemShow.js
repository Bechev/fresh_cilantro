import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addItemToBag} from '../actions/bag'
import Button from './Button.js'
import Footer from './Footer.js'
import '../App.css';


class ItemShow extends Component{
    constructor(){
        super()
        this.state = {
            item:{}
        }
        
    }
    
    componentDidMount() {
        this.fetchItem()
    }

    fetchItem() {
        console.log("this.props.match.params.itemID[0]: ",this.props.match.params.itemID)
        fetch("http://localhost:3000/items/" + this.props.match.params.itemID)
        .then(response => response.json())
        .then(fetchedItem => this.setState ({
            item: fetchedItem
        }))
    };

    render(){
        return (
        <div>
            <header className="header">{this.state.item.name}</header>
            <div>
                <p>{this.state.item.description}</p>
            </div>
            <Button name="Add to bag" handleClick={() => this.props.addItemToBag(this.state.item)}/>
            <Footer/>
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
        addItemToBag: (item) => dispatch(addItemToBag(item)),
      }
    }
    
export default connect(mapStateToProps, mapDispatchToProps)(ItemShow);