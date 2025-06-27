import React, { useState } from 'react';
import Modal_Termos_de_Uso from '../Modal Termos de Uso/Modal_Termos_de_Uso';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../Firebase/Firebase';
import './Cadastro_Profissionais.css';
import { Link } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { GoogleAuthProvider } from 'firebase/auth';

function Cadastro_Profissionais() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();
  const [modalAberto, setModalAberto] = useState(false); 

  const handleGoogleLogin = async () => {
    try {
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      const result = await signInWithPopup(auth, provider);

      const docRef = doc(db, 'profissionais', result.user.uid);
      const docSnap = await getDoc(docRef);


          if (!docSnap.exists()) {
          await setDoc(docRef, {
          nome: result.user.displayName || '',
          email: result.user.email || '',
          
          });
          }

      navigate('/cadastroprofissionaisdois');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      setErro('Ocorreu um erro ao tentar fazer login com o Google. Tente novamente.');
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
    navigate('/cadastroprofissionaisdois');
  };

  const abrirModalTermos = (e) => {
    e.stopPropagation(); 
    setModalAberto(true);
  };

  const fecharModalTermos = () => {
    setModalAberto(false);
  };

  return (
    <div className="cadastro-container">
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

          <div className="termos-container_interesse">
            <div className={`termo-circulo_interesse ${termosAceitos ? 'ativo' : ''}`} onClick={() => setTermosAceitos(!termosAceitos)} />
            <p>Li e aceito os
              <span
                onClick={abrirModalTermos} 
                style={{ color: '#710634', cursor: 'pointer' }}
              >
                Termos de Uso
              </span>
            </p>
          </div>

          <Link
            to="/cadastroprofissionaisdois"
            className="btn-proximo-do-Tea"
            onClick={handleSubmit}
            style={{
              display: 'inline-block',
              textAlign: 'center',
              opacity: termosAceitos ? 1 : 0.6,
              pointerEvents: termosAceitos ? 'auto' : 'none',
            }}
          >
            Próximo
          </Link>

          <button
            type="submit"
            className="btn-proximo"
            disabled={!termosAceitos} // Disable button if terms are not accepted
            style={{
              opacity: termosAceitos ? 1 : 0.6,
              cursor: termosAceitos ? 'pointer' : 'not-allowed'
            }}
          >
            Próximo
          </button>

          <div className="login-link">
            Já possui uma conta? <Link to="/loginprofissionais">Entrar</Link>
          </div>
        </form>
      </div>

      <div className="cadastro-imagem-section">
        <img src="/Spectrum.png" alt="Logo" />
      </div>
      <Modal_Termos_de_Uso isOpen={modalAberto} onClose={fecharModalTermos} />
    </div>
  );
}

export default Cadastro_Profissionais;