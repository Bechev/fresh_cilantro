import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './Button'
import Item from './Item'

import '../App.css';

class Home extends Component {


    render() {
        return (
            <div>
                <header className="header">Welcome to Fresh Cilantro Boutique</header>
                <div>
                    {this.props.items.map((item, id) => {
                        return (
                            <div>
                                <Item item={item} id={id}/>
                            </div>
                        )
                    })}
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

export default connect(mapStateToProps)(Home);