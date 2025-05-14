<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { EmojiSmile, Send, Paperclip } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import './Chat.css';

const socket = io('http://localhost:5000'); // Altere se necessário
=======
import React, { useState } from "react";
import { FaArrowLeft, FaSmile, FaPaperPlane } from "react-icons/fa";
import "./Chat.css";
>>>>>>> bcfc4e9c28bb73c8434ff864eecc25682aaf593d

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== '' || selectedFile) {
      const msgData = {
        text: message,
        file: selectedFile,
        from: 'me',
      };
      socket.emit('chat message', msgData);
      setMessages((prev) => [...prev, msgData]);
      setMessage('');
      setSelectedFile(null);
    }
  };

  const handleEmojiSelect = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div className="user-profile">
          <img src="/user.jpg" alt="User" className="avatar" />
          <p className="user-name">Pietro Brito<br /><span className="status">Chat: Ativo</span></p>
        </div>
        <div className="contact-buttons">
          <div className="contact" />
          <div className="contact" />
          <div className="contact" />
        </div>
      </div>

      <div className="chat-main">
        <div className="navbar">
          <button className="back-btn">VOLTAR</button>
        </div>

        <div className="messages">
          {messages.map((msg, index) => (
            <div className={`message-bubble ${msg.from === 'me' ? 'sent' : 'received'}`} key={index}>
              {msg.text && <p>{msg.text}</p>}
              {msg.file && (
                <div className="file-preview">
                  {msg.file.type.startsWith('image') ? (
                    <img src={URL.createObjectURL(msg.file)} alt="enviado" />
                  ) : (
                    <video controls>
                      <source src={URL.createObjectURL(msg.file)} type={msg.file.type} />
                    </video>
                  )}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="message-input-wrapper">
          <div className="emoji-section">
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="emoji-btn">
              <EmojiSmile size={20} />
            </button>
            {showEmojiPicker && (
              <div className="emoji-picker">
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </div>
            )}
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="message-input"
            placeholder="Insert Text"
          />

          <label className="file-btn">
            <Paperclip size={18} />
            <input type="file" onChange={handleFileChange} hidden />
          </label>

          <button onClick={handleSendMessage} className="send-btn">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
