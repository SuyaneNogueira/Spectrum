import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import EmojiPicker from "emoji-picker-react";
import { FaSmile, FaPaperclip } from "react-icons/fa";
import { storage } from "../Funcionarios/Login/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Chat.css";

const socket = io("http://localhost:3001");

function Chat({ username, photoURL, onBackClick, users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() === "" || !selectedUser) return;

    const msg = {
      sender: username,
      receiver: selectedUser.name,
      content: message,
      type: "text",
    };

    socket.emit("send_message", msg);
    setMessages((prev) => [...prev, msg]);
    setMessage("");
  };

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !selectedUser) return;

    const fileRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);

    const fileType = file.type.startsWith("image/")
      ? "image"
      : file.type.startsWith("video/")
      ? "video"
      : "file";

    const msg = {
      sender: username,
      receiver: selectedUser.name,
      content: fileURL,
      type: fileType,
    };

    socket.emit("send_message", msg);
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div>
      <div className="chat-navbar">
        <img src="/logo.png" alt="Logo" />
        <button className="voltar" onClick={onBackClick}>Voltar</button>
      </div>

      <div className="chat-sidebar">
        {users.map((user) => (
          <div
            key={user.name}
            className="contact"
            onClick={() => setSelectedUser(user)}
          >
            <img src={user.photoURL} alt={user.name} />
            <span>{user.name}</span>
          </div>
        ))}
      </div>

      <div className="chat-body">
        {messages
          .filter(
            (msg) =>
              (msg.sender === username && msg.receiver === selectedUser?.name) ||
              (msg.sender === selectedUser?.name && msg.receiver === username)
          )
          .map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === username ? "sent" : "received"}`}
            >
              {msg.type === "text" && msg.content}
              {msg.type === "image" && (
                <img src={msg.content} alt="img" className="message-attachment" />
              )}
              {msg.type === "video" && (
                <video src={msg.content} controls className="message-attachment" />
              )}
              {msg.type === "file" && (
                <a href={msg.content} target="_blank" rel="noreferrer">Arquivo</a>
              )}
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>

      {showEmojiPicker && (
        <div className="emoji-picker-react">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}

      <div className="chat-input-container">
        <label htmlFor="file-upload">
          <FaPaperclip className="chat-icon-btn" />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />

        <FaSmile
          className="chat-icon-btn"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        />

        <textarea
          className="chat-input"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          style={{ maxHeight: "200px", overflow: "auto" }}
        />

        <button className="voltar" onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Chat;
