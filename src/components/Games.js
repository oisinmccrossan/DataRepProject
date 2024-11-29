import React from 'react';
import GameItem from './GameItem';

const Games = ({ games }) => {
  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
};

export default Games;