import { Server } from "socket.io";
export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    socket.on("joinChat", ({ roomId }) => {
      socket.join(roomId);
    });

    socket.on("sendMessage",({roomId,text})=>{
      io.to(roomId).emit("messageReceived",{text})
    })
  });
};

