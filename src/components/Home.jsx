import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  }, []);
  return <div></div>;
};

export default Home;
