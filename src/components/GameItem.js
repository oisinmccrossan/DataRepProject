import React from 'react';
import Card from 'react-bootstrap/Card';

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
        </Card.Body>
      </Card>
    </li>
  );
};

export default GameItem;