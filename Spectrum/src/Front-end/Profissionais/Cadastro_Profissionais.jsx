import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from "../Funcionarios/Login/Firebase";
import './Cadastro_Profissionais.css';

function Cadastro_Profissionais() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(provider);
      navigate('/cadastro-profissionais-2');
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  };

  const handleNext = () => {
    if (nome && email && senha && aceitouTermos) {
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('senha', senha);
      navigate('/cadastro-profissionais-2');
    } else {
      alert('Preencha todos os campos e aceite os termos.');
    }
  };

  return (
    <div className="cadastro-container">
      <div className="form-section">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button className="google-button" onClick={handleGoogleLogin}>
          Entrar com Google
        </button>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={aceitouTermos}
            onChange={() => setAceitouTermos(!aceitouTermos)}
          />
          Li e Aceito os Termos de Uso
        </label>
        <button className="next-button" onClick={handleNext}>
          Próximo
        </button>
        <p className="login-link">
          Já possui uma conta? <a href="/login">Entrar</a>
        </p>
      </div>
      <div className="image-section" />
    </div>
  );
}

export default Cadastro_Profissionais;