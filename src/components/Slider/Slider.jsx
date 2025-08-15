import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import SliderArrow from "../SliderArrow/SliderArrow";
function Slider({
  spaceBetween,
  slidesPerView,
  breakpoints,
  data,
  renderItem,
}) {
  return (
    <div>
      {
        <Swiper
          className="MF-paddingSlider"
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={1800}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={breakpoints}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
          ))}

          <SliderArrow></SliderArrow>
        </Swiper>
      }
    </div>
  );
}

export default Slider;
