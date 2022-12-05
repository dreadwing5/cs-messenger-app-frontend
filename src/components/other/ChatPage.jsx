import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const ChatPage = ({ socket }) => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();
  const sendMessage = () => {
    console.log('sending message');
    if (socket) {
      socket.emit('customer_message', {
        message: messageRef.current.value,
        conversationId: id,
      });
      messageRef.current.value = '';
      console.log('message sent');
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on('customer_message', (message) => {
        const newMessages = [...messages, message];
        setMessages(newMessages);
      });
    }
  }, [messages]);

  return (
    <>
      <h1>Messages : </h1>
      <div>
        {messages.map((message, i) => (
          <div key={i}>
            <p>{message.message}</p>
          </div>
        ))}
      </div>

      <input
        type='text'
        name='message'
        ref={messageRef}
        placeholder='Say Something!'
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
};

export default ChatPage;
