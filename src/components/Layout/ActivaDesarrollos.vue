<template>
    <div id="entorno" class="bg-primary p-[5%] py-[5%]">
        <div class="flex flex-col lg:flex-col">
            <div class="flex flex-col justify-center items-center lg:items-center w-full  p-[8%] lg:px-[4%] lg:py-[0%] text-center md:text-left text-secondary">

                <div class="w-full font-badScript text-4xl md:text-5xl xl:text-5xl font-bold mb-2 xl:mb-10 ">Activa Desarrollos</div>
                <p class=" text-xl mb-2 md:mb-4">
                    Sit deserunt proident consectetur aute anim enim occaecat labore cupidatat Lorem velit pariatur tempor ut sunt sit Lorem. Eiusmod ad fugiat occaecat ex exercitation eiusmod voluptate elit do ut reprehenderit anim deserunt duis enim enim tempor ut. 
                </p>
            </div>
        <div class="relative">
            <swiper :modules="modules" :slidesPerView="1" :centeredSlides="false" :spaceBetween="8" :freeMode="true"
            :pagination="{
                type: 'fraction',
            }" :navigation="true" :virtual="true" class="mySwiper" @swiper="setSwiperRef">
            <swiper-slide><img
                    src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/pagina-web-la-serenisima.jpg"
                    alt=" " class="relative m-auto object-cover -z-10 " /></swiper-slide>
            <swiper-slide><img
                    src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/pagina-web-nazarenos.jpg"
                    alt=" " class="relative m-auto object-cover -z-10 " /></swiper-slide>
            <swiper-slide><img
                    src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/pagina-web-optima.png"
                    alt=" " class="relative m-auto object-cover -z-10 " /></swiper-slide>
            <swiper-slide><img
                    src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/pagina-web-platina.png"
                    alt=" " class="relative m-auto object-cover -z-10 " /></swiper-slide>
            

        </swiper>
        <div class="w-full flex justify-center items-center -mt-14 z-50" >
            <button @click="toScroll('cotizar')" class="mb-2 px-14 py-2 bg-secondary text-white text-xl md:text-2xl border-0 duration-600 z-50">
                Óptima Centro de Negocios</button>

        </div>

        
        
    </div>

        </div>


    </div>
    <div>
        
        <p class="append-buttons hidden">
            <button @click="prepend()" class="prepend-2-slides">
                Prepend 2 Slides
            </button>
            <button @click="slideTo(1)" class="prepend-slide">Slide 1</button>
            <button @click="slideTo(250)" class="slide-250">Slide 250</button>
            <button @click="slideTo(500)" class="slide-500">Slide 500</button>
            <button @click="append()" class="append-slides">Append Slide</button>
        </p>
    </div>
</template>
<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';



// import Swiper core and required modules
import { Pagination, Navigation, Virtual } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        // Create array with 500 slides
        const slides = ref(
            Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
        );
        let swiperRef = null;
        let appendNumber = 100;
        let prependNumber = 1;

        const setSwiperRef = (swiper) => {
            swiperRef = swiper;
        };
        const slideTo = (index) => {
            swiperRef.slideTo(index - 1, 0);
        };
        const append = () => {
            slides.value = [...slides.value, 'Slide ' + ++appendNumber];
        };
        const prepend = () => {
            slides.value = [
                `Slide ${prependNumber - 2}`,
                `Slide ${prependNumber - 1}`,
                ...slides.value,
            ];
            prependNumber -= 2;
            swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
        };
        return {
            slides,
            swiperRef: null,
            appendNumber,
            prependNumber,
            setSwiperRef,
            slideTo,
            append,
            prepend,
            modules: [Pagination, Navigation, Virtual],
        };
    },
};
</script>
<style lang="css"> 
.swiper-button-prev, .swiper-button-next{
    background-color: #000!important;
    padding: 2.5%;
    color: #ffffff;
    font-size: 12px;
}

</style>

  