import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {



    render() {
        return (
            <div>
                <header className="header">Welcome to Fresh Cilantro Boutique</header>
                <div>
                    {this.props.items.map((item, id) => {
                        return (
                            <Link key={item.id} to={`items/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div className="item float" >
                                    {item.name} - {item.brand}<br></br>
                                </div>
                            </Link>
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