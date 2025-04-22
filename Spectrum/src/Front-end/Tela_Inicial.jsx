import React from 'react'
import './Tela_Inicial.css'
import { Link } from 'react-router-dom'
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
      <div className='bem-vindo-lading'>
        <h1 className='h1-bem-vindo'>Bem vindo(a)!</h1>
        <div className='text-bem-vindo'>
        <p className='p-bem-vindo'>Compreender o TEA pode ser desafiador, e sabemos que cada jornada é única. No Spectrum, queremos tornar esse caminho mais leve, oferecendo informações confiáveis, suporte e acolhimento para autistas, famílias, profissionais e todos que desejam aprender mais sobre o assunto.
        Nosso compromisso é transformar dúvidas em conhecimento, desafios em possibilidades e isolamento em conexão. 
        Aqui, você encontrará conteúdos embasados, dicas práticas e acesso a especialistas que compartilham do mesmo propósito: construir uma sociedade mais inclusiva e compreensiva.
        Porque cada pessoa atípica merece ser vista, respeitada e apoiada em sua singularidade.</p>
        </div>
      </div>
      <div className='foto-profissional'>
          <img className='foto-spectrum-fundoazul' src="Spectrum.png" alt="" />
      </div>
      </div>
    </div>


    <div className='lading-areas-atuacao'>
    <div className='espaco-areas'>
      <div className='container-areas-atuacao'>
        <div className='container-um'>
          <div className='elemento-container-um'>
          </div>
        </div>
        <div className='container-dois'>
          <div className='elemento-container-dois'>
          </div>
        </div>
        <div className='container-tres'>
          <div className='elemento-container-tres'>
          </div>
        </div>
      </div>
      <div className='detalhe-areas-atuacao'>
        <div className='elemento-detalhes'></div>
      </div>
      <div className='titulo-areas-atuacao'>
        <h1 className='h1-areas'>Áreas de</h1>
        <h1 className='h1-atuacao'>Atuação</h1>
      </div>
    </div>
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
    <div className='maps'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.827156200581!2d-48.65147962366556!3d-27.59888782222461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274a0572f73525%3A0x617da686c2b7d331!2sR.%20Pedro%20Paulo%20de%20Abreu%20-%20Forquilhinhas%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1743445035536!5m2!1spt-BR!2sbr"
    frameborder="0" className='div-maps'></iframe>
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
