import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addItemToBag} from '../actions/bag'
import Button from './Button.js'
import '../App.css';


class ItemShow extends Component{
    constructor(){
        super()
        var item
    }
    
    getItem(id) {
        return (
            this.props.items.filter(function (el) {
                return el.id.toString() === id
            })
        )
    }

    render(){
        this.item = this.getItem(this.props.match.params.itemID)[0]
        return (
        <div>
            <header className="header">{this.item.name}</header>
            <div>
                <p>{this.item.description}</p>
            </div>
            <Button name="Add to bag" handleClick={() => this.props.addItemToBag(this.item)}/>
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