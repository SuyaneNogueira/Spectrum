import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { auth, logout } from "../Funcionarios/Login/Firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import "react-toastify/dist/ReactToastify.css";
import "./Chat.css";

const socket = io("http://localhost:5000"); // certifique-se de que esse backend está rodando

function Chat() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const chatRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) navigate("/");
      setUser(currentUser);
    });

    socket.on("message", (msg) => {
      toast("📩 Nova mensagem!");
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("typing", () => setIsTyping(true));
    socket.on("stopTyping", () => setIsTyping(false));

    return () => {
      socket.off("message");
      socket.off("typing");
      socket.off("stopTyping");
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const msg = { text: message, user: user.displayName };
    socket.emit("message", msg);
    setMessages((prev) => [...prev, msg]);
    setMessage("");
    socket.emit("stopTyping");
  };

  const handleTyping = () => {
    socket.emit("typing");
    setTimeout(() => socket.emit("stopTyping"), 1000);
  };

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const msg = {
          user: user.displayName,
          file: {
            name: file.name,
            type: file.type,
            data: reader.result
          }
        };
        socket.emit("file", msg);
        setMessages((prev) => [...prev, msg]);
      };
      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span>{user?.displayName}</span>
        <button onClick={logout}>Sair</button>
      </div>

      <div className="chat-messages" ref={chatRef}>
        {messages.map((msg, index) =>
          msg.file ? (
            <div key={index} className="message file-message">
              <strong>{msg.user}</strong>: <a href={msg.file.data} download={msg.file.name}>{msg.file.name}</a>
            </div>
          ) : (
            <div key={index} className="message">
              <strong>{msg.user}</strong>: {msg.text}
            </div>
          )
        )}
        {isTyping && <p className="typing">✍️ Alguém está digitando...</p>}
      </div>

      <div className="chat-input">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onInput={handleTyping}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😀</button>
        <button onClick={sendMessage}>Enviar</button>
        <button onClick={() => fileInputRef.current.click()}>📎</button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => onDrop(Array.from(e.target.files))}
          multiple
          style={{ display: "none" }}
        />
        {showEmojiPicker && (
          <EmojiPicker
            onEmojiSelect={(emoji) => setMessage((prev) => prev + emoji.native)}
          />
        )}
      </div>

      <ToastContainer position="top-right" />
    </div>
  );
}

export default Chat;
