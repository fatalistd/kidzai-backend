const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("KidzAI Backend is Running!");
});

// Example additional route
app.get("/some-endpoint", (req, res) => {
  res.json({ message: "Hello from some-endpoint!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
