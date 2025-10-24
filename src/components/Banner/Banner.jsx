import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner() {
  return (
    <div className="my-5 w-11/12 mx-auto ">
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
            src="https://images.ctfassets.net/s5n2t79q9icq/5uSM9wV9SWCM14ouUW7BoR/6bd3c5df63f901e13ed4c094a6f4fa55/ab2scWUU5rI-HD.jpg"
            alt="Game 1"
            className="w-full rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://cdn-www.bluestacks.com/bs-images/ip23USbCzdAS5LDlFDy06WQKvdfPnt0qYkON4CAJehIXup5WICylX7R84Py9BhEddGkK.png"
            alt="Game 2"
            className="w-full rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://static.download.it/scrs/aqf/com.glu.dragonslayer/screenshots/2CK0ErCueicrAZxurukisK114VTo_Awb5N9ZVxba05FS1eSOjEDBQCE7mdmN6Zw77Q=w720-h310.jpg"
            alt="Game 3"
            className="w-full rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
