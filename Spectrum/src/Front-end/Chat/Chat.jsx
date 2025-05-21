import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import io from "socket.io-client";
import { auth } from "../Funcionarios/Login/Firebase"; // ✅ Import corrigido

const socket = io("http://localhost:3001");

export default function Chat() {
  const user = auth.currentUser;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([
    { id: "contato1", name: "Bianca", avatar: "/Bianca-Kiers.png" },
    { id: "contato2", name: "João", avatar: "/Joao-Antonio.png" },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("typing", (contactId) => {
      if (selectedContact && contactId === selectedContact.id) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 2000);
      }
    });

    return () => {
      socket.off("message");
      socket.off("typing");
    };
  }, [selectedContact]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() && selectedContact) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: user?.uid || "anon",
        receiver: selectedContact.id,
      };
      socket.emit("message", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  const handleTyping = () => {
    if (selectedContact) {
      socket.emit("typing", selectedContact.id);
    }
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleBackClick = () => {
    setSelectedContact(null);
  };

  return (
    <div className="chat-wrapper">
      <div className="navbar">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        {selectedContact && (
          <button className="back-btn" onClick={handleBackClick}>
            ← Voltar
          </button>
        )}
      </div>

      <div className="main-content">
        <div className="sidebar">
          <div className="contacts">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`contact ${
                  selectedContact?.id === contact.id ? "selected" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <img src={contact.avatar} className="contact-img" alt="" />
                <div className="contact-name">{contact.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-container">
          {selectedContact ? (
            <>
              <div className="contact-profile">
                <img
                  src={selectedContact.avatar}
                  className="profile-img"
                  alt=""
                />
                <div className="profile-name">{selectedContact.name}</div>
              </div>

              {isTyping && (
                <div className="typing-indicator">
                  {selectedContact.name} está digitando...
                </div>
              )}

              <div className="messages">
                {messages
                  .filter(
                    (msg) =>
                      (msg.sender === user?.uid &&
                        msg.receiver === selectedContact.id) ||
                      (msg.sender === selectedContact.id &&
                        msg.receiver === user?.uid)
                  )
                  .map((msg) => (
                    <div
                      key={msg.id}
                      className={`message ${
                        msg.sender === user?.uid ? "sent" : "received"
                      }`}
                    >
                      <div className="bubble">
                        {msg.text}
                        {msg.sender === user?.uid && (
                          <button
                            className="delete-btn"
                            onClick={() => deleteMessage(msg.id)}
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="input-area">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleTyping}
                />
                <button onClick={sendMessage}>Enviar</button>
              </div>
            </>
          ) : (
            <div className="placeholder">
              Selecione um contato para iniciar a conversa
            </div>
          )}
        </div>
      </div>
    </div>
  );
}