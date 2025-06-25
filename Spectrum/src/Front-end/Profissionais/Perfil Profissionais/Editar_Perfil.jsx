import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Editar_Perfil.css';
import { storage, ref, uploadBytes, getDownloadURL } from '../../Firebase/Firebase'; // ajuste o caminho conforme sua estrutura

function Editar_Perfil() {
  const [imagemPreview, setImagemPreview] = useState(null);
  const [imagemArquivo, setImagemArquivo] = useState(null);

  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagemArquivo(file);
      setImagemPreview(URL.createObjectURL(file));
    }
  };

  const handleSalvar = async () => {
    let imageUrl = '';

    if (imagemArquivo) {
      const storageRef = ref(storage, `fotos-perfil/${imagemArquivo.name}`);
      await uploadBytes(storageRef, imagemArquivo);
      imageUrl = await getDownloadURL(storageRef);
    }

    const dados = {
      nome,
      profissao,
      email,
      telefone,
      senha,
      descricao,
      foto: imageUrl
    };

    try {
      await fetch('http://localhost:3001/api/profissional', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      alert('Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar os dados.');
    }
  };

  return (
    <div className="editar-container">
      <div className="navbar-editar">
        <img src="/logo_Spectrum_sem_fundo.png" alt="Logo" className="logo-navbar" />
        <h2 className="titulo-editar">Perfil do Profissional</h2>
        <Link to="/telainicialprofissionais" className="botao-voltar">VOLTAR</Link> 
      </div>

      <div className="editar-conteudo">
       

        <div className="editar-corpo">
          <form className="editar-form">
            {['Nome', 'Profissão', 'Email', 'Telefone', 'Senha'].map((campo, index) => (
              <div className="editar-campo" key={index}>
                <label>{campo}:</label>
                <input type="text" />
              </div>
            ))}
          </form>

          <div className="foto-editar-container">
            <label htmlFor="upload-foto">
              <img
                src={imagemPreview || '/Sideli-Cardoso.png'}
                alt="Foto"
                className="foto-editar-preview"
              />
            </label>
            <input
              type="file"
              id="upload-foto"
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleImagemChange}
            />

            <div className="caixa-descricao-editar">
              <p>Breve Descrição Profissional</p>
              <textarea placeholder="Digite uma breve descrição aqui..." />
            </div>
          </div>
        </div>

        <div className="botoes-editar">
          <button className="botao-editar">Salvar</button>
          <Link to="/perfilprofissionais" className="botao-editar">Ver seu perfil</Link>
        </div>
      </div>
    </div>
  );
}

export default Editar_Perfil;
