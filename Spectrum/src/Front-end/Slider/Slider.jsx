import React, { useState, useEffect } from 'react'
import './Slider.css'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper,SwiperSlide } from 'swiper/react';

function Slider() {
const[slidesPerView,setSliderPerview] = useState (1)
    const data = [
{id : '1', image: 'Áreas de Atuação.png'},
{ id : '2', image:'Areas de atuacao dois.png' },
{ id : '3', image: 'Areas de atuacao tres.png'},
]

useEffect(() => {

function adaptar (){

    if(window.innerWidth < 700){
        setSliderPerview(1);
    }else{
        setSliderPerview(1);
    }
    }

    adaptar();

    window.addEventListener("funcionar",adaptar)

    return() => {

        window.removeEventListener("funcionar",adaptar)
    }


}, [ ])
  return (
    <div>

<Swiper
slidesPerView={slidesPerView}
pagination = {{clickable: true}}
navigation
>
    {data.map( (item) => (

<SwiperSlide key={item.id}>
<img src = {item.image} alt='Slider' className='slider-item'/>

</SwiperSlide>
    ))}
</Swiper>

    </div>
  )
}

export default Slider