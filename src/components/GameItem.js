import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const GameItem = ({ game }) => {
  useEffect(() => {
    console.log("Game Item:", game);
  }, [game]); // Only run this effect when the game prop changes

  return (
    <li>
      <Card>
        <Card.Header>{game.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={game.Poster} alt={game.Title} style={{ width: '200px' }} />
            <footer>{game.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </li>
  );
};

export default GameItem;