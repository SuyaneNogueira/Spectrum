import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../Firebase/Firebase';
import './Cadastro_TEA.css';
import { Link } from 'react-router-dom';
import Modal_Termos_de_Uso from '../../Profissionais/Modal Termos de Uso/Modal_Termos_de_Uso';

function Cadastro_TEA() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const [termosAbertos, setTermosAbertos] = useState(false);


  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Login Google:', result.user);
      navigate ('/FormularioCadastroTea');
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
    navigate('/FormularioCadastroTea');
  };

  return (
    <div className="cadastro-container-Tea">
      <div className="cadastro-form-section-do-Tea">
        <div className='h1-do-profissional-legal-do-Tea'>
            <h1>Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit} className="cadastro-form-do-Tea">
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
            <span className="google-g-do-Tea">G</span><span className="google-oogle">oogle</span>
          </button>

         <p style={{ fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
           Ao se cadastrar, você concorda com os{' '}
            <span 
              onClick={() => setTermosAbertos(true)} 
             style={{ color: '#710634', textDecoration: 'none', cursor: 'pointer' }}
            >
            Termos de Uso
          </span>.
          </p>


          {erro && <div className="erro-mensagem-do-Tea">{erro}</div>}

          <button type="submit" className="btn-proximo-do-Tea" href="/cadastroprofissionaisdois">Próximo</button>

          <div className="login-link-do-Tea">
            Já possui uma conta? <Link to = "/loginprofissionais">Entrar</Link>
          </div>
        </form>
      </div>

      {/* Lado direito */}
      <div className="cadastro-imagem-section-do-Tea">
        <img src="/Spectrum.png" alt="Logo" />
      </div>
      <Modal_Termos_de_Uso isOpen={termosAbertos} onClose={() => setTermosAbertos(false)} />
    </div>
  );
}

export default Cadastro_TEA;
