import React from 'react';
import { Link } from 'react-router-dom';
import './Perfil_Profissionais..css';


function Perfil_Profissionais() {
  return (
    <div className='perfil-container'>
      <div className='navbar-profissionais'>
        <img src="/Spectrum.png" alt="Logo Spectrum" className="logo-perfil" />
        <Link to="/telainicialprofissionais" className="botao-voltar">Voltar</Link>
      </div>

      <div className="perfil-conteudo">
        <div className="perfil-info">
          <h2 className="nome-profissional">Sideli Cardoso</h2>
          <p className="profissao">Profissão: Neuropsicopedagoga</p>

          <div className="contato-profissional">
            <p><strong>Informações de contato</strong></p>
            <p>Telefone: (00) 0000-0000</p>
            <p>Email: email@gmail.com</p>
          </div>

          <div className="caixa-descricao">
            <p className="titulo-descricao">Descrição do Especialista</p>
            <div className="texto-descricao">
              Pedagoga, atuante na educação a 15 anos. Neuropsicopedagoga Clínica, especialista em desenvolvimento humano desde 2017, atualmente graduanda em Psicologia, pela UNISUL. <br/><br/>
              Atua no desenvolvimento infantil, com foco em avaliação e intervenção neuropsicopedagógica. Especialista em ABA, TEA (infantil, adolescente e adulto), TDAH, TOD, Dislexia, Neurociência e Psicopedagogia clínica, institucional, empresarial e hospitalar. <br/><br/>
              Pós-graduanda em Habilidades Socioemocionais e Neuropsicomotricidade. Acompanhante Terapêutica e educadora parental. <br/><br/>
              Mãe atípica há 18 anos, atuo com amor, ciência e propósito, fortalecendo o neurodesenvolvimento e transformando vidas. <br/><br/>
              “Minha atuação é guiada pela ciência, fortalecida pelo amor e nutrida pela leveza da aprendizagem divertida.”
            </div>
          </div>

          <Link className="botao-editar" to="/editarperfil">Editar Perfil</Link>
        </div>

        <div className="perfil-foto">
          <img src="Sideli-Cardoso.png" alt="Foto da profissional" className="foto-profissional" />
        </div>
      </div>
    </div>
  );
}

export default Perfil_Profissionais;
