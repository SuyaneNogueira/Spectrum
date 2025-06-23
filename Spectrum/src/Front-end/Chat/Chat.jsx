import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';
import EmojiPicker from 'emoji-picker-react';
import { FaPaperPlane, FaPaperclip, FaArrowLeft } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


const socket = io('http://localhost:3001');

const contatosFixos = [
  {
    id: 1,
    nome: 'João Antônio',
    foto: '/Joao-Antonio.png',
  },
  {
    id: 2,
    nome: 'Bianca Kiers',
    foto: '/Bianca-Kiers.png',
  },
  {
    id: 3,
    nome: 'Thais Agostinho',
    foto: '/Thais-Agostinho.png',
  }
];

function Chat() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState({});
  const [mostrarEmojiPicker, setMostrarEmojiPicker] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(contatosFixos[0]);
  const [mostrarContatos, setMostrarContatos] = useState(true);
  const [digitando, setDigitando] = useState(false);
  const chatRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const origem = location.state?.from;


  useEffect(() => {
    socket.on('mensagem', ({ mensagem, usuario }) => {
      setMensagens(prev => ({
        ...prev,
        [usuario.id]: [...(prev[usuario.id] || []), mensagem]
      }));
    });

    return () => socket.off('mensagem');
  }, []);

  useEffect(() => {
    socket.on('mensagensAntigas', ({ usuarioId, mensagens: msgs }) => {
  setMensagens(prev => ({
    ...prev,
    [usuarioId]: msgs
  }));
});


    socket.on('mensagemRecebida', ({ mensagem, usuario }) => {
      setMensagens(prev => ({
        ...prev,
        [usuario.id]: [...(prev[usuario.id] || []), mensagem]
      }));
    });

    return () => {
      socket.off('mensagensAntigas');
      socket.off('mensagemRecebida');
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [mensagens, usuarioSelecionado]);

  const enviarMensagem = () => {
  if (!mensagem.trim()) return;

  const novaMensagem = {
    texto: mensagem,
    remetente: 'eu',
    tipo: 'texto'
  };

  socket.emit('mensagem', {
    mensagem: novaMensagem,
    usuario: { id: 'eu' }, // ou qualquer info do remetente real
    destinatarioId: usuarioSelecionado.id
  });

  setMensagens(prev => ({
    ...prev,
    [usuarioSelecionado.id]: [...(prev[usuarioSelecionado.id] || []), novaMensagem]
  }));

  setMensagem('');
  setDigitando(false);
  setMostrarEmojiPicker(false);
};

  const adicionarEmoji = (emojiData) => {
    setMensagem(prev => prev + emojiData.emoji);
  };

  const selecionarContato = (contato) => {
    setUsuarioSelecionado(contato);
    setMostrarContatos(false);
    socket.emit("solicitarMensagens", contato.id); 
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);
    let tipo = 'arquivo';

    if (file.type.startsWith('image/')) {
      tipo = 'imagem';
    } else if (file.type.startsWith('video/')) {
      tipo = 'video';
    }

    const novaMensagem = {
      texto: fileURL,
      nomeArquivo: file.name,
      tipo,
      remetente: 'eu'
    };

    socket.emit('mensagem', {
    mensagem: novaMensagem,
    usuario: {id: 1, nome: 'João Antônio' }, // ou o real remetente logado
    destinatarioId: usuarioSelecionado.id
  });


    setMensagens(prev => ({
      ...prev,
      [usuarioSelecionado.id]: [...(prev[usuarioSelecionado.id] || []), novaMensagem]
    }));
  };

  const renderizarMensagem = (msg, index) => {
    const classe = `mensagemItem ${msg.remetente === 'eu' ? 'enviada' : 'recebida'}`;
    if (msg.tipo === 'imagem') {
      return (
        <div key={index} className={classe}>
          <img src={msg.texto} alt="imagem enviada" className="imagemMensagem" />
        </div>
      );
    }
    if (msg.tipo === 'video') {
      return (
        <div key={index} className={classe}>
          <video src={msg.texto} controls className="videoMensagem" />
        </div>
      );
    }
    if (msg.tipo === 'arquivo') {
      return (
        <div key={index} className={classe}>
          <a href={msg.texto} download={msg.nomeArquivo} target="_blank" rel="noreferrer">
            {msg.nomeArquivo}
          </a>
        </div>
      );
    }
    return <div key={index} className={classe}>{msg.texto}</div>;
  };

  return (
    <div className="chatContainer">
      <div className="navbarChat">
        {!mostrarContatos && (
          <FaArrowLeft className="voltarIcone" onClick={() => setMostrarContatos(true)} />
        )}

        <img src="/Spectrum.png" alt="Logo" className="logoNavbar" />

        {!mostrarContatos && (
          <div className="usuarioAtivoInfo">
            <img src={usuarioSelecionado.foto} alt={usuarioSelecionado.nome} className="avatarNavbar" />
            <span className="nomeNavbar">{usuarioSelecionado.nome}</span>
          </div>
        )}

        {mostrarContatos && (
         <button
         className="botaoVoltar"
         onClick={() => navigate(origem === 'telaitea' ? '/telaitea' : '/telainicialprofissionais')}
       >
         Voltar
       </button>
       
        )}
      </div>

      <div className="conteudoChat">
        {mostrarContatos ? (
          <div className="listaContatos">
            {contatosFixos.map(contato => (
              <div
                key={contato.id}
                className={`contatoItem ${usuarioSelecionado.id === contato.id ? 'ativo' : ''}`}
                onClick={() => selecionarContato(contato)}
              >
                <img src={contato.foto} alt={contato.nome} />
                <span>{contato.nome}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="mensagensArea fadeIn">
            <div className="mensagensBox" ref={chatRef}>
              {(mensagens[usuarioSelecionado.id] || []).map(renderizarMensagem)}
            </div>

            <div className="caixaEnvio">
              <div className="emojiWrapper">
                <BsEmojiSmile
                  className="iconeEmoji"
                  onClick={() => setMostrarEmojiPicker(!mostrarEmojiPicker)}
                />
                {mostrarEmojiPicker && (
                  <div className="emojiPickerContainer">
                    <EmojiPicker onEmojiClick={adicionarEmoji} />
                  </div>
                )}
              </div>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                onFocus={() => setDigitando(true)}
                placeholder="Digite sua mensagem..."
                rows={1}
                className="inputMensagem"
              />
              <label htmlFor="fileInput" className="iconeAnexo">
                <FaPaperclip />
              </label>
              <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileUpload} />
              <button className="botaoEnviar" onClick={enviarMensagem}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
