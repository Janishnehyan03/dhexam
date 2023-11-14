"use client";

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider() {
  return (
    <section className="my-4">
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
              height={500}
              width={500}
              className="object-fit h-full rounded-[10px] w-full"
              src={"https://upload.wikimedia.org/wikipedia/commons/b/b2/Darul_Huda_Islamic_University_Chemmad.jpg"}
              alt="mockup"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              height={500}
              width={500}
              className="object-fit h-full rounded-[10px] w-full"
              src={"https://lh3.googleusercontent.com/pw/ADCreHcSBXSrda_ffunxvLgjw59H7_fjTDklB6J79dd9OHzwDXKlMvyKL298fPbnaNNhNYXnLACkKDxR86n_NSB57vtEvnV2e2weCaJpsc5LfTnPHLsymQFITJuFa4VaO-KAnPbBSGG_TewqURtiJJ7I36Pt=w1546-h885-s-no-gm?authuser=0"}
              alt="mockup"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img
              height={500}
              width={500}
              className="object-fit h-full rounded-[10px] w-full"
              src={"https://lh3.googleusercontent.com/pw/ADCreHebPFKaUpP1vkGgDyA7QVfGscd4xPwvv_-um21j8iLk8xLYLtaCu-XNvEeUq3NHufeBGbyH_NyQpJ2V46LIOE7_eOLQhOdeqxuwtRYmTb-GB-UsCTuFMAJm37tAIJmPoL1v3-gVncak_I1lg624lJnx=w1574-h885-s-no-gm?authuser=0"}
              alt="mockup"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
