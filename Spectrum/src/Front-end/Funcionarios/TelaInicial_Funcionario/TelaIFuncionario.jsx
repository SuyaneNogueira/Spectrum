import React, { useState } from 'react'
import './TelaIFuncionario.css'
import { Link } from 'react-router-dom';
function TelaIFuncionario() {

  return (
 <div className='conteiner-lading'>
    <div className='lading-entrada'>
      <div className='logo-lading'>
        <div className='button-lading1'>
        <Link to='chat' className='button-navbar-TelaIResponsavel'>informacoes</Link>
        <Link to='login' className='button-navbar-TelaIResponsavel'>Estratégias</Link>
        <Link to='funcionarioC' className='button-navbar-TelaIResponsavel'>Especialistas</Link>
        <Link to='chat' className='button-navbar-TelaIResponsavel'>Chat</Link>
        </div>
      </div>
      <div className='container-info-especialista'>
     <div className='descricao-perfil'>

      <div className='descricao'>
        <h4>Olá sou a Samanta Machado,</h4> 
        <h4>Tenho 45 anos, </h4>
        <h4>Sou formada em piscicologia e neuropedagogia </h4>
      </div>
      
     </div>
     <div className='conteiner-perfil'>
      <div className='foto-perfil'>
        <h2>kkkkkkkk</h2>
      </div>
      <div className='botao-ver-perfil'>
        <h3>ddddd</h3>
      </div>
     </div>
      </div>
    </div>
    <div className='barra-de-separacao'>
yyy
    </div>
    <div className='chegada-de-mensagens'>
<h1>gg</h1>
    </div>
    <div className="aba-de-perguntas">
    <div className="conteiner-abas">
      <h1 className="titulo-aba">Aba de Perguntas</h1>
    <div className="perguntas-um-dois">
      <div className="perguntas-um">
        <input className='perguntas' type="select" /> 
        <input className='perguntas' type="text" />   
        <input className='perguntas' type="text" />   
        <input className='perguntas' type="text" />   
      </div>
    <div className="perguntas-dois">
        <input className='perguntas' type="text" /> 
        <input className='perguntas' type="text" /> 
        <input className='perguntas' type="text" /> 
        <input className='perguntas' type="text" /> 
        <div className='text-pergunta-dois'>
          <h2>Ainda não tiramos sua duvida?, envie-nos pelo email Spectrum.TEA0204@gmail.com</h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className='maps'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.8715904223445!2d-48.51191082444333!3d-27.535448219510954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527470d7aaf826b%3A0x4d3572e8bdd0a188!2sSquare%20SC!5e0!3m2!1spt-BR!2sbr!4v1745861993379!5m2!1spt-BR!2sbr"frameborder="0" className='div-maps'></iframe>
    </div>
    <div className='div-rodape'>
      <div className='container-rodape-logo'> 
        <img className='logo-rodape' src="Spectrum-branco.png" alt="" />
      </div>
      <div className="endereco-rodape">
        <h2>Endereço</h2>
        <h3 className='element-endereco-rodape'>Lagoa B Square SC - Rod. José Carlos Daux, 5500 - Loja 9 e 10 - Santo Antonio de Lisboa, Florianópolis - SC, 88032-005</h3>
      </div>
      <div className="contato-rodape">
        <h2>Contatos</h2>
        <h3 className='element-contato-rodape'>(48) 98820-5620</h3>
        <h3 className='element-contato-rodape'>(48) 99195-1758</h3>
      </div>
      <div className="redes-sociais-rodape">
        <h2>Redes Sociais</h2>
        <div className='Simbolos-redes-rodape'>
          <Link to=""><img className='Simbolo-insta-linkedin' src="Simbolo-Instagram.png" alt="Simbolo do Instagram"/></Link>
          <Link to=""><img className='Simbolo-insta-linkedin' src="Simbolo-LinkedIn.png" alt="" /></Link>
        </div>
      </div>
    </div>
    
    </div>

  )
}

export default TelaIFuncionario
