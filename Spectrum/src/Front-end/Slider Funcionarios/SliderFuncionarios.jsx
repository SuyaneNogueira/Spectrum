import React, { useEffect, useState } from 'react';
import './SliderFuncionarios.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Lista de funcionários
const funcionarios = [
  {
    id: '1',
    nome: 'João Antônio',
    descricao:
      'Trabalho na reabilitação e inclusão de crianças e adolescentes com TEA, atuando principalmente na integração sensório motora e alterações secundárias no autismo.',
    imagem: 'Joao-Antonio.png',
  },
  {
    id: '2',
    nome: 'Tatiana',
    descricao:
      'Trabalho com estimulação precoce com foco nas dificuldades alimentares e de comunicação da infância.',
    imagem: 'Tatiana.jpeg',
  },
  {
    id: '3',
    nome: 'Sideli Cardoso',    
    descricao:
      'Atuo auxiliando o paciente no desenvolvimento humano e na aprendizagem.',
    imagem: 'Sideli.jpeg',
  },
  {
    id: '4',
    nome: 'Ruan Souza',
    descricao:
      'Trabalho com desenvolvimento infantil, com crianças típicas e atípicas, que possam apresentar alguma alteração sensoriomotora!',
    imagem: 'Ruan.jpeg',
  },
  {
    id: '5',
    nome: 'Mayara Koerich',
    descricao:
      'atendo crianças desde o nascimento que apresentem algum atraso de desenvolvimento, síndromes ou estejam dentro do espectro autismo para auxiliar no fortalecimento e melhora sensorial.',
    imagem: 'Mayara.jpeg',
  },
  {
    id: '6',
    nome: 'Bárbara Bueno',
    descricao:
      'trabalho no apoio ao desenvolvimento cognitivo de crianças, jovens e adultos com TEA.',
    imagem: 'Bárbara.jpeg',
  },
  {
    id: '7',
    nome: 'Bianca Kiers',
    descricao:
      'atuo nas áreas de fisioterapia respiratória e fisioterapia em sono.  Reabilito pacientes com distúrbios respiratórios e não respiratórios do sono, como apneia obstrutiva do sono,  insônia,  bruxismo e síndrome das pernas inquietas..',
    imagem: 'Bianca-Kiers.png',
  },
  {
    id: '8',
    nome: 'Amanda',
    descricao:
      'Trabalho com avaliação, estimulação cognitiva e intervenção precoce contribuindo para o processo de ensino aprendizagem.',
    imagem: 'Amanda.jpeg',
  },
  {
    id: '9',
    nome: 'Thais Agostinho',
    descricao:
      'Terapeuta Ocupacional, graduada pelo centro universitário São camilo em 2005 atuando em Apaes de SC por 12 anos atualmente voltado para estimulação precoce e autismo na infância.',
    imagem: 'Thais-Agostinho.png',
  },
];

// Função para agrupar de 3 em 3
function agruparEmTernos(lista) {
  const grupos = [];
  for (let i = 0; i < lista.length; i += 3) {
    grupos.push(lista.slice(i, i + 3));
  }
  return grupos;
}

function SliderFuncionarios() {
  const [gruposFuncionarios, setGruposFuncionarios] = useState([]);

  useEffect(() => {
    setGruposFuncionarios(agruparEmTernos(funcionarios));
  }, []);

  return (
    <div className="swiper-container-funcionarios">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        speed={400}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {gruposFuncionarios.map((grupo, index) => (
          <SwiperSlide key={index}>
            <div className="grupo-funcionarios">
              {grupo.map((pessoa) => (
                <div key={pessoa.id} className="elemento-funcionario">
                  <img
                    className="foto-profissional-funcionarios"
                    src={pessoa.imagem}
                    alt={pessoa.nome}
                  />
                  <h2 className='h2-nome-funcionarios'>{pessoa.nome}</h2>
                  <p className="p-descricao-funcionario">{pessoa.descricao}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderFuncionarios;
