import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { auth, provider, signInWithPopup } from '../Funcionarios/Login/Firebase';
import './Cadastro_interesse.css';

function Cadastro_interesse() {
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
    <div className="cadastro-container_interesse">
      {/* Lado esquerdo */}
      <div className="cadastro-form-section_interesse">
      <div className='h1-do-profissional_interesse'>
            <h1>Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit} className="cadastro-form_interesse">
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

          <button type="button" className="google-button_interesse" onClick={handleGoogleLogin}>
            <span className="google-g_interesse">G</span><span className="google-oogle_interesse">oogle</span>
          </button>

          <div className="termos-container_interesse" onClick={() => setTermosAceitos(!termosAceitos)}>
            <div className={`termo-circulo_interesse ${termosAceitos ? 'ativo' : ''}`} />
            <span >Li e aceito os <Link to="/termos" className='container-termos_interesse' >Termos de Uso</Link></span>
          </div>

          {erro && <div className="erro-mensagem_interesse">{erro}</div>}

          <button type="submit" className="btn-proximo_interesse" href="/Cadastro_interesse_dois">Próximo</button>

          <div className="login-link_interesse">
            Já possui uma conta? <a to="/Login_Profissionais">Entrar</a>
          </div>
        </form>
      </div>

      {/* Lado direito */}
      <div className="cadastro-imagem-section_interesse">
        <img src="/Spectrum.png" alt="Ilustração cérebro" />
      </div>
    </div>
  );
}

export default Cadastro_interesse;
