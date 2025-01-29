<template>
  <div class="relative w-full py-[5%]">
    <!-- Contenedor del carrusel -->
    <div class="relative w-full overflow-hidden">
      <div class="flex gap-4 transition-transform duration-300"
        :style="{ transform: `translateX(-${scrollPosition}px)` }" ref="carousel">
        <div v-for="(image, index) in images" :key="index" class="flex-shrink-0">
          <img :src="image" alt="Carousel Image" class="h-[350px] md:h-[500px] w-auto mx-auto object-cover" />
        </div>
      </div>

      <!-- Controles -->
      <button @click="scrollPrev"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800">
        ‹
      </button>
      <button @click="scrollNext"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800">
        ›
      </button>
    </div>

    <!-- Barra de miniaturas -->
    <div class=" hidden md:flex gap-2 mt-4 justify-center">
      <div v-for="(image, index) in images" :key="index" class="w-20 h-20 cursor-pointer border-2" :class="{
        'border-blue-500': index === activeIndex,
        'border-gray-300': index !== activeIndex,
      }" @click="scrollToIndex(index)">
        <img :src="image" alt="Thumbnail" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima.jpeg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima-1.jpg",
        // "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima-2.png",

        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-1.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-.jpg",
        //  "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-3.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-p.jpg",
        //  "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina-4.jpg",


        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Narazarenos-5.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Narazarenos-3.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-3.jpeg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-2.jpeg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-1.jpeg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima-.jpg",
        // "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima-2.jpg",
        // "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima-1.jpg",
        "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima.jpg",

      ],
      scrollPosition: 0,
      offsets: [], // Almacena los desplazamientos de cada imagen
      activeIndex: 0,
    };
  },
  mounted() {
    this.calculateOffsets();
    window.addEventListener("resize", this.calculateOffsets);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.calculateOffsets);
  },
  methods: {
    calculateOffsets() {
      const carousel = this.$refs.carousel;

      if (carousel) {
        let offset = 0;
        this.offsets = Array.from(carousel.children).map((child) => {
          const currentOffset = offset;
          offset += child.offsetWidth + 16; // Incluye el gap (16px en este caso)
          return currentOffset;
        });
        this.scrollPosition = this.offsets[this.activeIndex] || 0;
      }
    },
    scrollNext() {
      if (this.activeIndex < this.images.length - 1) {
        this.activeIndex++;
        this.scrollPosition = this.offsets[this.activeIndex];
      }
    },
    scrollPrev() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
        this.scrollPosition = this.offsets[this.activeIndex];
      }
    },
    scrollToIndex(index) {
      if (index >= 0 && index < this.offsets.length) {
        this.activeIndex = index;
        this.scrollPosition = this.offsets[index];
      }
    },
  },
};
</script>
<style scoped>
/* Estilo adicional para los thumbs */
.border-blue-500 {
  transition: border-color 0.2s ease-in-out;
}
</style>
