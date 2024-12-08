const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

// MongoDB connection string
const dbConnectionString = 'mongodb+srv://admin:admin@cluster0.fwivz.mongodb.net/';

// Connect to MongoDB
mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Define schema and data model for games
const gameSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String,
  rating: String // Include the rating field in the schema
});

const Game = mongoose.model('Game', gameSchema);

// Root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Greeting route
app.get('/hello/:name/:surname', (req, res) => {
    const { name, surname } = req.params;
    res.send(`Hello ${name} ${surname}`);
});

// Retrieve all games
app.get('/api/games', async (req, res) => {
    try {
        const games = await Game.find({});
        res.json(games);
    } catch (error) {
        res.status(500).send('Something went wrong');
    }
});

// Add a new game
app.post('/api/games', async (req, res) => {
  const { title, year, poster, rating } = req.body;

  const newGame = new Game({ title, year, poster, rating });
  await newGame.save();

  res.status(201).json({ message: 'Game created successfully', game: newGame });
});

// Retrieve a game by ID
app.get('/api/games/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).send('Game not found');
    }
    res.send(game);
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
});

// Update a game by ID
app.put('/api/games/:id', async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) {
      return res.status(404).send('Game not found');
    }
    res.send(game);
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
});

// Delete a game by ID
app.delete('/api/games/:id', async (req, res) => {
  try {
    console.log('Deleting game with ID:', req.params.id);
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).send('Game not found');
    }
    res.status(200).send({ message: "Game deleted successfully", game });
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});