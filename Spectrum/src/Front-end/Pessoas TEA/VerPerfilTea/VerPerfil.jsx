import './VerPerfil.css'
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function VerPerfil() {
    const [imagem, setImagem] = useState(null);
    const inputRef = useRef(null);
  
    const handleImagemClick = () => {
      inputRef.current.click();
    };
  
    const handleImagemSelecionada = (event) => {
      const file = event.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setImagem(url);
      }
    };
  
    const removerImagem = () => {
      setImagem(null);
      inputRef.current.value = '';
    };
  return (
    <div className='container-all-verper-tea'>
        <div className='container-inputs-texts-verpe-tea'>
            <div className='navbar-falsa-ver-perfil-tea'>
                 <Link to = '/perfiltea' className='button-ver-perfil-tea'>Voltar</Link>
            </div>
            <div className='ajustes-inputs-verp-tea'> 
               <div className='div-inputs-verpe-tea'>
                 <input className='nome-tea-ver-perfil-tea' type="text" />
                 <div className='idade-ver-perfil-tea'>
                    <p>Idade:</p>
                    <input type="text" />
                 </div>
                 <div className='nivel-suporte-ver-perfil-tea'>
                    <p>Nivel de suporte:</p>
                    <input type="text"/>
                 </div>
                 <div className='responsavel-ver-perfil-tea'>
                    <p>Responsável:</p>
                    <input type="text" />
                 </div>
                 <div className='parentesco-ver-perfil-tea'>
                    <p>Nível de Parentesco:</p>
                    <input type="text" />
                 </div>
            </div>
                <div className='div-text-ver-perfil-tea'>
                    <textarea name="Gosto de" id="" className='gosto-perfil-tea'>Gosto de:</textarea>
                </div>
            </div>
        </div>
        <div className='container-imagens-e-outros-verpe-tea'>
                 <div className='div-img-ver-perfil-tea'>
                       <div className='definitivamente-a-img-tea'>
                       <img
        src={imagem || 'tela de contrato.png'}
        alt="Clique para mudar"
        className="imagem-preview-verperfil-tea-real"
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
        <button className="remover-botao" onClick={removerImagem}>
          Remover imagem
        </button>
       )}
                       </div>
                       <div className='button-conversar-perfil-tea'>
                             <button className='boton-para-conversar-tea'>Conversar</button>
                       </div>
                 </div>
        </div>
    </div>
  )
}

export default VerPerfil
