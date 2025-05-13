import React, { useRef, useState } from 'react';
import './Tela_Inicial_TEA.css'

function Tela_Inicial_tEA() {

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
    <div className='container-inicial-tea'>
      <div className='navbar-tea-inicial'>
        <div className='img-navbar-tea-inicial'>
          <img src="tela de contrato.png" alt="" />
            </div>
               <div className='button-tea-inicial'>
                <button className='butao-custom-tea-inicial'>Informações</button>
                <button className='butao-custom-tea-inicial'>Estratégias</button>
                <button className='butao-custom-tea-inicial'>Especialistas</button>
                <button className='butao-custom-tea-inicial'>Chat</button>
          </div>
      </div>
      
      <div className='container-pagina-inicial-tea'>
        <div className='div-text-usuario'>
           <div className='div-inputs-tea'>
            <p className='paragrafo-lindo-do-tela-tea'>Olá meu nome é Fernanda Cardoso Marciano, Tenho 18 anos, Meu nível de suporte é 01,
             Meu diagnóstico foi realizado em 02/05/2025, Gosto de fazer origamis.
             </p>
             <p className='paragrafo-lindo-do-tela-tea-dois'> ** Meu responsável é Sideli Cardoso, é meu/minha mãe**</p>
           </div>
          </div>
        <div className='div-foto-perfil-e-butao'>
      <div className="imagem-container-perfil-tea">
      <img
        src={imagem || 'tela de contrato.png'}
        alt="Clique para mudar"
        className="imagem-preview-ver-tea"
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
      <div className='botao-ver-perfil-tea'>
       <button className='perfil-tea'>Ver Perfil</button>
      </div>
      </div>
    </div>
         <div className='respostas-container-chat-tea'>
            <div className='linha-divisoria'></div>
              <div className='mensagens-chat-tea'>
                 <p>CHAT</p>
           </div>
               <div className='respostas-chat-tea'>
                   <div className='linha-mensagens-um'>

                   </div>
                   <div className='linha-mensagens-dois' > 

                   </div>
                   <div className='linha-mensagens-treis' >

                   </div>
                   <div className='linha-mensagens-quatro'>

                   </div>
               </div>
         </div>
  </div>
  )
}

export default Tela_Inicial_tEA
