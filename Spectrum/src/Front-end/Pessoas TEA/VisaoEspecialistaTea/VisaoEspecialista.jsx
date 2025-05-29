import './VisaoEspecialista.css'
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function VisaoEspecialista() {
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
      <div className='container-all-visao-especialista'>
           <div className='div-anotacoes-especialista'>
                 <div className= 'anotacoes-metodos'>
                       <div className='titulo-anotaçoes-especialistas'>
                              <p>Anotações</p>
                       </div>
                       <div>

                       </div>
                 </div>
           </div>   
           <div className='div-informacoes-normais-especialista'>
               <div className='div-ajustes-especialistas'>
                   <div className='div-not-touch-vi-especialista'>
                       <div className='nome-visao-especialista-tea'>
                         <input className='nome-pessoa-tea-visao-especialista' type="text" />
                       </div>
                       <div className='idade-visao-especialista-tea'>
                            <p>Idade:</p>
                            <input type="text" />
                       </div>
                        <div className='nivel-suporte-visao-especialista-tea'>
                           <p>Nível de suporte:</p>
                           <input type="text" />
                    </div>
                    <div className='informaçoes-responsavel-titulo'> 
                      <p className='informations'>Informações do Responsavel</p>
                    </div>
                       <div className='responsavel-tea-visao-especialista'>
                         <p>Responsavel:</p>
                         <input type="text"/>
                       </div>
                        <div className='nivel-parentesco-visão-especialista'>
                          <p>Nivel de Parentesco:</p>
                          <input type="text" />
                        </div>
                        <div className='telefone-responsavel-especialista'>
                            <p>Telefone:</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='div-text-visao-especialista'>
                             <textarea className='texte-area-visao-especialista' name="" id="">Gosto de:</textarea>
                    </div>

               </div>
           </div>
           <div className='div-img-conversar-especialista'>
               <div className='mudar-imagem-visao-especialista'>
               <img
                   src={imagem || 'tela de contrato.png'}
                   alt="Clique para mudar"
                   className="imagem-preview-verperfil-especialista"
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
               <div className='botao-conversar-visao-especialista'>
                  <Link to = "/verperfilviespe" className = 'buttons-ajustes-visao-tea'>Ver Perfil</Link>
               </div>
        </div>

      </div>
    )
  }
  
  export default VisaoEspecialista
  