const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const servidorHttp = http.createServer(app);
const io = new Server(servidorHttp, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

let usuariosConectados = [];
let mensagensPorUsuario = {}; // 🧠 Armazenamento em memória

io.on("connection", (socket) => {
  console.log("Usuário conectado:", socket.id);

  socket.on("usuarioNovo", (usuario) => {
    const usuarioExistente = usuariosConectados.find((u) => u.id === usuario.id);
    if (!usuarioExistente) {
      usuariosConectados.push({ ...usuario, socketId: socket.id });
      io.emit("usuarios", usuariosConectados);
    }
  });

  socket.on("mensagem", ({ mensagem, usuario, destinatarioId }) => {
    if (!mensagensPorUsuario[destinatarioId]) {
      mensagensPorUsuario[destinatarioId] = [];
    }

    const mensagemFormatada = {
      conteudo: mensagem,
      remetenteId: usuario.id,
      destinatarioId,
      hora: new Date().toISOString(),
    };

    mensagensPorUsuario[destinatarioId].push(mensagemFormatada);
    mensagensPorUsuario[usuario.id] = mensagensPorUsuario[usuario.id] || [];
    mensagensPorUsuario[usuario.id].push(mensagemFormatada); // Salva nos dois lados

    io.emit("mensagemRecebida", {
      mensagem: mensagemFormatada,
      usuario,
    });
  });

  socket.on("solicitarMensagens", (usuarioId) => {
  const mensagensFiltradas = mensagensPorUsuario[usuarioId] || [];
  socket.emit("mensagensAntigas", {
    usuarioId,
    mensagens: mensagensFiltradas
  });
});



  socket.on("disconnect", () => {
    usuariosConectados = usuariosConectados.filter((u) => u.socketId !== socket.id);
    io.emit("usuarios", usuariosConectados);
    console.log("Usuário desconectado:", socket.id);
  });
});

const PORTA = 3001;
servidorHttp.listen(PORTA, () => {
  console.log(`Servidor socket.io está ouvindo na porta ${PORTA}`);
});
