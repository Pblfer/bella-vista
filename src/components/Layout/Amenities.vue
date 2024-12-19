<template>
  <div class="bg-primary md:mt-2 w-full p-6 lg:p-4" id="Amenidades">
    <!-- Títulos -->
    <div class="flex flex-col-reverse md:flex-row items-center justify-between px-4">
      <h2 class="font-badScript text-5xl md:text-6xl font-bold text-secondary mb-6 mt-2">Amenidades</h2>
      <h3 class="w-full text-lg md:text-right text-center text-third mb-4 md:mb-0">
        Bella Vista - Puerto Barrios
      </h3>
    </div>

    <!-- Carrusel en Móvil -->
    <div v-if="isMobile" class="swiper-container mt-4">
      <swiper :spaceBetween="20" :autoplay="{ delay: 3000, disableOnInteraction: false }" :modules="modules"
        class="mySwiper">
        <swiper-slide v-for="(image, index) in images" :key="index" @click="openPopup(index)">
          <div class="relative cursor-pointer transition-transform hover:scale-100">
            <img :src="image.src" :alt="image.alt" class="w-full h-[28rem] object-cover rounded-lg" />
            <div class="absolute bottom-0 left-0 w-full bg-secondary/70 text-white text-center py-2">
              <p class="font-bold text-xl">{{ image.title }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Grid en Desktop -->
    <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <div v-for="(image, index) in images" :key="index"
        class="relative cursor-pointer transition-transform hover:scale-105" @click="openPopup(index)">
        <img :src="image.src" :alt="image.alt" class="w-full h-96 object-cover rounded-none" />
        <div class="absolute bottom-0 left-0 w-full bg-secondary/70 text-white text-center py-2">
          <p class="font-bold text-lg">{{ image.title }}</p>
        </div>
      </div>
    </div>

    <!-- Modal Carrusel -->
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div class="relative w-full max-w-5xl">
        <button @click="closePopup" class="absolute top-4 right-6 text-white text-7xl z-50">&times;</button>
        <swiper :initialSlide="currentIndex" :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true }" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="relative">
              <img :src="image.src" :alt="image.alt" class="w-full h-auto object-cover rounded-lg" />
              <div class="absolute bottom-0 left-0 w-full bg-secondary/90 text-white text-center py-4">
                <p class="font-bold text-2xl">{{ image.title }}</p>
                <p class="text-lg mb-4">{{ image.description }}</p>
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
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      images: [
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/pool_v1.jpg", alt: "Piscinas", title: "Piscinas", description: "Pensadas para combinar funcionalidad, confort y estética, estas áreas se convierten en uno de los principales atractivos del club residencial." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/green_v1.jpg", alt: "Áreas verdes", title: "Áreas verdes", description: " Son el corazón del bienestar, ofreciendo un lugar donde la naturaleza y la vida cotidiana se encuentran." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/playground_v1.jpg", alt: "Juegos infantiles", title: "Juegos infantiles", description: "Espacios diseñados para estimular la imaginación." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/events.jpg", alt: "Áreas para eventos", title: "Áreas para eventos", description: "Áreas al aire libre con jardines cuidadosamente diseñados y vistas excepcionales." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/gym_v2.jpg", alt: "Gimnasio y Pilates", title: "Gimnasio y Pilates", description: "Centro diseñado para promover un estilo de vida saludable, con instalaciones modernas." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/rooftop_v1.jpg", alt: "Terrazas", title: "Terrazas", description: "Diseñados para disfrutar de momentos únicos al aire libre, con vistas espectaculares." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/bbq_v1.jpg", alt: "Churrasqueras", title: "Churrasqueras", description: "Diseñada para ser el punto de encuentro perfecto para reuniones familiares y sociales." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/ludoteca_v1.jpg", alt: "Ludoteca", title: "Ludoteca", description: "Áreas para manualidades, dibujo y pintura donde los niños pueden expresar su creatividad." }
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

<style >
/* Transición entre imágenes */
.swiper-container {
  width: 100%;
  height: 100%;
  top: 12rem;
  
}

.swiper-button-prev,
.swiper-button-next {
  background-color: rgba(14, 9, 92, 0.6);
  color: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 8px;
}

.swiper-pagination-bullet-active {
  background-color: #02031d;
}
</style>
