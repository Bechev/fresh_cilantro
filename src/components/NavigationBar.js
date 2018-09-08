import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
  <div class="navbar">
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkgrey'
      }}
    >Home</NavLink>
    
    <NavLink
      to="/brands"
      exact
      style={link}
      activeStyle={{
        background: 'darkgrey'
      }}
    >Brands</NavLink>
    
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkgrey'
      }}
    >About</NavLink>
  </div>;


export default Navbar