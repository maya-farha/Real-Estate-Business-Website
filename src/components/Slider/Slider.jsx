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
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={1800}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={breakpoints}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="MF-slideWidth">
              {renderItem(item)}
            </SwiperSlide>
          ))}
          <SliderArrow className="MF-slideWidth"></SliderArrow>
        </Swiper>
      }
    </div>
  );
}

export default Slider;

// <Slider
//   spaceBetween={20}
//   slidesPerView={1}
//   breakpoints={{
//     992: {
//       slidesPerView: 2,
//       spaceBetween: 50,
//     },
//   }}
//   data={clientsData}
//   renderItem={(card) => (
//     <ClientCard
//       date={card.date}
//       category={card.category}
//       quote={card.quote}
//     />
//   )}
// />

// const clientsData = [
//   {
//     date: "2007",
//     category: "Luxury Home Development",
//     quote:
//       "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
//   },
//   {
//     date: "2010",
//     category: "Commercial Property Management",
//     quote:
//       "The team at Estatein provided exceptional service in managing our commercial properties. Their professionalism and attention to detail are unmatched.",
//   },
//   {
//     date: "2015",
//     category: "Real Estate Investment",
//     quote:
//       "We've made several successful investments with Estatein. Their market insights and strategic advice have been key to our growth.",
//   },
// ];
