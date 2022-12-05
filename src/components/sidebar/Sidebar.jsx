import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { useContext } from 'react';
const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    console.log('logout');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };
  return (
    <div className='sidebar'>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <li>
            <ChatIcon className='icon' />
            <span>Chats</span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span onClick={logoutHandler}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
