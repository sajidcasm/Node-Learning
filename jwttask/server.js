


import http from "http";
// import http
import dotenv from "dotenv";
import { Server } from "socket.io";
// library server 

import app from "./app.js";

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



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});