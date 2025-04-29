import { useEffect, useState, useMemo, useRef } from "react";
import { io } from "socket.io-client";
import { auth, logout } from "../Funcionarios/Login/Firebase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Chat.css";

const socket = io("http://localhost:3001", { transports: ["websocket"] });

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const messageEndRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else navigate("/login");
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => socket.off("receiveMessage");
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const messageData = {
        user: user.displayName,
        avatar: user.photoURL,
        content: input,
        isOwnMessage: true,
      };
      setMessages((prev) => [...prev, messageData]);
      socket.emit("sendMessage", messageData);
      setInput("");
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-sidebar">
        {user && (
          <div className="user-profile">
            <img src={user.photoURL} alt="Avatar" />
            <span>{user.displayName}</span>
            <p>Chat Ativo</p>
            <button onClick={logout}>Sair</button>
          </div>
        )}
      </div>

      <div className="chat-main">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`message-bubble ${msg.user === user?.displayName ? "own" : "other"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.user !== user?.displayName && (
                <img src={msg.avatar} alt="avatar" className="avatar" />
              )}
              <p>{msg.content}</p>
            </motion.div>
          ))}
          <div ref={messageEndRef} />
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Insira sua mensagem"
          />
          <button onClick={sendMessage}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;