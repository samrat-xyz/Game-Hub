import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner() {
  return (
    <div className="my-5 w-11/12 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-xl"
      >
        <SwiperSlide>
          <img
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/841ea38bc58cabb70aef65365cf50bc2d79329d9/header.jpg?t=1746590920"
            alt="Game 1"
            className="w-full rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg"
            alt="Game 2"
            className="w-full rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://static.toiimg.com/thumb/msid-113699477,width-1280,height-720,resizemode-4/113699477.jpg"
            alt="Game 3"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
