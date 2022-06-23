require('dotenv').config()
const express = require('express');
const app = express();
const {PORT} = process.env;
const path = require('path');

// Connecting server
const cors = require('cors');

app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
const controllers = require("./controller");

// Requests
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/recipes', controllers.recipe);

// Connect to client
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
