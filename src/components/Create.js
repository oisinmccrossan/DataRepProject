import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  // State variables to manage the form inputs
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState(''); // New state variable for rating

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form input values
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}, Rating: ${rating}`);
    
    // Create a game object with the form input values
    const game = {
      title: title,
      year: year,
      poster: poster,
      rating: rating // Include the rating in the game object
    };
    
    // Send a POST request to add the new game
    axios.post('http://localhost:4000/api/games', game)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  }

  // Render the create form
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Game Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Add Game Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Add Game Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Add Game Rating: </label>
          <input
            type="text"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Game" />
      </form>
    </div>
  );
}

export default Create;