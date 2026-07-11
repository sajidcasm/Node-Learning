import pg from "pg";

const { Client } = pg;

// 1. 'con' ko function ke baahar banayein aur export karein
export const con = new Client({
  user: "postgres", 
  host: "localhost",
  database: "demopost",
  port: 5432,
  password: "sajidali",
});

// 2. Sirf connect karne ke liye yeh function rakhein
export const connectDB = async () => {
  try {
    await con.connect();
    console.log('executing file of helper db connection !')
    console.log("Connected to database DEMOPOST successfully!");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Agar DB connect na ho toh app ko rok do
  }
};