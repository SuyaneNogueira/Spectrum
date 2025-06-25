import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../../Firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import './Perfil_Profissionais.css';

function Perfil_Profissionais() {
  const [dadosProfissional, setDadosProfissional] = useState(null);

  useEffect(() => {
    const fetchDados = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, 'profissionais', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDadosProfissional(docSnap.data());
      }
    };

    fetchDados();
  }, []);

  if (!dadosProfissional) {
    return <div>Carregando...</div>; // ou um spinner bonito
  }

  return (
    <div className='perfil-container'>
      <div className='navbar-profissionais'>
        <img src="/Spectrum.png" alt="Logo Spectrum" className="logo-perfil" />
        <Link to="/telainicialprofissionais" className="botao-voltar">Voltar</Link>
      </div>

      <div className="perfil-conteudo">
        <div className="perfil-info">
          <h2 className="nome-profissional">{dadosProfissional.nome}</h2>
          <p className="profissao">Profissão: {dadosProfissional.profissao}</p>

          <div className="contato-profissional">
            <p><strong>Informações de contato</strong></p>
            <p>Telefone: {dadosProfissional.telefone}</p>
            <p>Email: {dadosProfissional.email}</p>
          </div>

          <div className="bloco-descricao-botao">
            <div className="caixa-descricao">
              <p className="titulo-descricao">Descrição do Especialista</p>
              <div className="texto-descricao">{dadosProfissional.descricao}</div>
            </div>

            <Link className="botao-editar" to="/editarperfilprofissionais">Editar Perfil</Link>
          </div>
        </div>

        <div className="perfil-foto">
          <img
            src={dadosProfissional.fotoURL || 'Sideli-Cardoso.png'}
            alt="Foto da profissional"
            className="foto-profissional"
          />
        </div>
      </div>
    </div>
  );
}

export default Perfil_Profissionais;
