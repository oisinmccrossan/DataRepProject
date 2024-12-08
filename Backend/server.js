const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/hello/:name/:surname', (req, res) => {
    const { name, surname } = req.params;
    res.send(`Hello ${name} ${surname}`);
});

app.get('/api/games', (req, res) => {
    const games = [
        {
            "Title": "Terraria",
            "Year": "2011",
            "id": "terraria",
            "Type": "game",
            "Poster": "https://gamescenter.pe/wp-content/uploads/2019/08/Terraria-PS4-1.png"
        },
        {
            "Title": "The Witcher 3: Wild Hunt",
            "Year": "2015",
            "id": "witcher3",
            "Type": "game",
            "Poster": "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
        },
        {
            "Title": "Cyberpunk 2077",
            "Year": "2020",
            "id": "cyberpunk2077",
            "Type": "game",
            "Poster": "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
        },
        {
            "Title": "God of War",
            "Year": "2018",
            "id": "godofwar",
            "Type": "game",
            "Poster": "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
        }
    ];
    res.status(201).json({ myGames: games });
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});