import React from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux'
import '../css/NavigationBar.css';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'lightgrey',
    textDecoration: 'none',
    color: 'white',
}

  

const Navbar = () =>
  <div className="navbar">
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'goldenrod'
      }}
    >Home</NavLink>
    
    <NavLink
      to="/add_item"
      exact
      style={link}
      activeStyle={{
        background: 'goldenrod'
      }}
    >Request an Item</NavLink>
    
    <NavLink
      to="/my_bag"
      exact
      style={link}
      activeStyle={{
        background: 'goldenrod'
      }}
    >My bag</NavLink>


    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'goldenrod'
      }}
    >About</NavLink>
  </div>;


export default Navbar


// const mapStateToProps = state => {
//   return {
//     bag: state.bag,
//   }
// }

// export default connect(mapStateToProps)(App);

