import React, { useState, useEffect } from 'react';
import ListCreation from './components/ListCreation';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the list data from the API when the component is mounted
  useEffect(() => {
    fetch('https://apis.ccbp.in/list-creation/lists')
      .then((response) => response.json())
      .then((data) => {
        setLists(data.lists); // Assuming the API gives a 'lists' key
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>List Creation App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListCreation lists={lists} setLists={setLists} />
      )}
    </div>
  );
}

export default App;
