const express = require('express');
const cors = require('cors');

// require('dotenv').config({ path: './.env' });

const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

// Call fn to connect to MongoDB Atlas cluster
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log('Server is Initializing!');
});

app.get('/', (req, res) => {
  res.send('Touchdown bitches!!!!');
});
