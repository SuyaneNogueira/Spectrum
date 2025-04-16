import './PerfilFuncionario.css'
import React, { useRef, useState } from 'react';

function PerfilFuncionario() {

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
    <div className='container-geral-funcionarios'>
      <div className='nao-navbar-funcionario'>
        <div className='div-imagem-funcionarios'>
          <img src="tela de contrato.png" alt="" />
         </div>
         <div className='titulo-funcionarios-perfil'>
         <h1>Perfil do Funcionario</h1>
   </div>
     <div className='botao-perfil-funcionarios'>
       <button className='botao-voltar-perfil-funcionarios'>VOLTAR</button>
    </div>
</div>
    <div className='all-divs-funcionarios'>
       <div className='div-um-funcionarios'>
       <div className="div-inputs-perfil-funcio">
  <div className="linha-input">
    <p className="paragrafo-gostosinho">Nome:</p>
    <input type="text" />
  </div>

  <div className="linha-input">
    <p className="paragrafo-gostosinho">Profissão:</p>
    <input type="text" />
  </div>

  <div className="linha-input">
    <p className="paragrafo-gostosinho">Email:</p>
    <input type="text" />
  </div>

  <div className="linha-input">
    <p className="paragrafo-gostosinho">Telefone:</p>
    <input type="text" />
  </div>

  <div className="linha-input">
    <p className="paragrafo-gostosinho">Senha:</p>
    <input type="text" />
  </div>
</div>
         <div className='ajuste-buttons-salvar-pe-fu'>
         <button className='button-salvar-perfil-funcio'>Salvar</button>
         </div>
         </div>
     <div className='div-dois-funcionarios'> 
      <div className='imagem-mudar-perfil-fun'>
      <div className="imagem-container">
      <img
        src={imagem || 'tela de contrato.png'}
        alt="Clique para mudar"
        className="imagem-preview"
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
          <div className='descrição-profissional-perfil'>
         <p>Breve Descrição</p>
         <input type="text" name="" id="" />
      </div>
   </div>       
</div>

    </div>
  )
}

export default PerfilFuncionario