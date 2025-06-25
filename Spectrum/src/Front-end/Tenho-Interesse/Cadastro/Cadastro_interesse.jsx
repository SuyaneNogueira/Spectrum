import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../Firebase/Firebase'; // Estes devem estar configurados
import './Cadastro_interesse.css';
import Modal_Termos_de_Uso from '../../Profissionais/Modal Termos de Uso/Modal_Termos_de_Uso'; // Caminho para seu modal

function Cadastro_interesse() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [modalAberto, setModalAberto] = useState(false); // Estado para controlar a abertura do modal
  const navigate = useNavigate();

  // Função para lidar com o login do Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Login Google:', result.user);
      navigate('/cadastrointeressedois');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      setErro('Erro ao fazer login com Google. Tente novamente.');
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Validação dos campos
    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    // Validação da aceitação dos termos
    if (!termosAceitos) {
      setErro('Você precisa aceitar os termos de uso.');
      return;
    }

    // Se tudo estiver OK, limpa o erro e navega
    setErro('');
    console.log('Dados do formulário:', { nome, email, senha, termosAceitos });
    // Aqui você faria a lógica de cadastro no Firebase Authentication
    // Por exemplo:
    // try {
    //   await createUserWithEmailAndPassword(auth, email, senha);
    //   navigate('/Cadastro_Profissionais_Dois');
    // } catch (error) {
    //   setErro(error.message); // Exibe o erro do Firebase, se houver
    // }

    navigate('/cadastrointeressedois'); // Redireciona para a próxima página (após a lógica de cadastro)
  };

  // Função para abrir o modal de termos de uso
  const abrirModalTermos = (e) => {
    e.stopPropagation(); // Impede que o clique no texto marque o checkbox
    setModalAberto(true);
  };

  // Função para fechar o modal
  const fecharModalTermos = () => {
    setModalAberto(false);
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

          <div className="termos-container_interesse">
            {/* O clique no círculo ou no container alternará o estado de termosAceitos */}
            <div className={`termo-circulo_interesse ${termosAceitos ? 'ativo' : ''}`} onClick={() => setTermosAceitos(!termosAceitos)} />
            <p>
              Li e aceito os{' '}
              <span
                onClick={abrirModalTermos} // Este clique abre o modal
                style={{ color: '#710634', cursor: 'pointer' }} // Adicionei underline para indicar que é clicável
              >
                Termos de Uso
              </span>
            </p>
          </div>

          {erro && <div className="erro-mensagem_interesse">{erro}</div>}

          <div className='botao_proximo_interesse'>
            {/* O botão "Próximo" agora é um tipo submit para acionar o handleSubmit */}
            <button type="submit" className="btn-proximo_interesse">Próximo</button>
          </div>

          <div className="login-link_interesse">
            Já possui uma conta? <Link to="/Login_Profissionais" className='link_logar_interesse'>Entrar</Link>
          </div>
        </form>
      </div>

      {/* Lado direito */}
      <div className="cadastro-imagem-section_interesse">
        <img src="/Spectrum.png" alt="Ilustração cérebro" />
      </div>

      {/* Renderização do Modal de Termos de Uso */}
      <Modal_Termos_de_Uso isOpen={modalAberto} onClose={fecharModalTermos} />
    </div>
  );
}

export default Cadastro_interesse;