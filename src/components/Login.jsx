import React,{useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {
    
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const redirectPath = location.state?.path
    const handleLogin = () => {
        console.log(user)
       auth.login(user);
       localStorage.setItem('user', user)
       navigate('/profile', {replace:true})
    }
    useEffect(() => {
        if(localStorage.getItem('user')){
          navigate('/profile');
        }
    }, [])

  return (
    <>
    <h1> username : {user}</h1>
    <input type="text" onChange={(e) => setUser(e.target.value)} />
    <button onClick={handleLogin}> Login </button>
    </>
  )
}

export default Login