import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const GameItem = ({ game, Reload }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/games/' + game._id)
      .then(() => {
        Reload(); // Refresh the game list after deletion
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
          </blockquote>
          <Link to={"/edit/" + game._id} className="btn btn-primary">Edit</Link>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </li>
  );
};

export default GameItem;