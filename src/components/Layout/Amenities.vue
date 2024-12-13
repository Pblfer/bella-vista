<template>
    <div class="bg-primarey md:mt-[1%] w-[100%] p-[4%] lg:p-[2%]" id="Amenidades">
        <div class="flex flex-col-reverse md:flex-row place-items-center justify-between px-[2%]">
            <div class="font-badScript text-6xl md:text-6xl xl:text-6xl font-bold text-secondary mb-6 xl:mb-10 mt-2">
                Amenidades
            </div>
            <h1 class="w-full text-lg mb-4 md:mb-0 ml-1 md:text-right text-center text-third">
                Bella Vista - Puerto Barrios
            </h1>
        </div>

        <!-- Carrusel en dispositivos móviles -->
        <div v-if="isMobile" class="swiper-container">
            <swiper :spaceBetween="30" :centeredSlides="true" 
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" 
            
            :navigation="true" 
            :modules="modules" 
            class="mySwiper">
                <swiper-slide v-for="(image, index) in images" :key="index">
                    <div class="relative" @click="openPopup(index)">
                        <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover rounded-sm z-0" />
                        <div class="absolute bottom-0 left-0 w-full bg-secondary/90 text-white text-center py-2">
                            <p class="font-bold text-xl p-2">{{ image.title }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <!-- Grid en dispositivos más grandes -->
        <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div v-for="(image, index) in images" :key="index" class="relative" @click="openPopup(index)">
                <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover rounded-sm" />
                <div class="absolute bottom-0 left-0 w-full bg-secondary/90 text-white text-center py-2">
                    <p class="font-bold lg:text-xl p-2">{{ image.title }}</p>
                </div>
            </div>
        </div>

        <!-- Modal para ver imágenes en carrusel -->
        <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div class="relative w-full max-w-4xl">
                <button @click="closePopup" class="absolute top-4 right-6 text-white text-5xl z-50">
                    &times;
                </button>
                <swiper :spaceBetween="0" :centeredSlides="true" 
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }" 
                :pagination="{
                    clickable: true,
                }" 
                :navigation="true" 
                :modules="modules" 
                class="mySwiper">
                <swiper-slide v-for="(image, index) in images" :key="index">
                    <div class="relative" @click="openPopup(index)">
                        <img :src="image.src" :alt="image.alt" class="popup w-full h-full object-cover rounded-sm z-0" />
                        <div class="md:absolute bottom-0 left-0 w-full bg-secondary/90 text-white text-center p-8">
                            <p class="font-bold text-2xl p-0.5">{{ image.title }}</p>
                            <p class="font-bold text-xl p-0.5">{{ image.description }}</p>
                        </div>
                    </div>
                </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import 'swiper/css';

import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    name: "ImageGallery",
    components: { Swiper, SwiperSlide },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    data() {
        return {
            images: [
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-6.png", alt: "Piscinas", title: "Piscinas" , description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta." },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-5.png", alt: "Áreas verdes", title: "Áreas verdes" , description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta."},
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-3.png", alt: "Juegos infantiles", title: "Juegos infantiles", description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta." },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Area+Eventos.jpeg", alt: "Áreas para eventos", title: "Áreas para eventos", description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta." },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-7.png", alt: "Gimnasio y Pilates", title: "Gimnasio y Pilates", description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta." },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/terraza-a.png", alt: "Terrazas", title: "Terrazas", description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta." },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Churrasqueras.jpg", alt: "Churrasqueras", title: "Churrasqueras", description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta." },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Ludoteca.jpg", alt: "Ludoteca", title: "Ludoteca", description:"Lorem Ipsum es simplemente el texto de relleno de las imprenta." },
            ],
            showPopup: false,
            currentIndex: 0,
            isMobile: window.innerWidth <= 768,
        };
    },
    mounted() {
        window.addEventListener("resize", this.checkMobile);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
        openPopup(index) {
            this.currentIndex = index;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
        },
    },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
    background-color: #000000 !important;
    width: 38px!important;
    height: 38px!important;
    color: #ffffff!important;
    font-size: 8px;
}

img.popup {
    aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
  height: auto;
}


</style>

