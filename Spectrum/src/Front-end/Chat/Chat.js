const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let users = [];

io.on("connection", (socket) => {
  socket.on("join", (user) => {
    users.push({ id: socket.id, name: user });
    io.emit("users", users);
  });

  socket.on("message", (message) => {
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    users = users.filter((user) => user.id !== socket.id);
    io.emit("users", users);
  });
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
