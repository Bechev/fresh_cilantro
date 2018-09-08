import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from './Button.js'
import '../App.css';

class Mybag extends Component {


    render() {
        return (
            <div>
                <header className="header">My bag</header>
                {this.props.bag.map((item, id) => {
                    return (
                        <div className = "cartItem">
                            <Link key={item.id} to={`items/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div className="item">
                                    {item.name} - {item.brand}
                                    {/* <Button name="X" handleClick={() => { this.props.removeItemToBag(item.id) }} /> */}
                                </div>
                            </Link>
                            <Button name= "Remove from bag" handleClick={() => this.props.removeItemToBag(item.id)}/><br></br>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      bag: state.bag
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItemToBag: (item) => dispatch({type: 'REMOVE_ITEM_TO_BAG', payload: item}),
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Mybag);