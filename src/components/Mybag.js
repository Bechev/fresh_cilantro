import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from './Button.js'
import '../App.css';

class Mybag extends Component {

    render() {

    this.handleCheckoutClick = () => {
        this.props.bag.forEach(bagElement => {
            console.log("bagElement :", bagElement )
            this.props.items.forEach (itemElement =>{
                console.log("itemElement :", itemElement )
                if(bagElement.id === itemElement.id){
                    this.props.removeItem(itemElement)
                }
            })
        })
        this.props.checkout()
    }

        return (
            <div>
                <header className="header">My bag</header>
                {this.props.bag.map((item, id) => {
                    return (
                        <div className = "cartItem">
                            <Link key={item.id} to={`items/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div className="item">
                                    {item.name} - {item.brand}
                                </div>
                            </Link>
                            <Button name= "Remove from bag" handleClick={() => this.props.removeItemToBag(item.id)}/><br></br>
                        </div>
                    )
                })}
                <Button name= "Empty bag" handleClick={() => this.props.empty_bag()}/><br></br>
                <Button name= "Checkout" handleClick={this.handleCheckoutClick}/><br></br>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    bag: state.bag,
    items: state.items
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addItemToBag: () => dispatch({type: 'ADD_ITEM_TO_BAG', payload: {name: "Mini", brand: "Chanel"}}),
    removeItemToBag: (item) => dispatch({type: 'REMOVE_ITEM_TO_BAG', payload: item}),
    checkout: () => dispatch({type: 'CHECKOUT'}),
    empty_bag: () => dispatch({type: 'EMPTY_BAG'}),
    addItem: (item) => dispatch({type: 'ADD_ITEM', payload: item}),
    removeItem: (item) => dispatch({type: 'REMOVE_ITEM', payload: item}),
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Mybag);