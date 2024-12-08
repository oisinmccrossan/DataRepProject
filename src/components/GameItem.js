import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const GameItem = (props) => {
  useEffect(() => {
    console.log("Game Item:", props.game);
  }, [props.game]); // Only run this effect when the game prop changes

  return (
    <div>
      <Card>
        <Card.Header>{props.game.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.game.background_image} alt={props.game.name} style={{ width: '200px' }} />
            <footer>{props.game.released}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GameItem;