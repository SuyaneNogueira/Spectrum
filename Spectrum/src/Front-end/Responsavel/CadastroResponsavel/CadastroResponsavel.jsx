import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroResponsavel.css'

const API_URL = 'http://localhost:5000/responsavel';

function CadastroResponsavel() {
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [responsaveis, setResponsaveis] = useState([]);
  const [editarId, setEditarId] = useState(null);
    
       // Buscar responsáveis (READ)
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setResponsaveis)
      .catch((err) => console.error('Erro ao buscar:', err));
  }, []);

  // Criar ou atualizar responsável
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
    setErro('');

    const dados = { nome, email, senha };

    try {
      if (editarId) {
        // Atualizar
        const res = await fetch(`${API_URL}/${editarId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });
        const atualizado = await res.json();
        setResponsaveis((prev) =>
          prev.map((r) => (r.id === editarId ? atualizado : r))
        );
        setEditarId(null);
      } else {
        // Criar
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dados),
        });
        const novo = await res.json();
        setResponsaveis((prev) => [...prev, novo]);
      }
      setNome('');
      setEmail('');
      setSenha('');
      setTermosAceitos(false);
    } catch (err) {
      // console.error('Erro ao salvar:', err);
      setErro('Erro ao salvar, tente novamente.');
    }
  };

  // Deletar responsável
  const handleDeletar = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setResponsaveis((prev) => prev.filter((r) => r.id !== id));
      if (editarId === id) {
        setEditarId(null);
        setNome('');
        setEmail('');
        setSenha('');
      }
    } catch (err) {
      console.error('Erro ao deletar:', err);
    }
  };

  // Editar responsável
  const handleEditar = (r) => {
    setNome(r.nome);
    setEmail(r.email);
    setSenha(r.senha);
    setTermosAceitos(true);
    setEditarId(r.id);
  };

  return (
    <div className='conteiner_geral'>
    <div className='div_geral2'>
      <div className='cadastro'>
        <h1 className='titulo'>{editarId ? 'Editar Cadastro' : 'Cadastro'}</h1>
        <form onSubmit={handleSubmit} className='inputs_cadastro'>
          <label className='letra'>Nome</label>
          <input
            type='text'
            placeholder='Seu nome completo'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label className='letra'>Email</label>
          <input
            type='email'
            placeholder='Seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='letra'>Senha</label>
          <input
            type='password'
            placeholder='Sua senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div
            className='termos-container'
            onClick={() => setTermosAceitos(!termosAceitos)}
            style={{ cursor: 'pointer', userSelect: 'none', marginBottom: 10 }}
          >
            <div className={`termo-circulo ${termosAceitos ? 'ativo' : ''}`} />
            <span>
              Li e aceito os{' '}
              <Link className='termos' to='/termos'>
                Termos de Uso
              </Link>
            </span>
          </div>
          {erro && <div className='erro-mensagem'>{erro}</div>}
          <button type='submit' className='Cadastro_button'>
            {editarId ? 'Atualizar' : 'Próximo'}
          </button>
        </form>
      </div>
        <div className="cadastro_imagem">
        <img src="/Spectrum.png" alt="Ilustração cérebro" />
      </div>
      </div>
    </div>
  )
}

export default CadastroResponsavel
