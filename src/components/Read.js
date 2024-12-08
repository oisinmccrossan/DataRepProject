import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games';

// Read component definition
function Read() {
  // State variable to store the game data
  const [data, setData] = useState([]);

  // Function to reload the game data from the server
  const Reload = () => {
    console.log("Reloading game data...");
    // Send a GET request to fetch the game data
    axios.get('http://localhost:4000/api/games')
      .then((response) => {
        // Update the state with the fetched data
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  // useEffect hook to reload the game data when the component mounts
  useEffect(() => {
    Reload();
  }, []);

  return (
    <div>
      <h2>Game List</h2>
      {/* Render the Games component and pass the game data and Reload function as props */}
      <Games games={data} ReloadData={Reload} />
    </div>
  );
}

// Export the Read component as the default export
export default Read;