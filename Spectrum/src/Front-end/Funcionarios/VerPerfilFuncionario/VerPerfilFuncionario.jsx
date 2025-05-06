import './VerPerfilFuncionario.css'
import React, { useRef, useState } from 'react';

function VerPerfilFuncionario() {

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
    <div className='div-principal-ver-perfil'>
      <div className='navbar-ver-perfil'>
        <div className='imagem-ajustar-ver-perfil'>
        <img className='logo-chata-de-arrumar' src="Spectrum.png" alt="" />
        </div>
        <div className='button-voltar-verperfil'>
         <button className='botãozinho-voltar-doveper'>Voltar</button>
         </div>
          </div>
           <div className='container-todos-ver-perfil'>
            <div className='container-text-input-perfil-ver'>
             <div className='inputs-receber-perfil'>
              <div className='nome-pessoa-ver-perfil'>
                <input type="text" />
               </div>
               <div className='container-profissão-ver-perfil'>
               <p>Profissão</p>
              <input type="text" />
              </div>
                 <h3 className='informacoes-de-contato-ver'>Informações de contato:</h3>
                  <div className="contato-linha">
                    <p>Telefone:</p>
                     <input type="text" />
                       </div>

                      <div className="contato-linha">
                      <p>Email:</p>
                      <input type="text" />
                      </div>
                   </div>
             <div className='input-descrição-ver-perfil'>
              <p>Descrição do Especialista</p>
              <textarea className='textinho-lindo' name="descrição" id="1"></textarea>
             </div>
            </div>
          <div className='container-imagem-ver-perfil'>
          <div className='imagem-mudar-perfilverfun'>
      <div className="imagem-container-ver-perfil">
      <img
        src={imagem || 'tela de contrato.png'}
        alt="Clique para mudar"
        className="imagem-preview-verperfil"
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
        </div>
         </div>
        </div>
    </div>
  )
}

export default VerPerfilFuncionario