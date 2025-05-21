const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

// Middleware para permitir requisições de outras origens (CORS)
app.use(cors());

// Instância do Socket.io com permissões de CORS liberadas
const io = new Server(server, {
  cors: {
    origin: "*", // Em produção, ideal restringir para o domínio real
    methods: ["GET", "POST"]
  }
});

let users = [];

// Evento de conexão
io.on("connection", (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  // Usuário entra no chat
  socket.on("join", (user) => {
    users.push({ id: socket.id, name: user });
    io.emit("users", users); // Envia a lista atualizada para todos
  });

  // Mensagem recebida e repassada
  socket.on("message", (message) => {
    io.emit("message", message);
  });

  // Usuário desconecta
  socket.on("disconnect", () => {
    users = users.filter((user) => user.id !== socket.id);
    io.emit("users", users); // Atualiza lista para todos
    console.log(`Usuário desconectado: ${socket.id}`);
  });
});

// Inicializa o servidor
server.listen(5000, () => {
  console.log("Servidor rodando na porta 5000 🚀");
});
