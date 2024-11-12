import React, { useState, useEffect } from 'react';
import Message from './Message';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [reactions, setReactions] = useState({});

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(savedMessages);
    setReactions({});
  }, []);

  const handleSendMessage = () => {
    const message = {
      id: Date.now(),
      text: newMessage,
      reactions: {},
    };
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    setNewMessage('');
  };

  const handleReact = (messageId, reaction) => {
    if (reactions[messageId]) return;

    const updatedMessages = messages.map((message) =>
      message.id === messageId
        ? {
            ...message,
            reactions: {
              ...message.reactions,
              [reaction]: (message.reactions[reaction] || 0) + 1,
            },
          }
        : message
    );
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    setReactions({ ...reactions, [messageId]: true });
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <div className="messages-container">
        {messages.map((message) => (
          <Message key={message.id} message={message} onReact={handleReact} />
        ))}
      </div>
      <div className="new-message-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;