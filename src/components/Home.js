import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './Button'
import Item from './Item'

import '../App.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            updated: true,
            sorted: false,
            itemsList: []
        };
      }

    handleClick = () => {
        console.log("this.state.itemsList: ",this.state.itemsList)
        const sortedItemsList = [].concat(this.props.items)
        .sort((a, b) => a.likes - b.likes)
        this.setState({
            itemsList: sortedItemsList,
            sorted: true
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
        const isSorted = this.state.sorted
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