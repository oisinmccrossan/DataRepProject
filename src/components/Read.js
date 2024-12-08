import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games';

const Read = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games?key=cde9904e5242e4e351329229fd2fb256559e9637')
      .then((response) => {
        setGames(response.data.results); // Adjust this based on your API response structure
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