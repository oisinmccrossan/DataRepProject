import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games';

function Read() {
  const [data, setData] = useState([]);

  const Reload = () => {
    console.log("Reloading game data...");
    axios.get('http://localhost:4000/api/games')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  useEffect(() => {
    Reload();
  }, []);

  return (
    <div>
      <h2>Game List</h2>
      <Games games={data} ReloadData={Reload} />
    </div>
  );
}

export default Read;