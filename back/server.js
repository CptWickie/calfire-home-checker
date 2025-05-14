// server.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5003;
const rateLimit = require('express-rate-limit');

// Import the shelters route
const sheltersRoute = require("./api/shelters");
const listingsRoute = require("./api/listings");


// Middleware
app.use(cors());
app.use(express.json());

//Limiter
app.use('/api/', limiter);

// Routes
app.use("/api/shelters", sheltersRoute);
app.use("/api/listings", listingsRoute);


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // max requests per IP
  message: "Too many requests. Please try again later."
});

