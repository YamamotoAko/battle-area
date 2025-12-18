'use client';

import styles from './Introduction.module.css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Introduction() {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      slidesPerView="auto"
      spaceBetween={24}
      speed={6000} // 流れる速さ
      autoplay={{
        delay: 0, // 止まらない
        disableOnInteraction: false,
      }}
      className={styles.slider}
    >
      {' '}
      <SwiperSlide>
        <img src="/images/avoidChallenge.png" alt="スライダー画像１枚目" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/beamTouch.png" alt="スライダー画像２枚目" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/defenseRush.png" alt="スライダー画像３枚目" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/escapeRun.png" alt="スライダー画像４枚目" />
      </SwiperSlide>
    </Swiper>
  );
}
