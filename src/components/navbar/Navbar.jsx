import './navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const role = user.data.user.role;
  const userId = user.data.user.userID;
  const { dispatch } = useContext(AuthContext);
  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='logo'>
          <h3>Branch International</h3>
        </div>
        <div className='items'>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            {role === 'agent' ? (
              <span className='item'>Agent #{userId}</span>
            ) : (
              <span className='item'>Customer #{userId}</span>
            )}
            <img
              src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='avatar'
            />
          </div>
          <div className='item' onClick={logoutHandler}>
            <LogoutIcon className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
