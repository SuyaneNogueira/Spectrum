import React, { useState } from 'react';
import { auth, provider } from '../../Firebase/Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import './Login_Profissionais.css';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../Firebase/Firebase';
import { Link } from 'react-router-dom'


function Login_Profissionais() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleGoogle = async () => {
    try {
      await login();
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

  const handleResetPassword = async () => {
  if (!email) {
    setErro('Digite seu email para redefinir a senha');
    return;
  }
  
  try {
    await resetPassword(email);
    setErro('Email de redefinição de senha enviado');
  } catch (error) {
    setErro('Erro ao enviar redefinição de senha');
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
        Esqueceu a sua senha? <span onClick={handleResetPassword} style={{ cursor: 'pointer', color: '#710634', fontWeight: 'bold' }}>Redefinir senha</span>
      </div>


        <button className="google-button" onClick={handleGoogle}>
          <span className="google-g">G</span>
          <span className="google-oogle">oogle</span>
        </button>



        <button className="login-button" onClick={handleLogin}>
          Entrar
        </button>

        {erro && <div className="erro">{erro}</div>}

        <div className="cadastro-link">
          Não possui cadastro? <Link className='link' to = "/cadastroprofissionais">Cadastrar</Link>
        </div>
      </div>

      <div className="login-right">
        <img src="/Spectrum.png" alt="Logo Spectrum" />
      </div>
    </div>
  );
}

export default Login_Profissionais;
