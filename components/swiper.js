import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";



export default function Swipers() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        style={{
            height: 300
        }}
      >
        <SwiperSlide>
            <img  
                alt="nasd" 
                className="mx-auto object-fill" 
                src="https://i.seadn.io/gae/JrPVW4h_grhdWYTUx4Gy2aMho0ajEhn8PSOQ-7XMNqxqzukR8mNqMNvvPL-IFGHr6xbXyZeLa8bum5JwuH9gsIRHX25NlrOAm1aPOA?auto=format&w=1000" 
            />
        </SwiperSlide>

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