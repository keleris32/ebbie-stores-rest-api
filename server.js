require('dotenv').config({ path: './.env' });

const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const waistApparelRoute = require('./routes/waistApparelRoute');
const tightsApparelRoute = require('./routes/tightsApparelRoute');
const padApparelRoute = require('./routes/padApparelRoute');

// Call fn to connect to MongoDB Atlas cluster
connectDB();

const app = express();

app.use(cors()); // Cross-Origin-Resource-Sharing
app.use(express.json()); // Parse to JSON

// Routes
app.use('/api/apparel/waist-trainers', waistApparelRoute); // Waist Apparel route
app.use('/api/apparel/butt-lifters', tightsApparelRoute); // Tights Apparel route
app.use('/api/apparel/arm-shapers', padApparelRoute); // Pad Apparel route

app.listen(port, () => {
  console.log(`Server is running on port: ${port}!`);
});
