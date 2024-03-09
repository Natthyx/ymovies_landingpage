import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCard from "./SwiperCard";
import moviebanner from "../moviebanner";

export default function App() {
  return (
    <div className="swiper_container">
      <Swiper className="mySwiper">
        {moviebanner.map((banner) => (
          <SwiperSlide>
            <SwiperCard
              title={banner.title}
              img={banner.image}
              desc={banner.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bottom-section">
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Whatsapp</li>
          <li>Telegram</li>
        </ul>
      </div>
      
    </div>
  );
}
