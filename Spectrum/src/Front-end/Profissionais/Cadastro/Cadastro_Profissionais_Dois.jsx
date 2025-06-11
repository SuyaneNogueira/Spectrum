import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro_Profissionais_Dois.css';
import { Link } from 'react-router-dom'

function Cadastro_Profissionais_Dois() {
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
    <div className="cadastro-dois-container">
      <div className="cadastro-dois-form">
        <label>Qual(is) é(são) sua(s) formação(ões):</label>
        <input
          type="text"
          placeholder="Digite sua(s) formação(ões)"
          value={formacao}
          onChange={(e) => setFormacao(e.target.value)}
        />

        <label>Você atua em clínica ou domiciliar:</label>
          <select
          value={atendimento}
          onChange={(e) => setAtendimento(e.target.value)}
>
  <option value="">Selecione uma opção</option>
  <option value="Clínica">Clínica</option>
  <option value="Domiciliar">Domiciliar</option>
  <option value="Ambos">Ambos</option>
</select>

        <label>Área de especialização principal:</label>
        <input
          type="text"
          placeholder="Digite sua área de especialização principal"
          value={pergunta1}
          onChange={(e) => setPergunta1(e.target.value)}
        />

        <label>Possui experiência com TEA?</label>
         <select
        
          value={pergunta2}
        onChange={(e) => setPergunta2(e.target.value)}
>
  <option value="">Selecione</option>
  <option value="Sim">Sim</option>
  <option value="Não">Não</option>
</select>

        <label>Breve descrição sobre você:</label>
        <input
          type="text"
          placeholder="Escreva uma breve descrição sobre você"
          value={pergunta3}
          onChange={(e) => setPergunta3(e.target.value)}
        />

        <button className="btn-concluir" onClick={handleConcluir}><Link className='container-link' to = "/telainicialprofissionais">
        Concluído</Link>
        </button>
      </div>

      <div className="cadastro-dois-imagem">
        <img src="/Spectrum.png" alt="Cérebro com texto Spectrum" />
      </div>
    </div>
  );
}

export default Cadastro_Profissionais_Dois;
