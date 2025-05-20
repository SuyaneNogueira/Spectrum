<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Paperclip, Smile, Send } from "lucide-react";
import { motion } from "framer-motion";
import "./Chat.css";
=======
import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
// import { EmojiSmile, Send, Paperclip } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import './Chat.css';
>>>>>>> 0b1e367dbde817408207eda9a6fdf12addce6e53

const socket = io("http://localhost:5000");

const SpectrumLogo = "/Spectrum.png";
const Joao = "/Joao-Antonio.png"; // Também do public

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => socket.off("chat message");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("chat message", message);
      setMessages((prev) => [...prev, message]);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prev) => prev + emoji.native);
  };

  return (
    <div className="chat-container">
      {/* Sidebar */}
      <div className="chat-sidebar">
        <img src={SpectrumLogo} alt="Logo" className="chat-logo" />
        <div className="contact">
          <img src={Joao} alt="João" className="avatar" />
          <span className="contact-name">João Antônio</span>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-main">
        <div className="messages">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className="message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chat-input-container">
          <button
            className="emoji-button"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          >
            <Smile size={22} />
          </button>

          {showEmojiPicker && (
            <div className="emoji-picker-popup">
              {/* Emoji picker manual (sem dependência) */}
              {["😀", "😂", "😍", "😎", "😢", "👍", "🔥", "❤️", "🎉"].map((e) => (
                <span
                  key={e}
                  className="emoji"
                  onClick={() => handleEmojiClick({ native: e })}
                >
                  {e}
                </span>
              ))}
            </div>
          )}

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
            rows={1}
            className="chat-textarea"
          />

          <button className="send-button" onClick={handleSendMessage}>
            <Send size={22} />
          </button>

          <button className="file-button">
            <Paperclip size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
