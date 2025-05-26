import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Picker from "emoji-picker-react";
import data from '@emoji-mart/data';
import { FaArrowLeft, FaSmile, FaPaperPlane, FaTrash } from 'react-icons/fa';
import './Chat.css';

const socket = io('http://localhost:3001');

const Chat = ({ onBack }) => {
  const [contacts, setContacts] = useState(['Alice', 'Bob', 'Carol']);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [typingStatus, setTypingStatus] = useState('');
  const messageEndRef = useRef(null);

  useEffect(() => {
    socket.on('receiveMessage', ({ from, message, id }) => {
      setMessages((prev) => ({
        ...prev,
        [from]: [...(prev[from] || []), { text: message, from, id }],
      }));
    });

    socket.on('typing', (from) => {
      setTypingStatus(`${from} está digitando...`);
      setTimeout(() => setTypingStatus(''), 2000);
    });
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedContact]);

  const handleSend = () => {
    if (input.trim() && selectedContact) {
      const id = Date.now();
      socket.emit('sendMessage', {
        to: selectedContact,
        message: input,
        id,
      });
      setMessages((prev) => ({
        ...prev,
        [selectedContact]: [...(prev[selectedContact] || []), { text: input, from: 'me', id }],
      }));
      setInput('');
    }
  };

  const handleTyping = () => {
    if (selectedContact) {
      socket.emit('typing', selectedContact);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInput((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  const handleDelete = (msgId) => {
    setMessages((prev) => ({
      ...prev,
      [selectedContact]: prev[selectedContact].filter((msg) => msg.id !== msgId),
    }));
  };

  return (
    <div className="chat-container">
      <div className="navbar">
        <div className="logo">✨ Spectrum Chat</div>
        <button className="back-button" onClick={onBack}><FaArrowLeft /></button>
      </div>

      <div className="chat-body">
        <div className="sidebar">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`contact ${selectedContact === contact ? 'active' : ''}`}
              onClick={() => setSelectedContact(contact)}
            >
              {contact}
            </div>
          ))}
        </div>

        <div className="message-area">
          <div className="messages">
            {(messages[selectedContact] || []).map((msg) => (
              <div key={msg.id} className={`message ${msg.from === 'me' ? 'sent' : 'received'}`}>
                <span>{msg.text}</span>
                <button className="delete-btn" onClick={() => handleDelete(msg.id)}><FaTrash size={10} /></button>
              </div>
            ))}
            {typingStatus && <div className="typing-indicator">{typingStatus}</div>}
            <div ref={messageEndRef} />
          </div>

          <div className="input-area">
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="emoji-button">
              <FaSmile />
            </button>
            {showEmojiPicker && (
              <div className="emoji-picker">
                <Picker data={data} onEmojiSelect={handleEmojiSelect} theme="dark" />
              </div>
            )}
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleTyping}
              placeholder="Digite sua mensagem..."
              rows={1}
              style={{ resize: 'none' }}
            />
            <button onClick={handleSend}><FaPaperPlane /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
