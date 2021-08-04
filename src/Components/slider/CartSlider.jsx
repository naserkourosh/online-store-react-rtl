import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation,  A11y } from 'swiper';
import "swiper/swiper.scss";
import ProductCard from "../productCard/ProductCard";
import F1 from "./f1 (1).jpg";
import F2 from "./f1 (2).jpg";
import F3 from "./f1 (3).jpg";
import F4 from "./f1 (4).jpg";
import F5 from "./f1 (5).jpg";
import F6 from "./f1 (6).jpg";

import 'swiper/components/navigation/navigation.scss';
import ProductCardGlass from '../glassCard/ProductCardGlass'

// import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"

// import "./styles.css";

// import Swiper core and required modules
// import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
// SwiperCore.use([Pagination]);

SwiperCore.use([Navigation,  A11y]);

function CartSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={6}
        navigation

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          }
        }}
        className="mySwiper">
        <SwiperSlide>
          <ProductCard src1={F1} src2={F2} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F3} src2={F4} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F5} src2={F6} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F2} src2={F1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F4} src2={F3} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F6} src2={F5} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F1} src2={F2} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F1} src2={F2} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard src1={F1} src2={F2} />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
export default CartSlider;
