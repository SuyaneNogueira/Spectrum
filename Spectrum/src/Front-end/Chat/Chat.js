const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Certifique-se de que esta é a URL correta do frontend
    methods: ["GET", "POST"]
  }
});

const users = new Set();

io.on("connection", (socket) => {
  console.log("Usuário conectado:", socket.id);
  users.add(socket.id);
  io.emit("update_users", Array.from(users));

  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado:", socket.id);
    users.delete(socket.id);
    io.emit("update_users", Array.from(users));
  });
});

server.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
