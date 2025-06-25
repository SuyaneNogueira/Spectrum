import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro_interesse_dois.css';
import { Link } from 'react-router-dom'

function Cadastro_interesse_dois() {
  const [formacao, setFormacao] = useState('');
  const [atendimento, setAtendimento] = useState('');
  const [pergunta1, setPergunta1] = useState('');
  const [pergunta2, setPergunta2] = useState('');
  const [pergunta3, setPergunta3] = useState('');
  const navigate = useNavigate();

  const handleConcluir = () => {
    // Aqui você pode salvar os dados, se necessário
    navigate('/');
  };

  return (
    <div className="cadastro-dois-container-interesse">
      <div className="cadastro-dois-form-interesse">
          <h1 className='titulo-cadastro-interesse-dois'>Cadastro</h1>
        <div className="container-elements-interesse-dois">
        <label>Você conhece alguém que tenha TEA?:</label>
        <input
          type="text"
          placeholder="Sim (ex: minha tia)/ Não"
        />

        <label>O que você quer saber sobre TEA?:</label>
          <input type="text" 
          placeholder="Quero saber como lidar com..."
          />

        <label>Você suspeita de TEA?:</label>
        <select className='select-pergunta-interesse-dois' >
          <option value=""></option>
          <option value="nao">Não</option>
          <option value="sim">Sim</option>
        </select>
        
        <label>Você pretende se especializar na área?:</label>
        <input 
          type="text" 
          placeholder="Sim (em Terapia Ocupacional) / Não"
        />

        
        <button className="btn-concluir-interesse" onClick={handleConcluir}><Link className='container-link-interesse' to = "/telainicialprofissionais">
        Cadastrar</Link>
        </button>
      </div>
        </div>
        

      <div className="cadastro-dois-imagem-interesse">
        <img src="/Spectrum.png" alt="Cérebro com texto Spectrum" />
      </div>
    </div>
  );
}

export default Cadastro_interesse_dois;
