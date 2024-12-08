import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const GameItem = ({ game }) => {
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
        </Card.Body>
      </Card>
    </li>
  );
};

export default GameItem;