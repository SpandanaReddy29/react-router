import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; //NavLink knows which is active link
import { useAuth } from './Auth';

const NavBar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  const auth = useAuth();

  return (
    <div>
      <nav className='primary-nav'>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
        <NavLink to='/' style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to='/about' style={navLinkStyles}>
          About
        </NavLink>
        <NavLink to='/products' style={navLinkStyles}>
          Products
        </NavLink>
        <NavLink to='/profile' style={navLinkStyles}>
          Profile
        </NavLink>
        {
          !auth.user && (
            <NavLink to='/login' style={navLinkStyles}>
              Login
            </NavLink>
          )
        }
      </nav>
    </div>
  )
};

export default NavBar