"use strict";

// Dependencies
// ============================================================================
const express = require("express");
const morgan = require("morgan");

// Sets up the Express App
// ============================================================================
const app = express();
const PORT = process.env.PORT || 8000;

// Any requests for static files will go into the public folder
// ============================================================================
app.use(express.static("public"));

// Setting up Express.
// ============================================================================
app.use(morgan("tiny"));
app.use(express.json());

// Bringing in handlers.
// ============================================================================
// HANDLERS HERE
// ============================================================================

// This is our catch all endpoint.
// ============================================================================
app.get("*", (request, response) => {
  return response.status(404).json({
    status: 404,
    message: "Nothing to see here.",
  });
});

// Starts the Express app
// ============================================================================
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
