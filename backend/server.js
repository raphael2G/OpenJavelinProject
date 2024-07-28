// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const userDataRoutes = require('./routes/userData.js');

if (!userDataRoutes) {throw new Error("userDataRoutes is undefined");}

// Load environment variables
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());

app.use(bodyParser.json()); // Parses incoming JSON requests and puts the parsed data in req.body

// Database connection
mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => console.log('MongoDB connection established'))
  .catch(err => console.error('MongoDB connection error:', err));
  
// Basic route for testing the server
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Set up the routes
app.use('/api/userData', userDataRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

