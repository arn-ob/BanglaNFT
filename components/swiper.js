import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function Swipers() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        style={{
            height: 300
        }}
      >
        <SwiperSlide>
            <img  
                alt="nasd" 
                className="mx-auto object-fill" 
                src="https://img.freepik.com/premium-vector/ethereum-eth-coin-banner-eth-coin-cryptocurrency-concept-banner-background_32996-1565.jpg" 
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}