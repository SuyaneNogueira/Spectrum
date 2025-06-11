import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormularioCadastroTea.css';
import { Link } from 'react-router-dom';

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
    <div className="cadastro-dois-container-do-tea">
      <div className="cadastro-dois-form-do-form-tea">
        <label>Qual sua idade:</label>
        <input
          type="text"
          placeholder="Digite apenas números"
          value={formacao}
          onChange={(e) => setFormacao(e.target.value)}
        />

        

        <label>Em que ano você nasceu?:</label>
        <input
          type="text"
          placeholder="xx/xx/xxxx"
          value={pergunta1}
          onChange={(e) => setPergunta1(e.target.value)}
        />

        <label>Você ja foi diagnosticado com TEA?</label>
         <select
        
          value={pergunta2}
        onChange={(e) => setPergunta2(e.target.value)}
>
  <option value="">Selecione</option>
  <option value="Sim">Sim</option>
  <option value="Não">Não</option>
</select>

        <label>Se sim quando?:</label>
        <input
          type="text"
          placeholder="xx/xx/xxxx"
          value={pergunta3}
          onChange={(e) => setPergunta3(e.target.value)}
        />

        <Link to = "/fomulariocadastrodos" className="btn-concluir-do-form-tea" >
         Próximo
        </Link>
      </div>

      <div className="imagem-formulario-cadastro-tea-um">
        <img src="/Spectrum.png" alt="Cérebro com texto Spectrum" />
      </div>
    </div>
  );
}

export default Cadastro_Profissionais_Dois;
