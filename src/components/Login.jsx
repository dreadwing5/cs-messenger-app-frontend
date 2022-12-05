import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login({ userID, setUserID, setUpSocket }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID,
        }),
      });
      const res = await response.json();
      localStorage.setItem('token', res.token);
      if (res.status === 'success') {
        setIsAuth(true);
        localStorage.setItem('userID', userID);
        setUpSocket();
        if (res.data.user.role === 'customer') {
          navigate(`/thread/${userID}`);
        } else {
          navigate('/dashboard');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className='center'>
      <label className='label' htmlFor='email'>
        UserID :
      </label>
      <input value={userID} onChange={(e) => setUserID(e.target.value)} />
      <button onClick={handleClick}>Login</button>
    </form>
  );
}
export default Login;
