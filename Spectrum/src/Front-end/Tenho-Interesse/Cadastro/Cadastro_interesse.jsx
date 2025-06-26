import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Certifique-se de que GoogleAuthProvider está importado
import { auth, provider, signInWithPopup, GoogleAuthProvider } from '../../Firebase/Firebase'; 
import './Cadastro_interesse.css';
import Modal_Termos_de_Uso from '../../Profissionais/Modal Termos de Uso/Modal_Termos_de_Uso'; 

function Cadastro_interesse() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [modalAberto, setModalAberto] = useState(false); 
  const navigate = useNavigate();

  // Função para lidar com o login do Google
  const handleGoogleLogin = async () => {
    try {
      // Cria uma nova instância do provedor Google
      const googleProvider = new GoogleAuthProvider();
      // Define o parâmetro customizado para forçar a seleção de conta
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });

      const result = await signInWithPopup(auth, googleProvider); // Usa a nova instância
      console.log('Login Google:', result.user);
      navigate('/cadastrointeressedois');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      setErro('Erro ao fazer login com Google. Tente novamente.');
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
    console.log('Dados do formulário:', { nome, email, senha, termosAceitos });
    navigate('/cadastrointeressedois'); 
  };

  const abrirModalTermos = (e) => {
    e.stopPropagation(); 
    setModalAberto(true);
  };

  const fecharModalTermos = () => {
    setModalAberto(false);
  };

  return (
    <div className="cadastro-container_interesse">
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

          <div className="termos-container_interesse">
            <div className={`termo-circulo_interesse ${termosAceitos ? 'ativo' : ''}`} onClick={() => setTermosAceitos(!termosAceitos)} />
            <p>
              Li e aceito os{' '}
              <span
                onClick={abrirModalTermos}
                style={{ color: '#710634', cursor: 'pointer' }}
              >
                Termos de Uso
              </span>
            </p>
          </div>

          {erro && <div className="erro-mensagem_interesse">{erro}</div>}

          <div className='botao_proximo_interesse'>
            <button
              type="submit"
              className="btn-proximo_interesse"
              disabled={!termosAceitos}
              style={{
              opacity: termosAceitos ? 1 : 0.6,
              cursor: termosAceitos ? 'pointer' : 'not-allowed'
              }}
            >
              Próximo
            </button>
          </div>

          <div className="login-link_interesse">
            Já possui uma conta? <Link to="/Login_Profissionais" className='link_logar_interesse'>Entrar</Link>
          </div>
        </form>
      </div>

      <div className="cadastro-imagem-section_interesse">
        <img src="/Spectrum.png" alt="Ilustração cérebro" />
      </div>

      <Modal_Termos_de_Uso isOpen={modalAberto} onClose={fecharModalTermos} />
    </div>
  );
}

export default Cadastro_interesse;