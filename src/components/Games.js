import React from 'react';
import GameItem from './GameItem';

// Games component definition
function Games(props) {
  return (
    <>
      {/* Map over the games array and render a GameItem component for each game */}
      {props.games.map((game) => (
        <GameItem
          game={game}
          key={game._id}
          Reload={props.ReloadData}
        />
      ))}
    </>
  );
}

// Export the Games component as the default export
export default Games;