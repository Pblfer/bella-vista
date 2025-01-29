<template>
  <div class="w-full py-[0.5%] lg:py-[0.5%]">
    <div class="galeria w-full relative h-full">

      <swiper :slidesPerView="4" :spaceBetween="8" :freeMode="true" :navigation="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,

      }" :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
      }" :modules="modules" class="mySwiper">

        <swiper-slide class="w-full flex justify-center lg:w-1/2 overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima.jpeg" alt=" "
            class="carrucel object-cover " /></swiper-slide>
        <swiper-slide class="w-full flex justify-center lg:w-1/2 overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima-1.jpg" alt=" "
            class="carrucel object-cover " /></swiper-slide>

        <swiper-slide class="w-full flex justify-center lg:w-1/2 overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-1.jpg" alt=" "
            class="carrucel object-cover " /></swiper-slide>

        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-p.jpg" alt=" "
            class="carrucel object-cover " /></swiper-slide>
        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Narazarenos-5.jpg"
            alt=" " class="carrucel object-cover " /></swiper-slide>
        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Narazarenos-3.jpg"
            alt=" " class="carrucel object-cover " /></swiper-slide>
        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-3.jpeg"
            alt=" " class="carrucel object-cover " /></swiper-slide>
        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-2.jpeg"
            alt=" " class="carrucel object-cover " /></swiper-slide>
        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima-.jpg"
            alt=" " class="carrucel object-cover " /></swiper-slide>
        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima.jpg" alt=" "
            class="carrucel object-cover " /></swiper-slide>
      </swiper>




    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],

    };
  },
};
</script>
<style>
img.carrucel{
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>
