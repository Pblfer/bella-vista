<template>
  <div class="w-full pt-[1%] lg:pt-[0.5%]">
    <div class="w-full relative h-auto">
      <swiper :slidesPerView="1" :spaceBetween="8" :freeMode="true" :navigation="false" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,

      }" :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        '768': {
          slidesPerView: 1.5,
          spaceBetween: 8,
        },
        '1024': {
          slidesPerView: 2.5,
          spaceBetween: 8,
        },
      }" :modules="modules" class="mySwiper">
        <swiper-slide class="w-full flex justify-center lg:w-1/2 overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-1.jpg" alt=" "
            class="min-h-[60vh] object-cover " />
        </swiper-slide>
        <swiper-slide class="w-full flex justify-center lg:w-1/2 overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-2.jpg" alt=" "
            class="min-h-[60vh] object-cover " /></swiper-slide>
        <swiper-slide class="w-full flex justify-center lg:w-1/2 overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-3.jpg" alt=" "
            class="min-h-[60vh] object-cover " /></swiper-slide>

        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-4.jpg" alt=" "
            class="min-h-[60vh] object-cover " /></swiper-slide>
        <swiper-slide><img
            src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-5.jpg" alt=" "
            class="min-h-[60vh] object-cover " /></swiper-slide>
        <swiper-slide><img
            src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-6.jpg" alt=" "
            class="min-h-[60vh] object-cover " /></swiper-slide>
        <swiper-slide><img
            src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-7.jpg" alt=" "
            class="min-h-[60vh] object-cover " /></swiper-slide>
        <swiper-slide><img
            src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-8.jpg" alt=" "
            class="min-h-[60vh] object-cover " /></swiper-slide>
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
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style></style>
