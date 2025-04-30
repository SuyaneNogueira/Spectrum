import React from 'react'
import './VerPerfilFuncionario.css'

function VerPerfilFuncionario() {
  return (
    <div className='div-principal-ver-perfil'>
      <div className='navbar-ver-perfil'>
        <div className='imagem-ajustar-ver-perfil'>
        <img src="" alt="" />
        </div>
        <div className='button-voltar-verperfil'>
         <button>Voltar</button>
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
         </div>
        </div>
    </div>
  )
}

export default VerPerfilFuncionario