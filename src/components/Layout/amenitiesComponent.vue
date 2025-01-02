<template>
  <div class="mb-0 pt-0" id="amenities">
    <div class="bg-white">
      <main class="isolate">
      
        <div class="w-full mt-0 ">
                <img class="w-full h-[26rem] md:h-[44rem] object-cover duration-700 ease-in-out" :src="activeImage.url"
                    alt="Bella vista barrios, club residencial" />
                <div class="absolute left-0 text-xs text-white -mt-[1.1rem] pl-2 md:pl-4">
                    Imágenes con fines ilustrativos.
                </div>
                <div class="relative md:-ml-6 flex w-full ">
                    <div class="w-full m-4 mx-0 md:m-5 flex justify-center gap-1 md:gap-4">

                        <div @click="activeImage = img" :class="`h-12 w-12 border-4 rounded-none object-cover shadow-sm md:h-20 md:w-20 ${borderSelection(
                            img.id
                        )}`" v-for="img in imagesData" :key="img.index">

                            <img class="h-full w-full object-cover" :src="img.url"
                                alt="Apartamentos bella vista barrios, club residencial" />

                        </div>
                    </div>
                </div>
            </div>




<!----------------
        <div class="grid md:flex md:gap-3 justify-center mt-10 font-din">
          <button
            @click="amenitieSelected = 0"
            :class="
              amenitieSelected == 0
                ? 'py-2 px-6 mt-4 border-b-4 border-primary text-xl ease-in-out duration-700 font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
                : 'py-2 px-6 mt-4 border-b-4 border-white ease-in-out duration-500  text-xl font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
            "
          >
            ATRIO
          </button>
          <button
            @click="amenitieSelected = 1"
            :class="
              amenitieSelected == 1
                ? 'py-2 px-6 mt-4 border-b-4 border-primary text-xl ease-in-out duration-700 font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
                : 'py-2 px-6 mt-4 border-b-4 border-white ease-in-out duration-500  text-xl font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
            "
          >
            ROOF TOP FIREPITS
          </button>
          <button
            @click="amenitieSelected = 2"
            :class="
              amenitieSelected == 2
                ? 'py-2 px-6 mt-4 border-b-4 border-primary text-xl ease-in-out duration-700 font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
                : 'py-2 px-6 mt-4 border-b-4 border-white ease-in-out duration-500  text-xl font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
            "
          >
            CHILL LOUNGE
          </button>
          <button
            @click="amenitieSelected = 3"
            :class="
              amenitieSelected == 3
                ? 'py-2 px-6 mt-4 border-b-4 border-primary text-xl ease-in-out duration-700 font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
                : 'py-2 px-6 mt-4 border-b-4 border-white ease-in-out duration-500  text-xl font-bold tracking-tight text-gray-900 lg:text-2xl uppercase'
            "
          >
            GRILL GAZEBO
          </button>
        </div>

        
        <div class="mt-12 sm:mt-4 xl:mx-auto xl:max-w-12xl xl:px-6">
          <img
            :src="amenities[amenitieSelected].img"
            alt=""
            class="md:aspect-[5/2] aspect-[3/2] w-full object-cover xl:rounded-t-3xl"
          />
        </div>
        -------------------->

        



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
        url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Narazarenos-1.jpg",
      },
      imagesData: [
        {
          id: 1,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Narazarenos-2.jpg",
        },
        {
          id: 2,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Narazarenos-3.jpg",
        },
        {
          id: 3,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima.jpg",
        },
        {
          id: 4,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima-1.jpg",
        },
        {
          id: 5,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-1.JPG",
        },
        {
          id: 6,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-2.JPG",
        },
        {
          id: 7,
          url: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/los-apostoles-3.JPG",
        }
      ],
      interval: null
    }
  },
  mounted() {
    this.startRotation();
  },
  beforeDestroy() {
    this.stopRotation();
  },
  methods: {
    borderSelection(id) {
      return id === this.activeImage.id ? 'border-primary' : 'border-none';
    },
    setActiveImage(id) {
      this.activeImage = this.imagesData.find(image => image.id === id);
    },
    startRotation() {
      this.interval = setInterval(() => {
        const currentIndex = this.imagesData.findIndex(image => image.id === this.activeImage.id);
        const nextIndex = (currentIndex + 1) % this.imagesData.length;
        this.activeImage = this.imagesData[nextIndex];
      }, 6000); // Cambia la imagen cada 3 segundos
    },
    stopRotation() {
      clearInterval(this.interval);
    },
    toScroll(v){
            const myEl =  document.getElementById(v)
            this.$smoothScroll({
              scrollTo: myEl,
              duration: 1000,
              offset: 10,
            })
            this.showMenu = false
          }
  }
}
</script>

<style lang="scss" scoped></style>
