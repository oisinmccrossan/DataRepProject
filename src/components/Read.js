import React, { useState, useEffect } from 'react';
import Games from './Games';

const Read = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const manualGames = [
      {
        Title: 'Terraria',
        Year: '2011',
        id: 'terraria',
        Type: 'game',
        Poster: 'https://gamescenter.pe/wp-content/uploads/2019/08/Terraria-PS4-1.png'
      },
      {
        Title: 'The Witcher 3: Wild Hunt',
        Year: '2015',
        id: 'witcher3',
        Type: 'game',
        Poster: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
      },
      {
        Title: 'Cyberpunk 2077',
        Year: '2020',
        id: 'cyberpunk2077',
        Type: 'game',
        Poster: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'
      },
      {
        Title: 'God of War',
        Year: '2018',
        id: 'godofwar',
        Type: 'game',
        Poster: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'
      }
    ];

    setGames(manualGames);
  }, []);

  return (
    <div>
      <Games games={games} />
    </div>
  );
};

export default Read;