import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormularioCadastroTeaDos.css';

function FormularioCadastroTeaDos() {
  const [responsavelNome, setResponsavelNome] = useState('');
  const [temResponsavel, setTemResponsavel] = useState('');
  const [responsavelIdade, setResponsavelIdade] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    const ultimo = usuarios[usuarios.length - 1];
    if (ultimo) {
      setResponsavelNome(ultimo.responsavelNome || '');
      setTemResponsavel(ultimo.temResponsavel || '');
      setResponsavelIdade(ultimo.responsavelIdade || '');
    }
  }, []);

  const handleConcluir = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];

    if (usuarios.length === 0) {
      alert('Nenhum usuário para atualizar.');
      return;
    }

    const ultimo = usuarios[usuarios.length - 1];

    const atualizado = {
      ...ultimo,
      temResponsavel,
      responsavelNome,
      responsavelIdade,
    };

    const novaLista = [...usuarios.slice(0, -1), atualizado];
    localStorage.setItem('usuariosTEA', JSON.stringify(novaLista));

    navigate('/telaitea'); // Redireciona para a página inicial ou perfil
  };

  return (
    <div className="cadastro-dois-container-do-tea-dos">
      <div className="cadastro-dois-form-do-form-tea-dos">
        <label>Você tem algum responsável por você?:</label>
        <select
          value={temResponsavel}
          onChange={(e) => setTemResponsavel(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        <label>Se sim, qual o nome dele(a)?:</label>
        <input
          type="text"
          placeholder="Nome completo"
          value={responsavelNome}
          onChange={(e) => setResponsavelNome(e.target.value)}
        />

        <label>Qual a idade dele(a)?:</label>
        <input
          type="text"
          placeholder="Use números"
          value={responsavelIdade}
          onChange={(e) => setResponsavelIdade(e.target.value)}
        />

        <button onClick={handleConcluir} className="btn-concluir-do-form-tea-dos">
          Concluir
        </button>
      </div>

      <div className="imagem-formulario-cadastro-tea-um-dos">
        <img src="/Spectrum.png" alt="Cérebro com texto Spectrum" />
      </div>
    </div>
  );
}

export default FormularioCadastroTeaDos;
