import React from 'react'
import { Navigate } from 'react-router-dom';

const RequiredAuth = ({ children }) => {

  const logged = localStorage.getItem("loggedIn");

  if(!logged){
    return <Navigate to='/auth/login' />    
  }

  return children
}

export default RequiredAuth