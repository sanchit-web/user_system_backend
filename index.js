require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db")
 
const cors = require("cors");

const app = express();

// CONNECT DATABASE
connectDB();


// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

});



