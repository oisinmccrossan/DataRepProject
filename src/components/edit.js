import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
  // Get the game ID from the URL parameters
  let { id } = useParams();

  // State variables to manage the form inputs
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Fetch the game data when the component mounts or when the ID changes
  useEffect(() => {
    axios.get('http://localhost:4000/api/games/' + id)
      .then((response) => {
        // Set the form inputs with the fetched game data
        setTitle(response.data.title);
        setYear(response.data.year);
        setPoster(response.data.poster);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create an updated game object with the form input values
    const updatedGame = { id, title, year, poster };
    
    // Send a PUT request to update the game
    axios.put('http://localhost:4000/api/games/' + id, updatedGame)
      .then((res) => {
        console.log(res.data);
        // Navigate back to the read page after successful update
        navigate('/read');
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Game Title: </label>
          <input type="text" 
            className="form-control" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Release Year: </label>
          <input type="text" 
            className="form-control" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Poster URL: </label>
          <input type="text" 
            className="form-control" 
            value={poster} 
            onChange={(e) => setPoster(e.target.value)} />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Game" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}