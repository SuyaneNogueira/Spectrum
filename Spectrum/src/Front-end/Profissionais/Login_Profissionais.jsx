import React, { useState } from 'react';
import { auth, provider } from '../Firebase/Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import './Login_Profissionais.css';
import { useNavigate } from 'react-router-dom';

function Login_Profissionais() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/chat');
    } catch (error) {
      setErro('Erro ao fazer login com o Google');
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/chat');
    } catch (error) {
      setErro('Email ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="recuperar">
          Esqueceu a sua senha? <span>Redefinir senha</span>
        </div>

        <button class="google-button">
         <span class="google-g">G</span><span class="google-oogle">oogle</span>
        </button>


        <button className="login-button" onClick={handleLogin}>
          Entrar
        </button>

        {erro && <div className="erro">{erro}</div>}

        <div className="cadastro-link">
          Não possui cadastro? <span>Cadastrar</span>
        </div>
      </div>

      <div className="login-right">
        <img src="/Spectrum.png" alt="Logo Spectrum" />
      </div>
    </div>
  );
}

export default Login_Profissionais;
