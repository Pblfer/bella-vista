<template>
  <div class="w-full pt-[1%] lg:pt-[0.5%]">
    <div class="galeria w-full relative h-full">
      <swiper :slidesPerView="1" :spaceBetween="8" :freeMode="true" :pagination="{
        clickable: true,
      }" :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    }" :modules="modules" class="mySwiper">
        <swiper-slide class="w-full flex justify-center lg:w-auto overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-.jpg"
            alt=" " class="min-h-[60vh] h-full object-fill object-center "/>
          </swiper-slide>
        <swiper-slide class="w-full flex justify-center lg:w-auto overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima.jpg"
            alt=" " class="min-h-[60vh] h-full object-fill object-center" /></swiper-slide>
        <swiper-slide class="w-full flex justify-center lg:w-auto overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima-.jpg"
            alt=" " class="min-h-[60vh] h-full object-fill object-center" /></swiper-slide>
            <swiper-slide class="w-full flex items-baseline justify-center lg:w-auto overflow-hidden">
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima.jpg"
            alt=" " class="min-h-[60vh] h-full object-center" /></swiper-slide>
        <swiper-slide>
          <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima.jpg"
            alt=" " class="min-h-[60vh] h-full object-fill object-center" /></swiper-slide>
        <swiper-slide><img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-5.jpg"
            alt=" " class="min-h-[60vh] h-full object-fill object-center" /></swiper-slide>
        <swiper-slide><img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-6.jpg"
            alt=" " class="min-h-[60vh] h-full object-fill object-center" /></swiper-slide>
        <swiper-slide><img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-7.jpg"
            alt=" " class="min-h-[60vh] h-full object-fill object-center" /></swiper-slide>
        <swiper-slide><img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-8.jpg"
            alt=" " class="min-h-[60vh] h-full  object-fill object-center" /></swiper-slide>
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
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
      images: [
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima-.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima.jpg",
      ],
    };
  },
};
</script>
<style>
.galeria .swiper {
  width: 100%;
  height: 70vh;
}
</style>
