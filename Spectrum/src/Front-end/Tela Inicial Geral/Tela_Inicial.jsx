import React from 'react'
import './Tela_Inicial.css'
import { Link } from 'react-router-dom'
// import '../Modal_de_Cadastros/Modal_cadastros.jsx'
function Tela_Inicial() {
  return (
    <div className='conteiner-lading'>
    <div className='lading-entrada'>
      <div className='logo-lading'>
        <div className='button-lading1'>
        <Link to='login' className='button-login-lading'>Login</Link>
        <Link to='funcionarioC' className='button-login-lading'>Cadastro</Link>
        </div>
      </div>
      <div className='container-info'>
        <div className='container-foto-frase'>
          <div className="element1-container-foto-frase">
            <div className="element2-div-foto-spectrum">
              <img className='element3-foto-spectrum' src="Spectrum.png" alt="" />
            </div>
              <div className="element4-text-foto-frase">
                <h2 className='element5-text-style'>Compreender o <span className="texto-tea-destacado">TEA</span> pode ser desafiador, e sabemos que cada jornada é única.</h2>
              </div>
          </div>
        </div> 
        <div className="container-text-principal">
          <div className="element1-text-principal">
            <p className='element2-text-style'>Compreender o TEA pode ser desafiador, e sabemos que cada jornada é única. No Spectrum, queremos tornar esse caminho mais leve, oferecendo informações confiáveis, suporte e acolhimento para autistas, famílias, profissionais e todos que desejam aprender mais sobre o assunto.
            Nosso compromisso é transformar dúvidas em conhecimento, desafios em possibilidades e isolamento em conexão. 
            Aqui, você encontrará conteúdos embasados, dicas práticas e acesso a especialistas que compartilham do mesmo propósito: construir uma sociedade mais inclusiva e compreensiva.
            Porque cada pessoa atípica merece ser vista, respeitada e apoiada em sua singularidade.</p>
          </div>
        </div>
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
        <div className='element1'></div>
        <h2>Marquele Souza</h2>
        <p className='p-descricao-funcionario'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis minima possimus vitae, nobis eum esse nihil qui unde iusto voluptatibus alias, assumenda facere molestias quidem incidunt ipsum soluta repellendus.</p>
      </div>
      <div className="elemento2-funcionarios">
      <div className='element2'></div>
      <h2>Marquele Souza</h2>
      <p className='p-descricao-funcionario'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis minima possimus vitae, nobis eum esse nihil qui unde iusto voluptatibus alias, assumenda facere molestias quidem incidunt ipsum soluta repellendus.</p>
      </div>
      <div className="elemento3-funcionarios">
      <div className='element3'></div>
      <h2>Marquele Souza</h2>
      <p className='p-descricao-funcionario'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis minima possimus vitae, nobis eum esse nihil qui unde iusto voluptatibus alias, assumenda facere molestias quidem incidunt ipsum soluta repellendus.</p>
      </div>
    </div>
    </div>
    <div className="aba-de-perguntas">
    <div className="conteiner-abas">
      <h1 className="titulo-aba">Aba de Perguntas</h1>
    <div className="perguntas-um-dois">
      <div className="perguntas-um">
        <input className='perguntas' type="text" />
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
          <h2>Ainda não tiramos sua duvida?, envie-nos pelo email lawofdefense0302@gmail.com</h2>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className='maps'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.8715904223445!2d-48.51191082444333!3d-27.535448219510954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527470d7aaf826b%3A0x4d3572e8bdd0a188!2sSquare%20SC!5e0!3m2!1spt-BR!2sbr!4v1745861993379!5m2!1spt-BR!2sbr"frameborder="0" className='div-maps'></iframe>
    </div>
    <div className='div-rodape'>
      <div className='container-rodape-logo'> 
        <img className='logo-rodape' src="Logo Advocacia.png" alt="" />
      </div>
      <div className='container-rodape-'></div>
      <div className='container-rodape'></div>
      <div className='container-rodape'></div>
    </div>
    
    </div>
  )
}

export default Tela_Inicial
