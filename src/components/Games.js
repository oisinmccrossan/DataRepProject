import React from 'react';
import GameItem from './GameItem';

function Games(props) {
  return (
    <>
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

export default Games;