import react, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function DashBoard({ socket }) {
  const { id } = useParams();
  const userID = localStorage.getItem('userID');
  const [threads, setThread] = useState([]);
  const getThreads = async () => {
    const res = await axios.get('http://localhost:8000/api/thread');
    setThread(res.data);
  };

  useEffect(() => {
    getThreads();
  }, []);

  useEffect(() => {
    console.log('socket', socket);
    if (socket) {
      socket.on('customer_message', (message) => {
        console.log(message);
      });
    }
  }, [socket]);
  //create dashboard with logout button and user id on top

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <p> Welcome, {userID}</p> */}
      {threads.map((thread) => (
        <div key={thread._id}>
          <Link to={`/thread/${thread.conversationId}`}>
            {thread.conversationId}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DashBoard;
