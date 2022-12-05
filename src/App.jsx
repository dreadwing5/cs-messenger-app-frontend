import { useState, useEffect } from 'react';
import DashBoard from './components/DashBoard.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import ChatPage from './components/ChatPage.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

function App() {
  const [socket, setSocket] = useState(null);
  const [userId, setUserId] = useState('');

  const setUpSocket = async () => {
    const token = localStorage.getItem('token');
    if (token && !socket) {
      const newSocket = io('http://localhost:8000', {
        auth: {
          token: localStorage.getItem('token'),
        },
      });

      newSocket.on('disconnect', () => {
        setSocket(null);
        setTimeout(setUpSocket, 3000);
      });
      newSocket.on('connect', () => {
        console.log('Connected');
      });

      setSocket(newSocket);
    }
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            <Login
              userID={userId}
              setUserID={setUserId}
              setUpSocket={setUpSocket}
            />
          }
        />
        <Route path='/dashboard/' element={<DashBoard socket={socket} />} />
        <Route path='/thread/:id' element={<ChatPage socket={socket} />} />
      </Routes>
    </div>
  );
}

export default App;
