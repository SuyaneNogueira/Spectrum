import React, { useState } from 'react';
import "./Modal_adicionar.css";

const getYouTubeVideoId = (url) => {
 const regExp = /(?:http?s?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/g;
 const match = regExp.exec(url);
 return (match && match[1].length === 11) ? match[1] : null;
};

function Modal_adicionar({ isOpen, onClose, children }) {
 const [titulo, setTitulo] = useState('');
 const [conteudo, setConteudo] = useState('');
 const [videoUrl, setVideoUrl] = useState('');
    // Novo estado para controlar a mensagem de sucesso
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

 if (!isOpen) return null;

 const handleTituloChange = (e) => { setTitulo(e.target.value); };
 const handleConteudoChange = (e) => { setConteudo(e.target.value); };
 const handleVideoUrlChange = (e) => { setVideoUrl(e.target.value); };

 const handleSubmit = () => {
  console.log("Dados salvos:", { titulo, conteudo, videoUrl });
        // Após o envio exibe a mensagem:
        setShowSuccessMessage(true);
        
        setTimeout(() => {
            setShowSuccessMessage(false); 
            setTitulo(''); 
            setConteudo('');
            setVideoUrl(''); 
            onClose(); 
        }, 3000);
 };

 const youtubeVideoId = getYouTubeVideoId(videoUrl);
 const isYouTubeVideo = youtubeVideoId !== null;
 const youtubeEmbedUrl = isYouTubeVideo
  ? `https://www.youtube.com/embed/${youtubeVideoId}` // Corrigido para o formato embed
  : '';

 return (
  <div className="modal-overlay-adicionar">
   <div className='modal-arrumar2'> 
    {children}
   </div>

   <div className="elements-adicionar-estrategias">
                <div className='div_do_xzinho2'>
        <button className='x_arruma2' onClick={onClose}>X</button>
    </div>

                {/* Mensagem de sucesso condicional */}
                {showSuccessMessage ? (
                    <div className="success-message">
                        <p>Estratégia enviada para análise!</p>
                        <p>Agradecemos sua contribuição.</p>
                    </div>
                ) : (
                    // Conteúdo original do formulário
                    <div className="organizacao-div">
         <div className="titulo-element-um">
          <h3>Coloque o título de sua preferência</h3>
          <textarea
           className='titulo-escolhido'
           value={titulo}
           onChange={handleTituloChange}
           placeholder="Título da sua estratégia"
          ></textarea>
         </div>
         <div className="conteudo-element-dois">
          <h3>Coloque o conteúdo de sua preferência</h3>
          <textarea
           className='text-escolhido'
           value={conteudo}
           onChange={handleConteudoChange}
           placeholder="Descreva sua estratégia aqui..."
          ></textarea>
         </div>
         <div className="video-element-tres">
          <h3>Coloque o link do vídeo de sua preferência</h3>
          <input
           type="text"
           className='video-url-input'
           value={videoUrl}
           onChange={handleVideoUrlChange}
           placeholder="Cole a URL do vídeo aqui"
          />

          {videoUrl && ( 
           isYouTubeVideo ? (
            <iframe
             width="560"
             height="315" 
             src={youtubeEmbedUrl}
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin"
             allowFullScreen
            ></iframe>
           ) : (
            <video controls className='video-preview'>
             <source src={videoUrl} type="video/mp4" /> 
             Seu navegador não suporta a tag de vídeo.
            </video>
           )
          )}
         </div>
        <button className='botao-salvar-estrategias' onClick={handleSubmit}>Adicionar Estratégia</button>
        </div>
                )}
   </div>
  </div>
 );
}

export default Modal_adicionar;