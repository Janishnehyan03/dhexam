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
              src={
                "https://lh3.googleusercontent.com/pw/ADCreHcmv_RU6NxBflOXLNAasr8a3q1qBYqmID25-vU-fK8YnMi-mg6bSgtoU2xR-txxxLfJcqrHoYJoZmoVJkiPc-iBikFECpZkQKPP25KMV2xNYHdeY5gd48AIWeUKyIdYuDM72RP-38llVTNUc1jeE3kM=w1574-h885-s-no-gm?authuser=0"
              }
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
              src={
                "https://lh3.googleusercontent.com/pw/ADCreHcz1oijbzbXXxwK4q0J4bobQOpNWDoYWFlTSkGGuSnUHSrMTVoXVIF1z1gunJnQg03RXLdvJWUDlf_7NIhPTbG8alIPFxadsdtO237w1h8QKeF7cGKvl7htpC0pAp8FQIQaDoOh0FQ7rM-G90HLwZGB=w960-h540-s-no-gm?authuser=0"
              }
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
              src={
                "https://lh3.googleusercontent.com/pw/ADCreHebPFKaUpP1vkGgDyA7QVfGscd4xPwvv_-um21j8iLk8xLYLtaCu-XNvEeUq3NHufeBGbyH_NyQpJ2V46LIOE7_eOLQhOdeqxuwtRYmTb-GB-UsCTuFMAJm37tAIJmPoL1v3-gVncak_I1lg624lJnx=w1574-h885-s-no-gm?authuser=0"
              }
              alt="mockup"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
