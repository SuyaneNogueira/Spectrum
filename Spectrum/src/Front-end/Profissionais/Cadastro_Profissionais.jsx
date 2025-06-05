import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { auth, provider, signInWithPopup } from '../Funcionarios/Login/Firebase';
import './Cadastro_Profissionais.css';

function Cadastro_Profissionais() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Login Google:', result.user);
      navigate('/Cadastro_Profissionais_Dois');
    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (!termosAceitos) {
      setErro('Você precisa aceitar os termos de uso.');
      return;
    }

    setErro('');
    navigate('/Cadastro_Profissionais_Dois');
  };

  return (
    <div className="cadastro-container">
      {/* Lado esquerdo */}
      <div className="cadastro-form-section">
        <div className='h1-do-profissional-legal'>
            <h1>Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit} className="cadastro-form">
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

          <button type="button" className="google-button" onClick={handleGoogleLogin}>
            <span className="google-g">G</span><span className="google-oogle">oogle</span>
          </button>

          <div className="termos-container" onClick={() => setTermosAceitos(!termosAceitos)}>
            <div className={`termo-circulo ${termosAceitos ? 'ativo' : ''}`} />
            <span >Li e aceito os <a className='container-termos' href="/termos" target="_blank" rel="noopener noreferrer">Termos de Uso</a></span>
          </div>

          {erro && <div className="erro-mensagem">{erro}</div>}

          <button type="submit" className="btn-proximo" href="/Cadastro_Profissionais_Dois">Próximo</button>

          <div className="login-link">
            Já possui uma conta? <a href="/Login_Profissionais">Entrar</a>
          </div>
        </form>
      </div>

      {/* Lado direito */}
      <div className="cadastro-imagem-section">
        <img src="/Spectrum.png" alt="Ilustração cérebro" />
      </div>
    </div>
  );
}

export default Cadastro_Profissionais;
