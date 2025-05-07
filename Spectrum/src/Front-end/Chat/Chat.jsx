import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import { auth, logout } from "../Funcionarios/Login/Firebase.js";
import { useNavigate } from 'react-router-dom';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

import './Chat.css';

const socket = io('http://localhost:3001');

const Chat = () => {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [mostrarEmojis, setMostrarEmojis] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const chatRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const usuarioLogado = auth.currentUser;

    if (usuarioLogado) {
      setUsuario(usuarioLogado);
      socket.emit('entrar', usuarioLogado.displayName);
    } else {
      navigate('/');
    }

    socket.on('mensagem', (mensagemRecebida) => {
      setMensagens((prevMensagens) => [...prevMensagens, mensagemRecebida]);
    });

    return () => {
      socket.off('mensagem');
    };
  }, [navigate]);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensagens]);

  const enviarMensagem = () => {
    if (mensagem.trim()) {
      const novaMensagem = {
        usuario: usuario.displayName,
        texto: mensagem,
        foto: usuario.photoURL,
      };
      socket.emit('mensagem', novaMensagem);
      setMensagens((prevMensagens) => [...prevMensagens, novaMensagem]);
      setMensagem('');
    }
  };

  const sair = () => {
    const auth = getAuth();
    signOut(auth).then(() => navigate('/'));
  };

  const adicionarEmoji = (emoji) => {
    setMensagem(mensagem + emoji.native);
    setMostrarEmojis(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <button onClick={() => navigate(-1)}>VOLTAR</button>
      </div>

      <aside className="chat-sidebar">
        {usuario && (
          <div className="user-profile">
            <img src={usuario.photoURL} alt="Avatar" />
            <span>{usuario.displayName}</span>
          </div>
        )}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bubble-placeholder" />
        ))}
        <button onClick={sair} className="logout-button">Sair</button>
      </aside>

      <main className="chat-main">
        <div className="chat-messages">
          {mensagens.map((msg, i) => (
            <div
              key={i}
              className={`message-bubble ${msg.usuario === usuario?.displayName ? 'me' : 'other'}`}
            >
              <p>{msg.texto}</p>
            </div>
          ))}
          <div ref={chatRef} />
        </div>

        <div className="chat-input-area">
          <button onClick={() => setMostrarEmojis(!mostrarEmojis)} className="emoji-button">😊</button>
          {mostrarEmojis && (
            <Picker data={data} onEmojiSelect={adicionarEmoji} theme="light" />
          )}
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Insira sua mensagem"
          />
          <button onClick={enviarMensagem} className="send-button">➤</button>
        </div>
      </main>

      <button className="fixed-confirm-button">Com Certeza</button>
    </div>
  );
};

export default Chat;