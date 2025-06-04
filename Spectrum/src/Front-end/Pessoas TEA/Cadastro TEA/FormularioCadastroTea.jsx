import React from 'react'
import './FormularioCadastroTea.css'
import { Link } from 'react-router-dom'

function FormularioCadastroTea() {
  return (
    <div className='container-formulario-tea-all'>
      <div className='inputs-formulario-tea'>
          <div className='botao-voltar-formu-tea'>
             <Link to = "/cadastrotea">Voltar</Link>
          </div>
          <div className='inputs-cadastro-tea'>
               <div className='suaidade-input-formulario-tea'>
                  <p>Sua Idade:</p>
                  <input type="Number" />
               </div>
               <div className='anonascimento-formulario-tea'>
                     <p>Em que ano você nasceu?:</p>
                     <input type="text"/>
               </div>
               <div className='diagnostivo-formulario-tea'>
                    <p>Você já foi diagnosticado com TEA?:</p>
                    <input type="text" />
               </div>
               <div className='se-sim-formulario-tea'>
                     <p>Se sim quando?</p>
                     <input type="date"  />
               </div>
          </div>
          <div className='button-proximo-formu-tea-um'>
              <button className='buton-proximo-formulario-tea'>Proximo</button>
          </div>
      </div>
      <div className='imagem-formulario-tea'>
          <img className='img-ajustes-formulario-tea' src="Spectrum.png" alt="" />
      </div>
    </div>
  )
}

export default FormularioCadastroTea
