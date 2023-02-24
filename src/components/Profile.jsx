import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth'

const Profile = () => {
    const auth = useAuth();
    console.log(auth)
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
  return (
    <div>welcome user : {auth.user}
        <button type='button' onClick={handleLogout}> Logout </button>
    </div>
  )
}

export default Profile