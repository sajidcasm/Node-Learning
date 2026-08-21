import "dotenv/config";

import express from "express";
import sequelize from "./config/db.js";
import "./models/associations.js";
import authRoutes from "./routes/authRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Database Connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);
  }
};

connectDB();

app.use("/api", authRoutes);
app.use("/api", publicRoutes);

// Start Server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

export default app;