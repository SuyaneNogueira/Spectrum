import React, { useState, useEffect } from 'react';
import './Slider.css'; // Importando o CSS separado

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

function Slider() {
  const [slidesPerView, setSliderPerview] = useState(1);

  const data = [
    { id: '1', image: '1.png' },
    { id: '2', image: '2.png' },
    { id: '3', image: '3.png' },
  ];

  useEffect(() => {
    function adaptar() {
      if (window.innerWidth < 700) {
        setSliderPerview(1);
      } else {
        setSliderPerview(1);
      }
    }

    adaptar();
    window.addEventListener("resize", adaptar);

    return () => {
      window.removeEventListener("resize", adaptar);
    };
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 6000, disableOnInteraction: false }} // Intervalo entre slides
        speed={300} // Ajusta a velocidade da transição entre os slides (em ms)
        modules={[Autoplay, Navigation, Pagination]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={`Slide ${item.id}`} className="slider-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
