"use client";

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
  return (
    <section>
      <Swiper
        spaceBetween={50}
        navigation
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        //   dynamicMainBullets: 3,
        // }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="">
            <img
              height={400}
              width={400}
              className="object-fit h-full rounded-[10px] w-full"
              src={"/images/darul-huda.jpg"}
              alt="mockup"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              height={400}
              width={400}
              className="object-fit h-full rounded-[10px] w-full"
              src={"/images/dh.jpg"}
              alt="mockup"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              height={400}
              width={400}
              className="object-fit h-full rounded-[10px] w-full"
              src={"/images/dh1.jpg"}
              alt="mockup"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
