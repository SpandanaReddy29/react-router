import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const Profile = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/')
  }

  return (
    <div>
      <div>
        Welcome {auth.user}
      </div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Profile