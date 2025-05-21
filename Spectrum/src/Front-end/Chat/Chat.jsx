import React, { useState, useRef } from 'react';
import Picker from 'emoji-picker-react';
import { Paperclip, Smile, Send } from 'lucide-react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  const handleEmojiClick = (emojiData) => {
    setText(prev => prev + emojiData.emoji);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSend = () => {
    if (text.trim() || imagePreview) {
      setMessages(prev => [...prev, { text, image: imagePreview }]);
      setText('');
      setImagePreview(null);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="sidebar">
        <div className="logo">Spectrum</div>
        {/* Contatos fixos */}
        <div className="contacts">👤 Fernanda</div>
      </div>

      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className="message">
              {msg.text && <div className="bubble">{msg.text}</div>}
              {msg.image && <img src={msg.image} alt="uploaded" className="image-bubble" />}
            </div>
          ))}
        </div>

        {showPicker && (
          <div className="emoji-picker">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        <div className="input-area">
          <div className="border-top" />

          <div className="input-row">
            <button className="icon-btn" onClick={() => setShowPicker(!showPicker)}>
              <Smile size={20} />
            </button>

            <button className="icon-btn" onClick={() => fileInputRef.current.click()}>
              <Paperclip size={20} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />

            <textarea
              className="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Digite sua mensagem..."
              rows={1}
            />

            <button className="send-btn" onClick={handleSend}>
              <Send size={20} />
            </button>
          </div>

          {imagePreview && (
            <div className="preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
