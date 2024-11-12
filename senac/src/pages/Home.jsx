import React from 'react';
import { Link } from 'react-router-dom';
import Chat from '../components/Chat';

function Home() {
  return (
    <div className="home-container">
      <h1>Chat</h1>
      <Link to="/filter">Ir para Filtro de Mensagens</Link>
      <Chat />
    </div>
  );
}

export default Home;