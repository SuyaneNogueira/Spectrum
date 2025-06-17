// import React, { useEffect, useState } from 'react';
// import './SliderFuncionarios.css';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Lista de funcionários
// const funcionarios = [
//   {
//     id: '1',
//     nome: 'João Antônio',
//     descricao:
//       'Trabalho na reabilitação e inclusão de crianças e adolescentes com TEA, atuando principalmente na integração sensório motora e alterações secundárias no autismo.',
//     imagem: 'Joao-Antonio.png',
//   },
//   {
//     id: '2',
//     nome: 'Bianca Kiers',
//     descricao:
//       'Atuo nas áreas de fisioterapia respiratória e fisioterapia em sono. Reabilito pacientes com distúrbios respiratórios e não respiratórios do sono.',
//     imagem: 'Bianca-Kiers.png',
//   },
//   {
//     id: '3',
//     nome: 'Thais Agostinho',
//     descricao:
//       'Terapeuta Ocupacional, atuando em Apaes de SC por 12 anos, atualmente voltada para estimulação precoce e autismo na infância.',
//     imagem: 'Thais-Agostinho.png',
//   },
//   {
//     id: '4',
//     nome: 'Lucas Silva',
//     descricao:
//       'Psicólogo com foco em terapia comportamental aplicada ao TEA. Experiência com adolescentes e jovens adultos.',
//     imagem: 'Lucas-Silva.png',
//   },
//   {
//     id: '5',
//     nome: 'Mariana Rocha',
//     descricao:
//       'Fonoaudióloga especializada em comunicação alternativa e intervenção precoce para crianças com autismo.',
//     imagem: 'Mariana-Rocha.png',
//   },
//   {
//     id: '6',
//     nome: 'Carlos Mendes',
//     descricao:
//       'Professor de educação física adaptada, trabalhando com inclusão e desenvolvimento motor.',
//     imagem: 'Carlos-Mendes.png',
//   },
// ];

// // Função para agrupar de 3 em 3
// function agruparEmTernos(lista) {
//   const grupos = [];
//   for (let i = 0; i < lista.length; i += 3) {
//     grupos.push(lista.slice(i, i + 3));
//   }
//   return grupos;
// }

// function SliderFuncionarios() {
//   const [gruposFuncionarios, setGruposFuncionarios] = useState([]);

//   useEffect(() => {
//     setGruposFuncionarios(agruparEmTernos(funcionarios));
//   }, []);

//   return (
//     <div className="swiper-container">
//       <Swiper
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         navigation
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         speed={400}
//         modules={[Autoplay, Navigation, Pagination]}
//       >
//         {gruposFuncionarios.map((grupo, index) => (
//           <SwiperSlide key={index}>
//             <div className="grupo-funcionarios">
//               {grupo.map((pessoa) => (
//                 <div key={pessoa.id} className="elemento-funcionario">
//                   <img
//                     className="foto-profissional-funcionarios"
//                     src={pessoa.imagem}
//                     alt={pessoa.nome}
//                   />
//                   <h2>{pessoa.nome}</h2>
//                   <p className="p-descricao-funcionario">{pessoa.descricao}</p>
//                 </div>
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default SliderFuncionarios;
