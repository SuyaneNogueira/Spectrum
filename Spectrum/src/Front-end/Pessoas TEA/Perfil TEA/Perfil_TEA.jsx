import React, { useRef, useState } from 'react';
import './Perfil_TEA.css'

function Perfil_TEA() {

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
    <div className='container-perfil-tea'>
        <div className='Nav-bar-fake-tea'>
             <div className='div-img-nav-fake'>
                   <img src="tela de contrato.png" alt="" />
             </div>
             <div className='titulo-seu-perfil-tea'>
                      <p>Seu Perfil</p>
             </div>
             <div className='botão-voltar-fake-tea'>
             <button className='botao-voltar-perfil-fake-tea'>VOLTAR</button>
             </div>
        </div>
        <div className='conteudo-perfil-tea'>
            <div className='conteudo-input-perfil-tea'>
                  <div className='channel-inputs-tea'>
                       <div className='nome-input-perfil-tea'>
                           <p>Nome:</p>
                           <input type="text" />
                       </div>
                       <div className='email-input-perfil-tea'>
                            <p>Email:</p>
                            <input type="text"/>
                       </div>
                       <div className='telefone-input-perfil-tea'>
                             <p>Telefone:</p>
                             <input type="text"/>
                       </div>
                       <div className='senha-input-perfil-tea'>
                              <p>Senha:</p>
                              <input type="text"/>
                       </div>
                  </div>
                  <div className='Button-editar-perfil-tea'>
                        <button>Editar</button>
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
        <button className="remover-botao" onClick={removerImagem}>
          Remover imagem
        </button>
      )}
                   </div>
                   <div className='breve-descrição-tea'>
                         <p>Descrição Breve sobre você</p>
                       <textarea className='textearea-tea' name="as " id=""></textarea>

                   </div>
                   <div className='botão-ver-perfil-tea'>
                        <button>Ver Perfil</button>   
                   </div>
            </div>
        </div>
    </div>
  )
}

export default Perfil_TEA