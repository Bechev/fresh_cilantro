import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './Button'
import Item from './Item'

import '../App.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsList: []
        };
      }

    handleClick = () => {
        const sortedItemsList = [].concat(this.props.items)
        .sort((a, b) => a.likes - b.likes)
        this.setState({
            itemsList: sortedItemsList
        })
    }

    renderItemsList = () => {   
        if (this.state.itemsList.length === 0){
            return (
                <div>
                    {this.props.items.map((item, id) => {
                        return (
                            <div>
                                <Item item={item} id={id}/>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div>
                    {this.state.itemsList.map((item, id) => {
                        return (
                            <div>
                                <Item item={item} id={id}/>
                            </div>
                        )
                    })}
                </div>
            )
        }        
    }


    render() {
        return (
            <div>
                <header className="header">Welcome to Fresh Cilantro Boutique</header>
                <Button name="Sort items" handleClick={this.handleClick}/>
                <div>
                    {this.renderItemsList()}
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