import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games';

const Read = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('https://jsonblob.com/api/jsonblob/1315379880329928704')
      .then((response) => {
        console.log(response.data); // Log the API response
        setGames(response.data); // Adjust this based on your API response structure
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