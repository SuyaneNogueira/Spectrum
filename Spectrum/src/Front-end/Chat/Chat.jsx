import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const handleSend = () => {
    if (message.trim()) {
      console.log('Mensagem enviada:', message);
      setMessage('');
    }
  };

  return (
    <>
      <div className="chat-navbar">
        <button className="voltar">Voltar</button>
        <div className="active-contact-info">
          <img src="/logo192.png" alt="Contato" />
          <span>Nome do Contato</span>
        </div>
      </div>

      <div className="chat-sidebar">
        <div className="contact selected">
          <img src="/logo192.png" alt="Contato" />
          <span>Contato 1</span>
        </div>
        <div className="contact">
          <img src="/logo192.png" alt="Contato" />
          <span>Contato 2</span>
        </div>
      </div>

      <div className="chat-body">
        <div className="message received">Olá! Tudo bem?</div>
        <div className="message sent">Tudo ótimo, e você?</div>
      </div>

      <div className="chat-input-container">
        <button
          className="chat-icon-btn"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😊
        </button>
        {showEmojiPicker && (
          <div className="emoji-picker-react">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
        <textarea
          className="chat-input"
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite uma mensagem..."
        />
        <button className="chat-icon-btn" onClick={handleSend}>
          📤
        </button>
      </div>
    </>
  );
};

export default Chat;
