import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { FaRegSmile, FaPaperPlane, FaPaperclip } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import "./Chat.css";

const socket = io("http://localhost:3001");

const contacts = [
  { name: "João Antônio", image: "/Joao-Antonio.png", id: "joao" },
  { name: "Thaís Agostinho", image: "/Thais-Agostinho.png", id: "thais" },
  { name: "Bianca Kiers", image: "/Bianca-Kiers.png", id: "bianca" },
];

export default function Chat() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputRef = useRef();
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("typing", () => {
      setTyping(true);
      setTimeout(() => setTyping(false), 2000);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("typing");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!message && !fileInputRef.current.files[0]) return;
    const newMsg = {
      sender: "me",
      text: message,
      file: fileInputRef.current?.files[0] || null,
      fileURL: "",
      fileType: "",
    };

    if (newMsg.file) {
      const url = URL.createObjectURL(newMsg.file);
      newMsg.fileURL = url;
      newMsg.fileType = newMsg.file.type;
    }

    socket.emit("sendMessage", newMsg);
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileSend = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileMsg = {
        sender: "me",
        file: file,
        fileURL: URL.createObjectURL(file),
        fileType: file.type,
      };
      socket.emit("sendMessage", fileMsg);
      setMessages((prev) => [...prev, fileMsg]);
    }
  };

  const handleDeleteMessage = (index) => {
    setMessages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Navbar */}
      <div className="chat-navbar">
        <img src="/Spectrum.png" alt="Logo Spectrum" />
        <button className="voltar" onClick={() => navigate("/")}>Voltar</button>
      </div>

      {/* Sidebar */}
      <div className="chat-sidebar">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="contact"
            onClick={() => setSelectedContact(contact)}
          >
            <img src={contact.image} alt={contact.name} />
            <span>{contact.name}</span>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div className="chat-body">
        {selectedContact ? (
          <>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "me" ? "message sent" : "message received"}
              >
                {msg.text && <p>{msg.text}</p>}

                {msg.fileURL && msg.fileType?.startsWith("image") && (
                  <img
                    src={msg.fileURL}
                    alt="imagem"
                    className="message-attachment"
                  />
                )}
                {msg.fileURL && msg.fileType?.startsWith("video") && (
                  <video
                    controls
                    className="message-attachment"
                    src={msg.fileURL}
                  />
                )}
                {msg.fileURL &&
                  !msg.fileType?.startsWith("image") &&
                  !msg.fileType?.startsWith("video") && (
                    <a
                      href={msg.fileURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="message-attachment"
                    >
                      📄 Documento
                    </a>
                  )}

                <button onClick={() => handleDeleteMessage(index)}>🗑️</button>
              </div>
            ))}

            {typing && <div className="typing-indicator">Digitando...</div>}
            <div ref={messagesEndRef} />
          </>
        ) : (
          <p style={{ marginTop: "20px" }}>Selecione um contato para iniciar a conversa.</p>
        )}
      </div>

      {/* Barra de envio */}
      {selectedContact && (
        <div className="chat-input-container">
          <button className="chat-icon-btn" onClick={() => setShowEmoji(!showEmoji)}>
            <FaRegSmile />
          </button>

          {showEmoji && (
            <div className="emoji-picker-react">
              <EmojiPicker
                onEmojiClick={(e) => setMessage((prev) => prev + e.emoji)}
                theme="light"
              />
            </div>
          )}

          <textarea
            className="chat-input"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              socket.emit("typing");
            }}
            placeholder="Digite sua mensagem..."
          />

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSend}
            style={{ display: "none" }}
          />

          <button className="chat-icon-btn" onClick={() => fileInputRef.current.click()}>
            <FaPaperclip />
          </button>

          <button className="chat-icon-btn" onClick={handleSendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      )}
    </div>
  );
}
