import React, { Component } from 'react';
import {addItem} from '../actions/items'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../App.css';


class Additem extends Component {
    constructor(){
        super()
        this.state = {
            item:{
                id: "",
                name: "",
                brand: "",
                description: ""
            }
        }
    }

    assignItemID = () => {
        let itemID = this.createItemID()
        this.setState ({
            item: {
                ...this.state.item,
                id: itemID
            }
        })
    }
    

    handleNameChange = (event) => {
        event.preventDefault()
        this.setState ({
            item: {
                ...this.state.item,
                name: event.target.value
            }
        })
    }

    handleBrandChange = (event) => {
        event.preventDefault()
        this.setState ({
            item: {
                ...this.state.item,
                brand: event.target.value
            }
        })
    }

    handleDescriptionChange = (event) => {
        event.preventDefault()
        this.setState ({
            item: {
                ...this.state.item,
                description: event.target.value
            }
        })
    }

    handleClick = (event) =>{
        event.preventDefault()
        console.log('A')
        this.props.addItem(this.state.item, this.props.history)
        console.log('B')
    }

    render() {
        return (
            <div>
            <header className="header">Add Item</header>
            <form className="item">
                <label> Name:
                <input type="text" name="name" placeholder="Item name"  onChange={this.handleNameChange} />
                </label>
                <label> Brand:
                <input type="text" name="brand" placeholder="Item Brand"  onChange={this.handleBrandChange}/>
                </label>
                <label> Description:
                <textarea  name="description" placeholder="Item Description"  onChange={this.handleDescriptionChange}/>
                </label>
                <input type="button" value="Request item" onClick={this.handleClick} />
            </form>
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
    addItem: (item,history) => dispatch(addItem(item, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Additem);