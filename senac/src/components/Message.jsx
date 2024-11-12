import React from 'react';

function Message({ message, onReact }) {
  const reactions = ['👍', '❤️', '😂', '😮', '😢', '😡'];

  return (
    <div className="message">
      <p>{message.text}</p>
      <div className="reactions">
        {reactions.map((reaction) => (
          <button key={reaction} onClick={() => onReact(message.id, reaction)}>
            {reaction} {message.reactions[reaction] || 0}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Message;