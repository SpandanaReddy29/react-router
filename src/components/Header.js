import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <NavLink to='/auth' > Home</NavLink>
        <NavLink to='/posts' >Post</NavLink>
      </header>
    </div>
  )
}

export default Header