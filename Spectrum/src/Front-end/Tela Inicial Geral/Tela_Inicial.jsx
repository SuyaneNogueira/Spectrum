import './Tela_Inicial.css'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Slider from '../Slider/Slider';
import Modal_cadastros from '../../Modal_de_Cadastros/Modal_cadastros';

<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />


function Tela_Inicial() {

  const [isModalcadastroOpen, setIsModalcadastroOpen] = useState(false);

  const toggleModalcadastro = () => {
    setIsModalcadastroOpen(!isModalcadastroOpen);
  };

  return (
    <div className='conteiner-lading'>
    <div className='lading-entrada'>
      <div className='logo-lading'>
        <div className='button-lading1'>
        <Link to='chat' className='button-login-lading'>Chat</Link>
        <Link to='login' className='button-login-lading'>Login</Link>
        <button className='button-login-lading' onClick={toggleModalcadastro} > <Modal_cadastros isOpen={isModalcadastroOpen} onClose={toggleModalcadastro}> </Modal_cadastros>Cadastro</button>
        </div>
      </div>
      <div className='container-info'>
        <div className='container-foto-frase'>
          <div className="element1-container-foto-frase">
            <div className="element2-div-foto-spectrum">
              <img className='element3-foto-spectrum' src="Spectrum.png" alt="" />
            </div>
              <div className="element4-text-foto-frase">
                <h2 className='element5-text-style'>Porque conhecer é acolher. E acolher transforma</h2>
              </div>
          </div>
        </div> 
        <div className="container-text-principal">
          <div className="elements-text-inicial">
            <div className="element1-text-principal">
            <p className='element2-text-style'>Compreender o TEA pode ser desafiador, e sabemos que cada jornada é única. No Spectrum, queremos tornar esse caminho mais leve, oferecendo informações confiáveis, suporte e acolhimento para autistas, famílias, profissionais e todos que desejam aprender mais sobre o assunto.
            Nosso compromisso é transformar dúvidas em conhecimento, desafios em possibilidades e isolamento em conexão. 
            Aqui, você encontrará conteúdos embasados, dicas práticas e acesso a especialistas que compartilham do mesmo propósito: construir uma sociedade mais inclusiva e compreensiva.
            Porque cada pessoa atípica merece ser vista, respeitada e apoiada em sua singularidade.</p>
          </div>
          </div>
          <div className="container-foto-maozinhas">
            <img className="foto-maozinhas" src="bonecos-ideia2.png" alt="" />
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
      <details>
        <summary>O que é o Transtorno do Espectro Autista (TEA)?</summary>
        <p class="conteudo-explicativo">O TEA é uma condição do neurodesenvolvimento caracterizada por diferenças na comunicação, no comportamento social e nos interesses. Ele é chamado de "espectro" porque se manifesta de diferentes formas e em diferentes intensidades em cada pessoa.</p>
    </details>
    <details>
        <summary>Os conteúdos atendem diferentes idades?</summary>
        <p class="conteudo-explicativo">Sim. Nossos materiais são pensados para crianças, adolescentes, jovens, adultos e idosos. Buscamos contemplar a pluralidade do espectro com carinho e respeito.</p>
    </details>
    <details>
        <summary>Como funciona o diagnóstico do TEA?</summary>
        <p class="conteudo-explicativo">O diagnóstico é feito por profissionais especializados, como uma equipe multiprofissional, e o médico responsável com base em observações clínicas, entrevistas com responsáveis e, o uso de instrumentos padronizados. Ele segue os critérios estabelecidos pelo DSM-5-TR.</p>
    </details>
      </div>
    <div className="perguntas-dois">
    <details>
        <summary>Quais terapias são mais indicadas para pessoas com TEA?</summary>
        <p class="conteudo-explicativo">As terapias variam de acordo com as necessidades individuais. Algumas opções incluem: Neuropsicopedagogia, Terapia Ocupacional, Fisioterapia, Fonoaudiologia, Psicologia e ABA. O mais importante é que o acompanhamento respeite a individualidade da pessoa.
        </p>
    </details>
    <details>
        <summary>Quais são os primeiros sinais de TEA em crianças?</summary>
        <p class="conteudo-explicativo">Os sinais variam, mas entre os mais comuns estão: dificuldades de interação social, atraso na fala, comportamentos repetitivos, pouco contato visual e sensibilidade a sons ou texturas. É importante lembrar que cada criança se desenvolve de forma única.</p>
    </details>
    <details>
        <summary>O que é escuta ativa e por que ela é importante?</summary>
        <p class="conteudo-explicativo">A escuta ativa é ouvir com empatia, sem julgamentos e com presença real. No contexto do TEA, ela é essencial para reconhecer o protagonismo da pessoa atípica e garantir que suas experiências e sentimentos sejam respeitados.</p>
    </details> 
        {/* <div className='text-pergunta-dois'>
          <h2>Ainda não tiramos sua duvida?, envie-nos pelo email Spectrum.TEA0204@gmail.com</h2>
        </div> */}
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

export default Tela_Inicial
