import React from "react";
import { useSwiper } from "swiper/react";
import "./SliderArrow.css";
function SliderArrow() {
  const swiper = useSwiper();
  return (
    <div>
      <div className="MF-swiperNav">
        <button onClick={() => swiper.slidePrev()} className="MF-arrow">
          <img src="/assets/icons/left-arrow.svg" alt="left-arrow"></img>
        </button>
        <button onClick={() => swiper.slideNext()} className="MF-arrow">
          <img src="/assets/icons/right-arrow.svg" alt="right-arrow"></img>
        </button>
      </div>
    </div>
  );
}

export default SliderArrow;
