const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const cors = require("cors");

const serviceRoutes = require("./routes/serviceRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Corrected MongoDB connection function
const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

// Call the connectDB function
connectDB();

app.use("/api/services", serviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Fixed the template literal
