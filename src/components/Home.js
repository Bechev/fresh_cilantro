import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';


class Home extends Component {

    render() {
        return (
            <div>
                <header className="header">Welcome to Fresh Cilantro Boutique</header>
                <div>
                    <ul>
                        {this.props.items.map(item => {
                            return (
                            <p className="item">{item.name}<br></br>
                            Brand: {item.brand}<br></br>
                            Description: {item.description}</p>
                            )
                        })}
                    </ul>
                </div>
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
    addItemToBag: () => dispatch({type: 'ADD_ITEM_TO_BAG', payload: {name: "Mini", brand: "Chanel"}}),
  }
}

export default connect(mapStateToProps)(Home);