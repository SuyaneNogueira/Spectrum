import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroResponsavel.css';
// Importe GoogleAuthProvider para ser explícito, se necessário
import { auth, provider, signInWithPopup, GoogleAuthProvider } from '../../Firebase/Firebase';
import { db, doc, setDoc, getDoc } from '../../Firebase/Firebase';
import Modal_Termos_de_Uso from '../../Profissionais/Modal Termos de Uso/Modal_Termos_de_Uso';
import '../../../Back-end/db.js'

function CadastroResponsavel() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [modalTermosAberto, setModalTermosAberto] = useState(false); // Novo estado para o modal de termos
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });

      const result = await signInWithPopup(auth, googleProvider); // Use googleProvider aqui
      const docRef = doc(db, 'responsavel', result.user.uid); // Ajuste a coleção para 'responsaveis'
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          nome: result.user.displayName || '',
          email: result.user.email || '',

          senha: result.user.uid, 
        });
      }

      navigate('/formularioResponsavel');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      setErro('Erro ao fazer login com Google. Tente novamente.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }
    if (!termosAceitos) {
      setErro('Você precisa aceitar os termos de uso.');
      return;
    }

    setErro(''); // Limpa qualquer erro anterior
    // Aqui você faria a lógica de cadastro (por exemplo, com Firebase Authentication para email/senha)
    console.log('Dados de cadastro:', { nome, email, senha, termosAceitos });
    navigate('/formularioResponsavel');
  };

  const abrirModalTermos = (e) => {
    e.stopPropagation(); // Impede que o clique no span ative o div pai do checkbox
    setModalTermosAberto(true);
  };

  const fecharModalTermos = () => {
    setModalTermosAberto(false);
  };

// app.get('/responsavel', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM responsavel ORDER BY id');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Erro ao buscar responsável' });
//   }
// });
// app.get('/responsavel', async (req, res) => {
//     const responsavel = await db.selectResponsavel();

//     res.json(responsavel);
// })


// // criar um responsável
// app.post('/responsavel', async (req, res) => {
//   const { nome, email, senha } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO responsavel (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
//       [nome, email, senha]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Não foi possivel criar responsável' });
//   }
// });

  return (
    <div className='conteiner_geral'>
      <div className='div_geral2'>
        <div className="cadastro">
          <div className="container-cadastro-responsavel">
            <h1 className='titulo'>Cadastro</h1>
            <form onSubmit={handleSubmit} className="inputs_cadastro">
              <label className='letra'>Nome</label>
              <input type="text" placeholder="Seu nome completo" value={nome}
                onChange={(e) => setNome(e.target.value)} />

              <label className='letra'>Email</label>
              <input type="email" placeholder="Seu email" value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <label className='letra'>Senha</label>
              <input type="password" placeholder="Sua senha" value={senha}
                onChange={(e) => setSenha(e.target.value)} />

              <button type="button" className="google-button" onClick={handleGoogleLogin}>
                <span className="google">G</span><span className="google_google">oogle</span>
              </button>

              {/* NOVO BLOCO DOS TERMOS DE USO - IDÊNTICO ao dos outros componentes */}
              <div className="termos-container_interesse"> {/* Reutilizando a classe do Cadastro_interesse */}
                <div className={`termo-circulo_interesse ${termosAceitos ? 'ativo' : ''}`} onClick={() => setTermosAceitos(!termosAceitos)} />
                <p> {/* Mudei de span para p, como nos outros exemplos */}
                  Li e aceito os{' '}
                  <span
                    onClick={abrirModalTermos} // Chama a função para abrir o modal
                    style={{ color: '#710634', cursor: 'pointer' }}
                  >
                    Termos de Uso
                  </span>
                </p>
              </div>
              {/* FIM DO NOVO BLOCO */}

              {erro && <div className='erro-mensagem'>{erro}</div>}

              <div className='botao_proximo_interesse'> {/* Reutilizando a classe do outro componente */}
                <button
                  type="submit"
                  className="btn-proximo_interesse" // Reutilizando a classe
                  disabled={!termosAceitos}
                  style={{
                    opacity: termosAceitos ? 1 : 0.6,
                    cursor: termosAceitos ? 'pointer' : 'not-allowed'
                  }}
                >
                  Próximo
                </button>
              </div>

              {/* Adicionando o link de login, se ainda não houver */}
              <div className="login-link_interesse"> {/* Reutilizando classe */}
                Já possui uma conta? <Link to="/Login_Profissionais" className='link_logar_interesse'>Entrar</Link>
              </div>

            </form>
          </div>
        </div>
        <div className="cadastro_imagem">
          <img src="/Spectrum.png" alt="Ilustração cérebro" />
        </div>
      </div>
      {/* Renderiza o modal de termos de uso */}
      <Modal_Termos_de_Uso isOpen={modalTermosAberto} onClose={fecharModalTermos} />
    </div>
  );
}

export default CadastroResponsavel;