<template>
  <div class="bg-gray-100 md:mt-0 w-full p-6 lg:p-14" id="Amenidades">
    <!-- Títulos -->
    <div class="grid items-center justify-between px-4">
      <h3 class="w-full text-sm md:text-start text-center text-third mb-4 md:mb-0 ml-2">
        Bella Vista - Puerto Barrios
      </h3>
      <h2 class=" text-5xl md:text-5xl font-bold text-secondary mb-6 mt-0">Amenidades</h2>
     
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
        <div class="absolute bottom-0 left-0 w-full bg-secondary/80 text-white text-center py-2">
          <p class="font-bold text-lg">{{ image.title }}</p>
        </div>
      </div>
    </div>

    <!-- Modal Carrusel -->
    <div v-if="showPopup" class="fixed inset-0 bg-secondary/90  flex items-center justify-center z-50" >
      <div class="relative w-full max-w-2xl">
        <button @click="closePopup" class="absolute top-4 right-6 text-white bg-secondary/90 w-16 rounded-lg text-6xl z-50">&times;</button>
        <swiper :initialSlide="currentIndex" :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true }" :navigation="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="relative">
              <img :src="image.src" :alt="image.alt" class="w-full h-auto object-cover rounded-lg" />
              <div class="absolute bottom-0 left-0 w-full bg-secondary text-white text-center py-4">
                <p class="font-bold text-2xl">{{ image.title }}</p>
                <p class="text-lg mb-4 px-4">{{ image.description }}</p>
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
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/B_PoolV3.jpg", alt: "Piscinas", title: "Piscinas", description: "Relájate y dale un chapuzón al día en nuestra piscina. Ya sea para refrescarte o disfrutar con familia y amigos, este es el lugar perfecto para desconectarte bajo el sol de Puerto Barrios." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/B_GreenAreaV3.jpg", alt: "Áreas verdes", title: "Áreas verdes", description: "Espacios llenos de naturaleza para respirar aire fresco, pasear o simplemente relajarte. Aquí siempre tendrás un rincón para disfrutar de la tranquilidad." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/SliderKids.jpg", alt: "Juegos infantiles", title: "Juegos infantiles", description: "Para los más pequeños, diversión sin fin. Un área pensada para que ellos jueguen, se diviertan y creen recuerdos inolvidables." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/B_EventsV5.jpg", alt: "Áreas para eventos", title: "Áreas para eventos", description: "Tu lugar para celebrar esos momentos especiales. Desde cumpleaños hasta reuniones familiares, este espacio está listo para que lo llenes de vida y alegría." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/gym_v2.jpg", alt: "Gimnasio y Pilates", title: "Gimnasio y Pilates", description: "Centro diseñado para promover un estilo de vida saludable, con instalaciones modernas." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/B_TerraceV3.jpg", alt: "Terrazas", title: "Terrazas", description: "Un espacio para disfrutar de las vistas y relajarte con la brisa marina. Ideal para compartir un café, leer un libro o simplemente desconectarte." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/B_bbqV3.jpg", alt: "Churrasqueras", title: "Churrasqueras", description: "¿Qué mejor plan que un asado al aire libre? Nuestras churrasqueras están listas para esas reuniones donde la comida y las risas no pueden faltar." },
        { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/ludoteca_v1.jpg", alt: "Área para niños", title: "Área para niños", description: "Un rincón mágico para los más pequeños de la casa, donde la imaginación y el aprendizaje van de la mano. Perfecto para que los niños disfruten mientras exploran y se divierten." }
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

<style>
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
