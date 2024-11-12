import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FilterPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const messages = JSON.parse(localStorage.getItem('messages')) || [];

  const filteredMessages = messages.filter((message) =>
    message.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="filter-container">
      <h1>Filtrar Mensagens</h1>
      <Link to="/">Voltar para o Chat</Link>
      <input
        type="text"
        placeholder="Buscar mensagem"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filtered-messages">
        {filteredMessages.map((message) => (
          <div key={message.id} className="message">
            <p>{message.text}</p>
            <div className="reactions">
              {Object.entries(message.reactions).map(([reaction, count]) => (
                <span key={reaction}>
                  {reaction}: {count}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterPage;