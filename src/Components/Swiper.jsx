import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCard from "./SwiperCard";
import moviebanner from "../moviebanner";
import SocialMedia from "./SocialMedia";

export default function App() {
  return (
    <div className="swiper_container">
      <Swiper className="mySwiper">
        {moviebanner.map((banner) => (
          <SwiperSlide>
            <SwiperCard
              id = {banner.id}
              title={banner.title}
              img={banner.image}
              desc={banner.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <SocialMedia />
      
    </div>
  );
}
