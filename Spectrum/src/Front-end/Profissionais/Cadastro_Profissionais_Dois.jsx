import React, { useState } from 'react';
import './Cadastro_Profissionais_Dois.css';

function Cadastro_Profissionais_Dois() {
  const [formacao, setFormacao] = useState('');
  const [atuacao, setAtuacao] = useState('');

  const nome = localStorage.getItem('nome');
  const email = localStorage.getItem('email');
  const senha = localStorage.getItem('senha');

  const handleSubmit = () => {
    if (!formacao || !atuacao) {
      alert('Preencha todos os campos.');
      return;
    }

    const dados = {
      nome,
      email,
      senha,
      formacao,
      atuacao
    };

    console.log('Dados cadastrados:', dados);
    alert('Cadastro concluído com sucesso!');
  };

  return (
    <div className="cadastro-container">
      <div className="form-section">
        <img src="/Spectrum.png" alt="Logo Spectrum" className="logo" />
        <input
          type="text"
          placeholder="Qual(is) sua(s) formação(ões)?"
          value={formacao}
          onChange={(e) => setFormacao(e.target.value)}
        />
        <select value={atuacao} onChange={(e) => setAtuacao(e.target.value)}>
          <option value="">Você atua em clínica ou domiciliar?</option>
          <option value="clínica">Clínica</option>
          <option value="domiciliar">Domiciliar</option>
          <option value="ambos">Ambos</option>
        </select>
        <button className="next-button" onClick={handleSubmit}>
          Finalizar Cadastro
        </button>
      </div>
      <div className="image-section" />
    </div>
  );
}

export default Cadastro_Profissionais_Dois;
