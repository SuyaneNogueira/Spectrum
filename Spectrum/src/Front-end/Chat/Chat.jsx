import React, { useState } from "react";
import { FaArrowLeft, FaSmile, FaPaperPlane } from "react-icons/fa";
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
