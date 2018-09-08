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
                            return <li>{item.name}</li>
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

export default connect(mapStateToProps)(Home);