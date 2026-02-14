const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://sanchit221206_db_user:sanchit123@cluster0.8upzzgl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
