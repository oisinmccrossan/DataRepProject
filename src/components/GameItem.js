import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// GameItem component definition
const GameItem = ({ game, Reload }) => {
  // Handle delete button click
  const handleDelete = (e) => {
    e.preventDefault();
    // Send a DELETE request to the server to delete the game
    axios.delete('http://localhost:4000/api/games/' + game._id)
      .then(() => {
        // Refresh the game list after deletion
        Reload();
      })
      .catch((error) => {
        console.error("Error deleting game:", error);
      });
  };

  return (
    <li>
      <Card>
        <Card.Header>{game.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={game.poster} alt={game.title} style={{ width: '200px' }} />
            <footer>{game.year}</footer>
            <footer>Rating: {game.rating}</footer> {/* Display the rating */}
          </blockquote>
          {/* Link to the edit page for the game */}
          <Link to={"/edit/" + game._id} className="btn btn-primary">Edit</Link>
          {/* Button to delete the game */}
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </li>
  );
};

// Export the GameItem component as the default export
export default GameItem;