import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Auth'

const RequiredAuth = ({ children }) => {

  const auth = useAuth();
  const location = useLocation();

  if(!auth.user){
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default RequiredAuth