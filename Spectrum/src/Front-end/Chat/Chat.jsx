<<<<<<< HEAD
import React, { useState } from "react";
import { FaArrowLeft, FaSmile, FaPaperPlane } from "react-icons/fa";
=======
import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { auth, logout } from "../Funcionarios/Login/Firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> 64c023075e7198a12c290ef06c7d3e323f248894
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="chat-container">
      {/* Navbar */}
      <div className="navbar">
        <button className="back-button"><FaArrowLeft /></button>
        <h1 className="navbar-title">Spectrum</h1>
      </div>

      {/* Conteúdo principal */}
      <div className="main-content">
        {/* Sidebar com contatos */}
        <div className="sidebar">
          <div className="contact">Contato 1</div>
          <div className="contact">Contato 2</div>
        </div>

        {/* Área de mensagens */}
        <div className="chat-area">
          <div className="messages">
            {/* Mensagens vão aqui */}
            <div className="message received">Olá! 👋</div>
            <div className="message sent">Oi! Tudo bem?</div>
          </div>

          {/* Caixa de envio */}
          <div className="input-area">
            <button className="emoji-button"><FaSmile /></button>
            <textarea
              className="chat-input"
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button className="send-button"><FaPaperPlane /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
