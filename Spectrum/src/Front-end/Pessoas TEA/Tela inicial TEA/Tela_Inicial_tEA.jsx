import React, { useRef, useState } from 'react';
import './Tela_Inicial_TEA.css'
import { Link } from 'react-router-dom'

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
                <Link to = '/' className='butao-custom-tea-inicial'>Informações</Link>
                <Link to = '/' className='butao-custom-tea-inicial'>Estratégias</Link>
                <Link to = '/' className='butao-custom-tea-inicial'>Especialistas</Link>
                <Link to = '/' className='butao-custom-tea-inicial'>Chat</Link>
          </div>
      </div>
      
      <div className='container-pagina-inicial-tea'>
        <div className='div-text-usuario'>
           <div className='div-inputs-tea-o'>
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
      <Link to = "/perfiltea" className = 'perfil-tea'>Ver Perfil</Link>
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
                      <div className='border-text-tea-one'>
                           <div className='mensagem-tea-inicial'>
                              <div className='teste-mensagens-tea'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea'>
                                <input type="text" />
                                <input type="text" />
                               </div>
                           </div> 
                      </div>
                   </div>
                   <div className='linha-mensagens-dois' > 
                      <div className='border-text-tea-dois'>
                            <div className='mensagem-tea-inicial'>
                                <div className='teste-mensagens-tea'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea'>
                                <input type="text" />
                                <input type="text" />
                               </div>
                           </div>
                      </div>
                   </div>
                   <div className='linha-mensagens-treis' >
                         <div className='border-text-tea-tres'>
                              <div className='mensagem-tea-inicial'>
                                   <div className='teste-mensagens-tea'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea'>
                                <input type="text" />
                                <input type="text" />
                               </div>
                              </div>
                         </div>
                   </div>
                   <div className='linha-mensagens-quatro'>
                        <div className='border-text-tea-quatro'>
                            <div className='mensagem-tea-inicial'>
                               <div className='teste-mensagens-tea'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea'>
                                <input type="text" />
                                <input type="text" />
                               </div>     
                           </div>
                        </div>
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

export default Tela_Inicial_tEA
