import express from "express";
import { connectDB, con } from "./helper_db.js"; //  helper file ko import kiaa 

const app = express();
app.use(express.json());

// Database connect karein
await connectDB();



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});