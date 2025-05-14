import React, { useState } from 'react'
import './TelaIFuncionario.css'
import Slider from '../../Slider/Slider';
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
      <div className='container-info'>
     <h4>igggggggggggggggggggggggggggggggggggggggggggggg</h4><h1>gggggggggggggggggggggggggggggggggggggggggggggggggggggu</h1>
      </div>
    </div>


    <div className='lading-areas-atuacao'>
    <Slider/>
    </div>
    <div className='lading-funcionarios'>
    <div className='titulo-funcionarios'>
      <h1 className='funcionarios-t'>Funcionários</h1>
    </div>
    <div className='container-funcionarios'>
      <div className="elemento1-funcionarios">
        <div className='element1'><img className='foto-profissional-funcionarios' src="Joao-Antonio.png" alt="" /></div>
        <h2>João Antônio</h2>
        <p className='p-descricao-funcionario'>Trabalho na reabilitação e inclusão de crianças e adolescentes com TEA , atuando principalmente na integração sensório motora e alterações secundárias no autismo.</p>
      </div>
      <div className="elemento2-funcionarios">
      <div className='element2'><img className='foto-profissional-funcionarios' src="Bianca-Kiers.png" alt="" /></div>
      <h2>Bianca Kiers</h2>
      <p className='p-descricao-funcionario'>Atuo nas áreas de fisioterapia respiratória e fisioterapia em sono.  Reabilito pacientes com distúrbios respiratórios e não respiratórios do sono, como apneia obstrutiva do sono,  insônia,  bruxismo e síndrome das pernas inquietas.</p>
      </div>
      <div className="elemento3-funcionarios">
      <div className='element3'><img className='foto-profissional-funcionarios' src="Thais-Agostinho.png" alt="" /></div>
      <h2>Thais Agostinho</h2>
      <p className='p-descricao-funcionario'>Terapeuta Ocupacional, graduada pelo centro universitário São camilo em 2005 atuando em Apaes de SC por 12 anos atualmente voltado para estimulação precoce e autismo na infância.</p>
      </div>
    </div>
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
