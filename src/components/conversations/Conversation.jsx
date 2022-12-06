import axios from 'axios';
import { useEffect, useState } from 'react';
import './conversation.css';

export default function Conversation({ conversation }) {
  // useEffect(() => {
  //   const friendId = conversation.members.find((m) => m !== currentUser._id);

  //   const getUser = async () => {
  //     try {
  //       const res = await axios('/users?userId=' + friendId);
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);

  return (
    <div className='conversation'>
      <img
        className='conversationImg'
        src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        alt=''
      />
      <span className='conversationName'>
        Customer #{conversation.conversationId}
      </span>
    </div>
  );
}
