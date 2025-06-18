import React, { useRef, useState } from 'react';
import './Tela_Inicial_Profissionais.css';
import { Link, useNavigate } from 'react-router-dom';

function Tela_Inicial_Profissionais() {
  const [imagem, setImagem] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

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

  const abrirChat = (usuario) => {
    navigate(`/chat?conversa=${usuario}`);
  };

  return (
    <div className='container-inicial-profissional'>
      <div className='navbar-profissional-inicial'>
        <div className='img-navbar-profissional-inicial'>
          <img src="tela de contrato.png" alt="" />
            </div>
               <div className='button-tea-inicial'>
                <Link to = "/" className='butao-custom-tea-inicial'>Informações</Link>
                <Link to = "/estrategiasS" className='butao-custom-tea-inicial'>Estratégias</Link>
                <Link to = "/" className='butao-custom-tea-inicial'>Especialistas</Link>
                <Link 
  to="/chat" 
  state={{ from: 'telainicialprofissionais' }} 
  className="butao-custom-tea-inicial"
>
  Chat
</Link>

          </div>
      </div>

      <div className="profile-container">
  <div className="profile-info">
    <h2>Sideli Cardoso</h2>
    <p>Profissão: Neuropsicopedagoga</p>
    <div className="profile-contact">
      <p>Informações de Contato</p>
      <p>Telefone: (48) 99963-9709 </p>
      <p>Email: sideli_neuropp@yahoo.com </p>
    </div>
    <div className="description-box">
      Descrição do Profissional
    </div>
  </div>

  <div style={{ textAlign: 'center' }}>
    <img src="/Sideli-Cardoso.png" alt="Sideli Cardoso" className="profile-image" />
    <button className="view-profile-button">Ver Perfil</button>
  </div>
</div>


      <div className='respostas-container-chat-tea'>
        <div className='linha-divisoria'></div>
        <div className='mensagens-chat-tea'>
          <p>Novas Mensagens</p>
        </div>
        <div className='respostas-chat-tea'>
          <div className='linha-mensagens-um' onClick={() => abrirChat('Joao_Antonio')}>
            <div className='border-text-tea-one'>
              <div className='mensagem-tea-inicial'>
                <div className='teste-mensagens-tea'><img src="Joao-Antonio.png" alt="" /></div>
                <div className='inputs-receber-cadas-tea'>
                  <input type="text" value="João Antônio" readOnly />
                  <input type="text" value="Olá, tudo bem?" readOnly />
                </div>
              </div>
            </div>
          </div>
          {/* As demais linhas podem ser mantidas ou adaptadas para outras conversas futuras */}
        </div>
      </div>

      <div className='maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.8715904223445!2d-48.51191082444333!3d-27.535448219510954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527470d7aaf826b%3A0x4d3572e8bdd0a188!2sSquare%20SC!5e0!3m2!1spt-BR!2sbr!4v1745861993379!5m2!1spt-BR!2sbr" frameBorder="0" className='div-maps'></iframe>
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
  );
}

export default Tela_Inicial_Profissionais;
