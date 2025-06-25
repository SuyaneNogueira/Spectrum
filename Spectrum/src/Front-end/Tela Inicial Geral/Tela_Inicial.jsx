import './Tela_Inicial.css'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Slider from '../Slider/Slider';
import Modal_cadastros from '../Modals/Modal_cadastros';
import SliderFuncionarios from '../Slider Funcionarios/SliderFuncionarios';
// Importe o ícone do Font Awesome para o Instagram, se estiver usando react-icons
import { FaInstagram } from 'react-icons/fa'; // Adicione esta linha se for usar FaInstagram

// Bootstrap link - geralmente colocado no <head> do index.html ou importado no CSS global
// <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />


function Tela_Inicial() {

  const [isModalcadastroOpen, setIsModalcadastroOpen] = useState(false);

  const toggleModalcadastro = () => {
    setIsModalcadastroOpen(!isModalcadastroOpen);
  };

  // Funções vazias para exemplo, remova se não forem usadas
  const botaoInstagram = () => {
    // console.log("Botão Instagram clicado, mas o link já faz o trabalho!");
  };

  return (
    <div className='conteiner-lading'>
      <div className='lading-entrada'>
        <div className='logo-lading'>
          <div className='button-lading1'>
            <Link to='/loginprofissionais' className='button-login-lading'>Login</Link>
            <button className='button-login-lading' onClick={toggleModalcadastro}>
              <Modal_cadastros isOpen={isModalcadastroOpen} onClose={toggleModalcadastro}> </Modal_cadastros>
              Cadastro
            </button>
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
        <Slider />
      </div>

      <SliderFuncionarios />

      <div className="aba-de-perguntas">
        <div className="conteiner-abas">
          <h1 className="titulo-aba">Aba de Perguntas</h1>
          <div className="perguntas-um-dois">
            <div className="perguntas-um">
              <details>
                <summary>O que é o Transtorno do Espectro Autista (TEA)?</summary>
                <p className="conteudo-explicativo">O TEA é uma condição do neurodesenvolvimento caracterizada por diferenças na comunicação, no comportamento social e nos interesses. Ele é chamado de "espectro" porque se manifesta de diferentes formas e em diferentes intensidades em cada pessoa.</p>
              </details>
              <details>
                <summary>Os conteúdos atendem diferentes idades?</summary>
                <p className="conteudo-explicativo">Sim. Nossos materiais são pensados para crianças, adolescentes, jovens, adultos e idosos. Buscamos contemplar a pluralidade do espectro com carinho e respeito.</p>
              </details>
              <details>
                <summary>Como funciona o diagnóstico do TEA?</summary>
                <p className="conteudo-explicativo">O diagnóstico é feito por profissionais especializados, como uma equipe multiprofissional, e o médico responsável com base em observações clínicas, entrevistas com responsáveis e, o uso de instrumentos padronizados. Ele segue os critérios estabelecidos pelo DSM-5-TR.</p>
              </details>
            </div>
            <div className="perguntas-dois">
              <details>
                <summary>Quais terapias são mais indicadas para pessoas com TEA?</summary>
                <p className="conteudo-explicativo">As terapias variam de acordo com as necessidades individuais. Algumas opções incluem: Neuropsicopedagogia, Terapia Ocupacional, Fisioterapia, Fonoaudiologia, Psicologia e ABA. O mais importante é que o acompanhamento respeite a individualidade da pessoa.
                </p>
              </details>
              <details>
                <summary>Quais são os primeiros sinais de TEA em crianças?</summary>
                <p className="conteudo-explicativo">Os sinais variam, mas entre os mais comuns estão: dificuldades de interação social, atraso na fala, comportamentos repetitivos, pouco contato visual e sensibilidade a sons ou texturas. É importante lembrar que cada criança se desenvolve de forma única.</p>
              </details>
              <details>
                <summary>O que é escuta ativa e por que ela é importante?</summary>
                <p className="conteudo-explicativo">A escuta ativa é ouvir com empatia, sem julgamentos e com presença real. No contexto do TEA, ela é essencial para reconhecer o protagonismo da pessoa atípica e garantir que suas experiências e sentimentos sejam respeitados.</p>
              </details>
              {/* <div className='text-pergunta-dois'>
                <h2>Ainda não tiramos sua duvida?, envie-nos pelo email Spectrum.TEA0204@gmail.com</h2>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='maps'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.8715904223445!2d-48.51191082444333!3d-27.535448219510954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527470d7aaf826b%3A0x4d3572e8bdd0a188!2sSquare%20SC!5e0!3m2!1spt-BR!2sbr!4v1745861993379!5m2!1spt-BR!2sbr" frameBorder="0" className='div-maps'></iframe>
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
            <a
              href="https://www.instagram.com/tea.spectrum/"
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Recomendado para segurança ao usar target="_blank"
              aria-label="Visite o perfil do Instagram da Tea Spectrum" // Para acessibilidade
              className='button-icone-redes' 
            >
              <img className='Simbolo-insta-linkedin' src="Simbolo-Instagram.png" alt="Símbolo do Instagram" />
            </a>

            {/* LinkedIn - O Link do react-router-dom é para navegação interna, ajuste se for um link externo */}
            <a href="https://www.linkedin.com/seu-perfil" target="_blank" rel="noopener noreferrer">
              <img className='Simbolo-insta-linkedin' src="Simbolo-LinkedIn.png" alt="Símbolo do LinkedIn" />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tela_Inicial;