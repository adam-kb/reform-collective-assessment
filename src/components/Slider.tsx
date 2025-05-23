import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Slide from "./Slide";
import { slides } from "@/data/slides";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={0}
      loop={true}
      initialSlide={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      direction="horizontal"
      breakpoints={{
        501: {
          direction: "vertical",
        },
        1025: {
          direction: "horizontal",
        },
      }}
      style={{
        padding: "20px 0",
      }}
      speed={3000}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
