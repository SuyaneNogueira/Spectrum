import React, { useRef, useState, useEffect } from 'react';
import './Perfil_TEA.css';
import { Link } from 'react-router-dom';

function Perfil_TEA() {
  const [imagem, setImagem] = useState(null);
  const inputRef = useRef(null);
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    descricao: ''
  });

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    const ultimo = usuarios[usuarios.length - 1];
    if (ultimo) {
      setUsuario({
        nome: ultimo.nome || '',
        email: ultimo.email || '',
        telefone: ultimo.telefone || '',
        senha: ultimo.senha || '',
        descricao: ultimo.descricao || ''
      });
      if (ultimo.imagemBase64) {
        setImagem(ultimo.imagemBase64);
      }
    }
  }, []);

  const handleImagemClick = () => {
    inputRef.current.click();
  };

  const handleImagemSelecionada = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setImagem(base64);

        const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
        if (usuarios.length > 0) {
          const atualizado = {
            ...usuarios[usuarios.length - 1],
            imagemBase64: base64
          };
          const novaLista = [...usuarios.slice(0, -1), atualizado];
          localStorage.setItem('usuariosTEA', JSON.stringify(novaLista));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removerImagem = () => {
    setImagem(null);
    inputRef.current.value = '';

    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    if (usuarios.length > 0) {
      const atualizado = {
        ...usuarios[usuarios.length - 1],
        imagemBase64: null
      };
      const novaLista = [...usuarios.slice(0, -1), atualizado];
      localStorage.setItem('usuariosTEA', JSON.stringify(novaLista));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvar = async () => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    if (usuarios.length === 0) return;

    const atualizado = {
      ...usuarios[usuarios.length - 1],
      ...usuario,
      imagemBase64: imagem
    };
    const novaLista = [...usuarios.slice(0, -1), atualizado];
    localStorage.setItem('usuariosTEA', JSON.stringify(novaLista));

    // Preparado para envio ao backend futuramente:
    // await fetch('http://localhost:3001/usuariosTEA', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(atualizado)
    // });

    alert('Dados atualizados!');
  };

  return (
    <div className='container-perfil-tea'>
      <div className='Nav-bar-fake-tea'>
        <div className='div-img-nav-fake'>
          <img src="tela de contrato.png" alt="" />
        </div>
        <div className='titulo-seu-perfil-tea'>
          <p>Seu Perfil</p>
        </div>
        <div className='botão-voltar-fake-tea'>
          <Link to="/verperfiltea" className='botao-voltar-perfil-fake-tea'>VOLTAR</Link>
        </div>
      </div>

      <div className='conteudo-perfil-tea'>
        <div className='conteudo-input-perfil-tea'>
          <div className='channel-inputs-tea'>
            <div className='nome-input-perfil-tea'>
              <p>Nome:</p>
              <input type="text" name="nome" value={usuario.nome} onChange={handleChange} />
            </div>
            <div className='email-input-perfil-tea'>
              <p>Email:</p>
              <input type="text" name="email" value={usuario.email} onChange={handleChange} />
            </div>
            <div className='telefone-input-perfil-tea'>
              <p>Telefone:</p>
              <input type="text" name="telefone" value={usuario.telefone} onChange={handleChange} />
            </div>
            <div className='senha-input-perfil-tea'>
              <p>Senha:</p>
              <input type="password" name="senha" value={usuario.senha} onChange={handleChange} />
            </div>
          </div>

          <div className='Button-editar-perfil-tea'>
            <button className='link-editar-button-tea' onClick={handleSalvar}>Salvar Alterações</button>
          </div>
        </div>

        <div className='imagem-e-descricao-perfil-tea'>
          <div className='div-editar-imagem-tea'>
            <img
              src={imagem || 'tela de contrato.png'}
              alt="Clique para mudar"
              className="imagem-preview-verperfil-tea"
              onClick={handleImagemClick}
            />
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleImagemSelecionada}
              style={{ display: 'none' }}
            />
            {imagem && (
              <button className="remover-botao" onClick={removerImagem}>Remover imagem</button>
            )}
          </div>

          <div className='breve-descrição-tea'>
            <p>Descrição Breve sobre você</p>
            <textarea
              className='textearea-tea'
              name="descricao"
              value={usuario.descricao}
              onChange={handleChange}
            />
          </div>

          <div className='botão-ver-perfil-tea'>
            <Link to="/verperfilviespe" className='link-ver-perfil-tea'>Ver Perfil</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil_TEA;
