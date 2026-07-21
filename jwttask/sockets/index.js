export const initializeSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);


    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });
};