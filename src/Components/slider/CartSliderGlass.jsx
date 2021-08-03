import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import "swiper/swiper.scss";
import ProductCardGlass from "../glassCard/ProductCardGlass";
import S2 from "./sh2-removebg-preview.png";
import S3 from "./sh3-removebg-preview.png";
import S4 from "./sh4-removebg-preview.png";
import S5 from "./sh5.png";
import S6 from "./sh6-removebg-preview.png";
import S7 from "./sh7-removebg-preview.png";


import "swiper/components/navigation/navigation.scss";

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

SwiperCore.use([Navigation, A11y]);

function CartSliderGlass() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={6}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
          },
        }}
        className="mySwiper">
        <SwiperSlide>
          <ProductCardGlass  />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCardGlass src3={S2}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCardGlass src3={S3}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCardGlass src3={S4}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCardGlass src3={S6}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCardGlass src3={S7}/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCardGlass  />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCardGlass src3={S5}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default CartSliderGlass;
