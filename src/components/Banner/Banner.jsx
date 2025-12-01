import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

function Banner() {
  const slideAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="my-5 w-11/12 mx-auto h-[300px] sm:h-[400px] md:h-[480px] lg:h-[530px] px-1">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="rounded-xl h-full w-full"
      >
        <SwiperSlide>
          <motion.img
            src="https://cms-assets.xboxservices.com/assets/be/10/be10aae2-852a-41bc-b345-804b52cfbe94.jpg?n=Games-Hub_Hero-Image-768_Fallout-4-Annv-Edt_1920x1080.jpg"
            alt="Game 1"
            className="w-full h-full object-cover rounded-xl"
            {...slideAnimation}
          />
        </SwiperSlide>

        <SwiperSlide>
          <motion.img
            src="https://wallpapers.com/images/hd/hd-video-game-ghost-recon-online-yeas0k7fls2o17j2.jpg"
            alt="Game 2"
            className="w-full h-full object-cover rounded-xl"
            {...slideAnimation}
          />
        </SwiperSlide>

        <SwiperSlide>
          <motion.img
            src="https://wallpapers.com/images/featured/hd-game-7csw4v0tt93f26q6.jpg"
            alt="Game 3"
            className="w-full h-full object-cover rounded-xl"
            {...slideAnimation}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
