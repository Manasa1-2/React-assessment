import React, { useState } from 'react';
import ListItem from './ListItem';

function ListCreation({ lists, setLists }) {
  const [newItem, setNewItem] = useState('');

  // Handle the logic for adding a new item to the list
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newList = [...lists, { id: Date.now(), name: newItem }];
      setLists(newList);
      setNewItem(''); // Clear the input field after adding
    }
  };

  return (
    <div>
      <h2>List Creation</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter a new list item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {lists.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ListCreation;
