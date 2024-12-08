import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games';

const Read = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/games')
      .then((response) => {
        console.log(response.data); // Log the API response
        setGames(response.data); // Update the state with the fetched games
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>This is my Read Component.</h2>
      <Games games={games} />
    </div>
  );
};

export default Read;