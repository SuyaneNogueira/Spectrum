import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormularioCadastroTea.css';

function FormularioCadastroTea() {
  const [formacao, setFormacao] = useState('');
  const [pergunta1, setPergunta1] = useState('');
  const [pergunta2, setPergunta2] = useState('');
  const [pergunta3, setPergunta3] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    const ultimo = usuarios[usuarios.length - 1];
    if (ultimo) {
      setFormacao(ultimo.formacao || '');
      setPergunta1(ultimo.pergunta1 || '');
      setPergunta2(ultimo.pergunta2 || '');
      setPergunta3(ultimo.pergunta3 || '');
    }
  }, []);

  const aplicarMascaraData = (valor) => {
    const numeros = valor.replace(/\D/g, ''); // remove tudo que não for número
    const partes = [];
    if (numeros.length > 0) partes.push(numeros.slice(0, 2));
    if (numeros.length > 2) partes.push(numeros.slice(2, 4));
    if (numeros.length > 4) partes.push(numeros.slice(4, 8));
    return partes.join('/');
  };

  const handlePergunta1Change = (e) => {
    setPergunta1(aplicarMascaraData(e.target.value));
  };

  const handlePergunta3Change = (e) => {
    setPergunta3(aplicarMascaraData(e.target.value));
  };

  const handleConcluir = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];

    if (usuarios.length === 0) {
      alert('Nenhum usuário para atualizar.');
      return;
    }

    const ultimo = usuarios[usuarios.length - 1];

    const atualizado = {
      ...ultimo,
      formacao,
      pergunta1,
      pergunta2,
      pergunta3,
    };

    const novaLista = [...usuarios.slice(0, -1), atualizado];
    localStorage.setItem('usuariosTEA', JSON.stringify(novaLista));

    navigate('/fomulariocadastrodos'); // Verifique se a rota está correta
  };

  return (
    <div className="cadastro-dois-container-do-tea">
      <div className="cadastro-dois-form-do-form-tea">
        <label>Qual sua idade:</label>
        <input
          type="text"
          placeholder="Digite apenas números"
          value={formacao}
          onChange={(e) => {
            const somenteNumeros = e.target.value.replace(/\D/g, '');
            setFormacao(somenteNumeros);
          }}
        />

        <label>Em que ano você nasceu?:</label>
        <input
          type="text"
          placeholder="XX/XX/XXXX"
          maxLength={10}
          value={pergunta1}
          onChange={handlePergunta1Change}
        />

        <label>Você já foi diagnosticado com TEA?</label>
        <select value={pergunta2} onChange={(e) => setPergunta2(e.target.value)}>
          <option value="">Selecione</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        <label>Se sim, quando?:</label>
        <input
          type="text"
          placeholder="XX/XX/XXXX"
          maxLength={10}
          value={pergunta3}
          onChange={handlePergunta3Change}
        />

        <button className="btn-concluir-do-form-tea" onClick={handleConcluir}>
          Próximo
        </button>
      </div>

      <div className="imagem-formulario-cadastro-tea-um">
        <img src="/Spectrum.png" alt="Cérebro com texto Spectrum" />
      </div>
    </div>
  );
}

export default FormularioCadastroTea;
