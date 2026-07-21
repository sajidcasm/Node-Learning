// import http from "http";
// import { Server } from "socket.io";
// import app from "./app.js";
// import dotenv from "dotenv";
// dotenv.config();

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("User Connected :", socket.id);

//   socket.on("disconnect", () => {
//     console.log("Disconnected :", socket.id);
//   });
// });

// server.listen(5000, () => {
//   console.log("Server Running");
// });


import http from "http";
// import http
import dotenv from "dotenv";
import { Server } from "socket.io";
// library server 

import app from "./app.js";
import sequelize from "./config/db.js";

dotenv.config();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Socket Connection
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

// Database Connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error(error);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});