import React, { useState } from 'react'
import  './PerfilFuncionario.css'

function PerfilFuncionario() {
   // Criação de um estado para armazenar a URL da imagem escolhida
   const [imageSrc, setImageSrc] = useState(null);

   // Função para lidar com a mudança de arquivo
   const handleImageChange = (event) => {
     const file = event.target.files[0];
     if (file) {
       const reader = new FileReader();
       reader.onloadend = () => {
         setImageSrc(reader.result); // Armazena a URL da imagem no estado
       };
       reader.readAsDataURL(file); // Lê o arquivo como URL de dados
     }
   }
 
   return (
     <div className="div-all-advogados">
       <div className="div-conteudo">
         <div className="div-perfil-advogados">
           <div className="teste-logo-advogado">
             <img className="teste-img-logo" src="Logo Advocacia.png" alt="" />
           </div>
 
           <div className="div-titulo-advogado">
             <h1>Perfil do Advogado</h1>
           </div>
 
           <div className="div-nome-advogado">
             <p>Nome:</p>
             <input type="text" name="" id="" />
           </div>
           <div className="div-oab-advogado">
             <p>OAB:</p>
             <input type="text" name="" id="" />
           </div>
           <div className="div-especialidades-advogado">
             <p>Especialidades:</p>
             <input type="text" name="" id="" />
           </div>
           <div className="div-descrição-advogado">
             <p>Descrição breve:</p>
             <input type="text" name="" id="" />
           </div>
 
           <div className="div-botao-advogado">
             <button className="button-advogados">Salvar</button>
           </div>
         </div>

         <div className="img-advogado">
           {/* A imagem agora é clicável e chama o seletor de arquivos */}
           <label htmlFor="image-upload">
             <img
               className="img-teste-advogado"
               src={imageSrc || 'Logo Advocacia.png'} // Se não houver imagem, usa a imagem padrão
               alt="Imagem do Advogado"
             />
           </label>
 
           {/* Campo de input invisível para selecionar a imagem */}
           <input
             type="file"
             id="image-upload"
             style={{ display: 'none' }} // Torna o campo de entrada invisível
             accept="image/*"
             onChange={handleImageChange} // Chama a função para atualizar a imagem
           />
         </div>
       </div>
     </div>
   )
}

export default PerfilFuncionario
