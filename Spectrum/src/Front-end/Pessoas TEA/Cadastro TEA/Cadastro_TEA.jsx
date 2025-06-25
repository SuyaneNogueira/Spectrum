import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../Firebase/Firebase';
import './Cadastro_TEA.css';
import Modal_Termos_de_Uso from '../../Profissionais/Modal Termos de Uso/Modal_Termos_de_Uso';

function Cadastro_TEA() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [termosAbertos, setTermosAbertos] = useState(false);
  const navigate = useNavigate();

  const salvarLocalmente = (usuario) => {
    const listaSalva = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    const novaLista = [...listaSalva, usuario];
    localStorage.setItem('usuariosTEA', JSON.stringify(novaLista));
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const usuarioGoogle = {
        id: Date.now(),
        nome: result.user.displayName || '',
        email: result.user.email || '',
        senha: 'autenticado_google',
      };
      salvarLocalmente(usuarioGoogle);
      navigate('/FormularioCadastroTea');
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  };

 const handleSalvar = async (e) => {
  if (!nome || !email || !senha) {
    e.preventDefault();
    setErro('Preencha todos os campos.');
    return;
  }

  if (!termosAceitos) {
    e.preventDefault();
    setErro('Você precisa aceitar os termos de uso.');
    return;
  }

  const novoUsuario = {
    id: Date.now(),
    nome,
    email,
    senha,
  };

  // Salva localmente
  salvarLocalmente(novoUsuario);

  // Futuramente: salva no MySQL via API
  // await salvarNoBackend(novoUsuario);

  setErro('');
};

// Preparado para o back-end (MySQL)
const salvarNoBackend = async (usuario) => {
  try {
    const response = await fetch('http://localhost:3001/usuariosTEA', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar no banco de dados');
    }

    console.log('Usuário salvo no backend com sucesso');
  } catch (error) {
    console.error('Erro ao salvar no back-end:', error);
  }
};

  return (
    <div className="cadastro-container-Tea">
      <div className="cadastro-form-section-do-Tea">
        <div className="h1-do-cadastro-legal-do-Tea">
          <h1>Cadastro</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="cadastro-form-do-Tea">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="button" className="google-button-do-Tea" onClick={handleGoogleLogin}>
            <span className="google-g-do-Tea">G</span>
            <span className="google-oogle">oogle</span>
          </button>

          {/* Checkbox dos termos */}
          <div>
            <div className="input-check-test-Tea">
              <div className="ajustes-check-Tea">
                <input
                  type="checkbox"
                  id="termos"
                  checked={termosAceitos}
                  onChange={() => setTermosAceitos(!termosAceitos)}
                  style={{ marginRight: '8px' }}
                />
              </div>
              <label htmlFor="termos" style={{ fontSize: '14px' }}>
                Li e aceito os{' '}
                <span
                  onClick={() => setTermosAbertos(true)}
                  style={{ color: '#710634', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Termos de Uso
                </span>.
              </label>
            </div>
          </div>

          {erro && <div className="erro-mensagem-do-Tea">{erro}</div>}

          <Link
            to="/fomulariocadastroum"
            className="btn-proximo-do-Tea"
            onClick={handleSalvar}
            style={{
              display: 'inline-block',
              textAlign: 'center',
              opacity: termosAceitos ? 1 : 0.6,
              pointerEvents: termosAceitos ? 'auto' : 'none',
            }}
          >
            Próximo
          </Link>

          <div className="login-link-do-Tea">
            Já possui uma conta? <Link to="/loginprofissionais">Entrar</Link>
          </div>
        </form>
      </div>

      <div className="cadastro-imagem-section-do-Tea">
        <img src="/Spectrum.png" alt="Logo" />
      </div>

      <Modal_Termos_de_Uso isOpen={termosAbertos} onClose={() => setTermosAbertos(false)} />
    </div>
  );
}

export default Cadastro_TEA;
