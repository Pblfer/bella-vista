<template>
  <div class="mb-0 pt-14">
    <div class="bg-white">
      <main class="isolate">
        <!-- Contenedor Principal -->
        <div class="relative w-full md:mt-10 mt-6 h-[32rem] md:h-[57rem]">
          <!-- Transición de Imágenes -->
          <transition-group name="fade" tag="div" class="absolute inset-0">
            <img
              v-for="img in [activeImage]"
              :key="img.id"
              :src="img.url"
              class="absolute w-full h-full object-cover duration-700 ease-in-out"
              alt="Imagen principal del carrusel"
            />
          </transition-group>
          <div
            class="absolute left-0 text-xs text-white -mt-[1.1rem] pl-2 md:pl-4"
            aria-hidden="true"
          >
            Imágenes con fines ilustrativos.
          </div>
        </div>
            <!-- Miniaturas -->
            <div class="block right-0 bottom-0 w-full  bg-secondary">
            <div class="flex justify-center gap-1 md:gap-4 p-4">
              <div
                v-for="img in imagesData"
                :key="img.id"
                class="cursor-pointer transition-transform duration-300 border-none transform hover:scale-105"
                @click="setActiveImage(img.id)"
              >
                <img
                  :class="borderSelection(img.id)"
                  class="h-12 w-12 md:h-20 md:w-20  border-2 rounded-sm shadow-lg object-cover"
                  :src="img.url"
                  :alt="'Miniatura ' + img.id"
                />
              </div>
            </div>
          </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeImage: {
        id: 1,
        url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-3.jpg",
      },
      imagesData: [
      {
          id: 1,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-3.jpg",
        },

        {
          id: 2,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-7.jpg",
        },
       
        {
          id: 3,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-8-enhanced.jpg",
        },
        
        {
          id: 4,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-9-enhanced.jpg",
        },

        {
          id: 5,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-5-enhanced.jpg",
        },

        {
          id: 6,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Render-4-enhanced.jpg",
        },
        
      ],
      interval: null,
    };
  },
  mounted() {
    this.startRotation();
  },
  beforeDestroy() {
    this.stopRotation();
  },
  methods: {
    borderSelection(id) {
      return id === this.activeImage.id
        ? "border-primary ring-2 ring-primary"
        : "border-transparent";
    },
    setActiveImage(id) {
      this.activeImage = this.imagesData.find((image) => image.id === id);
      this.stopRotation(); // Detenemos la rotación si el usuario selecciona manualmente.
      this.startRotation(); // Reiniciamos el intervalo.
    },
    startRotation() {
      this.interval = setInterval(() => {
        const currentIndex = this.imagesData.findIndex(
          (image) => image.id === this.activeImage.id
        );
        const nextIndex = (currentIndex + 1) % this.imagesData.length;
        this.activeImage = this.imagesData[nextIndex];
      }, 3000); 
    },
    stopRotation() {
      clearInterval(this.interval);
    },
  },
};
</script>

<style scoped>
/* Transiciones suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Ajuste de posición */
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  top: 0;
  left: 0;
}


</style>
