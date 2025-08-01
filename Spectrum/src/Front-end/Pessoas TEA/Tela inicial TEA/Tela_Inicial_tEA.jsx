import React, { useRef, useState, useEffect } from 'react';
import './Tela_Inicial_TEA.css';
import { Link } from 'react-router-dom';

function Tela_Inicial_tEA() {
  const [imagem, setImagem] = useState(null);
  const inputRef = useRef(null);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarios = JSON.parse(localStorage.getItem('usuariosTEA')) || [];
    const ultimo = usuarios[usuarios.length - 1];
    if (ultimo) setUsuario(ultimo);
  }, []);

  const handleImagemClick = () => inputRef.current.click();

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
    <div className='container-inicial-tea-real'>
      <div className='navbar-tea-inicial-real'>
        <div className='img-navbar-tea-inicial-real'>
          <img src="tela de contrato.png" alt="" />
        </div>
        <div className='button-tea-inicial-real'>
          <Link to='/embreve' className='butao-custom-tea-inicial-real'>Informações</Link>
          <Link to='/estrategiasS' className='butao-custom-tea-inicial-real'>Estratégias</Link>
          <Link to='/embreve' className='butao-custom-tea-inicial-real'>Especialistas</Link>
          <Link to="/chat" state={{ from: 'telaitea' }} className="butao-custom-tea-inicial-real">Chat</Link>
        </div>
      </div>

      <div className='container-pagina-inicial-tea-real'>
        <div className='div-text-usuario-real'>
          <div className='div-inputs-tea-o-real'>
            <p className='paragrafo-lindo-do-tela-tea-real'>
              {usuario ? (
                <>
                  Olá meu nome é {usuario.nome}, Tenho {usuario.formacao} anos, Meu nível de suporte é 01,<br/>
                  Meu diagnóstico foi realizado em {usuario.pergunta3 || 'Data não informada'}, Gosto de fazer origamis.
                </>
              ) : 'Carregando informações...'}
            </p>
          </div>
        </div>

        <div className='div-foto-perfil-e-butao-real'>
          <div className="imagem-container-perfil-tea-real">
            <img
              src={imagem || 'tela de contrato.png'}
              alt="Clique para mudar"
              className="imagem-preview-ver-tea-real"
              onClick={handleImagemClick}
            />
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleImagemSelecionada}
              style={{ display: 'none' }}
            />
            {imagem && <button className="remover-botao" onClick={removerImagem}>Remover imagem</button>}
          </div>
          <div className='botao-ver-perfil-tea-real'>
            <Link to="/verperfiltea" className='perfil-tea-real'>Ver Perfil</Link>
          </div>
        </div>
      </div>
         <div className='respostas-container-chat-tea-real'>
            <div className='linha-divisoria-real'></div>
              <div className='mensagens-chat-tea-real'>
                 <p>CHAT</p>
           </div>
               <div className='respostas-chat-tea-real'>
                   <div className='linha-mensagens-um-real'>
                      <div className='border-text-tea-one-real'>
                           <div className='mensagem-tea-inicial-real'>
                              <div className='teste-mensagens-tea-real'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea-real'>
                                <input type="text" />
                                <input type="text" />
                               </div>
                           </div> 
                      </div>
                   </div>
                   <div className='linha-mensagens-dois-real' > 
                      <div className='border-text-tea-dois-real'>
                            <div className='mensagem-tea-inicial-real'>
                                <div className='teste-mensagens-tea-real'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea-real'>
                                <input type="text" />
                                <input type="text" />
                               </div>
                           </div>
                      </div>
                   </div>
                   <div className='linha-mensagens-treis-real' >
                         <div className='border-text-tea-tres-real'>
                              <div className='mensagem-tea-inicial-real'>
                                   <div className='teste-mensagens-tea-real'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea-real'>
                                <input type="text" />
                                <input type="text" />
                               </div>
                              </div>
                         </div>
                   </div>
                   <div className='linha-mensagens-quatro-real'>
                        <div className='border-text-tea-quatro-real'>
                            <div className='mensagem-tea-inicial-real'>
                               <div className='teste-mensagens-tea-real'><img src="Spectrum.png" alt="" /></div>
                               <div className='inputs-receber-cadas-tea-real'>
                                <input type="text" />
                                <input type="text" />
                               </div>     
                           </div>
                        </div>
                   </div>
               </div>
         </div>
        {/* /////////////////////////////////////////////////////////////////////// */}
     
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
