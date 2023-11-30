import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    // className='banner'
    <div >
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper2"
      >
        <SwiperSlide className="mySwiper2-slide"></SwiperSlide>
        <SwiperSlide className="mySwiper2-slide"></SwiperSlide>
        <SwiperSlide className="mySwiper2-slide"></SwiperSlide>
        <SwiperSlide className="mySwiper2-slide"></SwiperSlide>
        <SwiperSlide className="mySwiper2-slide"></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard