import './VerPerfil.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function VerPerfil() {
  const [imagem, setImagem] = useState(null);
  const [usuario, setUsuario] = useState({
    nome: '',
    idade: '',
    nivelSuporte: '',
    responsavel: '',
    parentesco: '',
    gostos: '',
  });

  const inputRef = useRef(null);

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    const ultimo = usuarios[usuarios.length - 1];
    if (ultimo) {
      setUsuario({
        nome: ultimo.nome || '',
        idade: ultimo.formacao || '',
        nivelSuporte: ultimo.nivelSuporte || '01',
        responsavel: ultimo.responsavelNome || '',
        parentesco: ultimo.parentesco || '',
        gostos: ultimo.descricao || '',
      });
      if (ultimo.imagemBase64) {
        setImagem(ultimo.imagemBase64);
      }
    }
  }, []);

  return (
    <div className='container-all-verper-tea'>
      <div className='container-inputs-texts-verpe-tea'>
        <div className='navbar-falsa-ver-perfil-tea'>
          <Link to='/perfiltea' className='button-ver-perfil-tea'>Voltar</Link>
        </div>

        <div className='ajustes-inputs-verp-tea'> 
          <div className='div-inputs-verpe-tea'>
            <input
              className='nome-tea-ver-perfil-tea'
              type="text"
              value={usuario.nome}
              disabled
            />

            <div className='idade-ver-perfil-tea'>
              <p>Idade:</p>
              <input type="text" value={usuario.idade} disabled />
            </div>

            <div className='nivel-suporte-ver-perfil-tea'>
              <p>Nível de suporte:</p>
              <input type="text" value={usuario.nivelSuporte} disabled />
            </div>

            <div className='responsavel-ver-perfil-tea'>
              <p>Responsável:</p>
              <input type="text" value={usuario.responsavel} disabled />
            </div>
          </div>

          <div className='div-text-ver-perfil-tea'>
            <textarea
              name="gosto"
              className='gosto-perfil-tea'
              value={usuario.gostos ? `Gosto de: ${usuario.gostos}` : ''}
              disabled
            />
          </div>
        </div>
      </div>

      <div className='container-imagens-e-outros-verpe-tea'>
        <div className='div-img-ver-perfil-tea'>
          <div className='definitivamente-a-img-tea'>
            <img
              src={imagem || 'tela de contrato.png'}
              alt="Imagem de perfil"
              className="imagem-preview-verperfil-tea-real"
            />
          </div>
          <Link to = "/editarperfiltea">Editar Perfil</Link>
        </div>
      </div>
      
    </div>
  );
}

export default VerPerfil;
