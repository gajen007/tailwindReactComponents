import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';
import CustomSwiperGrid from '../components/CustomSwiperGrid'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function SwiperPage() {
    return <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><CustomSwiperGrid cardTitle="First" cardContent="Body First" cardFooter="Footer First"/></SwiperSlide>
    <SwiperSlide><CustomSwiperGrid cardTitle="Second" cardContent="Body Second" cardFooter="Footer Second"/></SwiperSlide>
    <SwiperSlide><CustomSwiperGrid cardTitle="Third" cardContent="Body Third" cardFooter="Footer Third"/></SwiperSlide>
    <SwiperSlide><CustomSwiperGrid cardTitle="Fourth" cardContent="Body Fourth" cardFooter="Footer Fourth"/></SwiperSlide>
    <SwiperSlide><CustomSwiperGrid cardTitle="Fifth" cardContent="Body Fifth" cardFooter="Footer Fifth"/></SwiperSlide>
    <SwiperSlide><CustomSwiperGrid cardTitle="Sixth" cardContent="Body Sixth" cardFooter="Footer Sixth"/></SwiperSlide>
  </Swiper>
}