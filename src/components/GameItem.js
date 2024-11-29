import React from 'react';

const GameItem = ({ game }) => {
  return (
    <li key={game.id}>
      <h2>{game.Title} ({game.Year})</h2>
      <img src={game.Poster} alt={game.Title} style={{ width: '200px' }} />
    </li>
  );
};

export default GameItem;