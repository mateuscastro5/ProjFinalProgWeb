import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(), // Gerar um ID único
      name,
      description,
      interacted: false,
    };
    onAddItem(newItem);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddItemForm;
