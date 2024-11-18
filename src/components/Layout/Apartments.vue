<template>
  <div
    class="flex flex-col items-center justify-center content-center bg-primary text-secondary py-5  md:px-[1%] lg:px-[4%]"
    id="types">
    <div class="w-full flex flex-col lg:mt-4 lg:pr-12">
      <h2 class="text-lg ml-1 md:text-right text-third text-center">
        Bella Vista - Puerto Barrios
      </h2>
      <p
        class="font-badScript text-6xl md:text-7xl xl:text-7xl font-bold md:ml-0 -ml-7 tracking-tight mt-4 md:text-left text-center">
        Apartamentos
      </p>
      <p class="mt-4 max-w-[660px] w-[90%] tracking-wide text-center text-2xl md:text-left ">
        Apartamentos de 2, 3 y 4 Habitaciones en Puesto Barrios.

      </p>
      <div class="flex w-full ">


      </div>

      <div class="w-full ">
        <fieldset class="mt-6 ">

          <div class="flex flex-row items-center">
            <div class="mt-4 " v-for="(i, index) in types" :key="index" @click="selected = index">
              <div class="flex items-center rounded-none border-0 border-secondary bg-fifth p-4 mr-2">
                <input id="type" name="notification-method" type="radio" v-model="selected" :value="index"
                  class="h-5 w-5 rounded-none border-secondary bg-secondary/50 text-primary ring-secondary focus:ring-primary" />
                <label @click="selected = index, selectedVariation = 0" for="type"
                  class="ml-4 block text-base md:text-lg lg:text-xl font-normal leading-6 tracking-wider">{{ i.name
                  }}</label>
              </div>
            </div>

            <div class="mt-6 w-full flex flex-col items-center hidden">
              <fieldset class="mt-6 w-full flex flex-col items-center">
                <p class="font-light tracking-widest">VARIACIONES:</p>
                <div class="mt-4 w-auto space-y-0 md:w-[14rem]" v-for="(i, index) in types[selected].variations"
                  :key="index" @click="selectedVariation = index">
                  <div class="flex items-center p-0">
                    <input id="variation" name="variation" type="radio" v-model="selectedVariation" :value="index"
                      class="focus:ring-a1 h-6 w-6 rounded-none border-secondary bg-secondary/50 text-primary ring-secondary focus:ring-primary" />
                    <label @click="selectedVariation = index" for="variation"
                      class="ml-4 block text-base md:text-lg lg:text-xl font-normal leading-6 tracking-wider">{{ i.type
                      }}</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </fieldset>
      </div>
      <!----------
      <button @click="toScroll('leadform')" class="bg-a2 hidden md:block text-a1 md:mt-14 mt-4 hover:bg-a3 leading-4 h-12 w-auto items-center border-transparent bg-primary px-8 pt-0 md:text-lg font-light tracking-widest text-white shadow-xl duration-500 ease-in-out hover:bg-third hover:text-white hover:shadow-none">
        COTIZAR EN LINEA
      </button> ------------>
    </div>
    <div class="mt-10 w-full flex flex-col items-center md:mt-4">
      <div>
        <p class="font-special text-a1 mt-1 text-xl font-[400] tracking-wider md:text-2xl lg:text-3xl">
          <!-----------
          {{ types[selected].name }}
           - {{ types[selected].variations[selectedVariation].type }}------------>
        </p>
        <p>

        </p>

        <p class="font-normal text-base md:text-lg lg:text-xl tracking-widest mt-6">{{ types[selected].description }}
          <!-----------
          habitaciones + {{ types[selected].variations[selectedVariation].type }} + 2 parqueos, {{ types[selected].sqm }}------------>
        </p>
      </div>
      <img class="w-full h-auto px-[0%] md:px-[16%] lg:px-[17%] ease-linear duration-300"
        :src="types[selected].variations[selectedVariation].img" alt="elemento apartamentos" />
    </div>

    <div class="flex flex-col content-center items-center justify-center w-full md:px-4 lg:px-14">


      <button @click="toScroll('cotizar')"
        class="flex text-lg md:text-lg my-2 px-10 py-3 mt-4 bg-secondary ease-in-out duration-700 text-white  duration-600 rounded-sm shadow-lg hover:bg-four hover:shadow-none">
        Obtener cotización
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="w-6 ml-2 mt-0.5 text-primary">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>
  </div>

  <!-- <zoom-component /> -->
  <div class="flex justify-center lg:mx-16 mx-4 mb-10">
    <div class="w-full">
      <ul role="list" class="grid grid-cols-1 gap-1 gap-y-8 sm:grid-cols-3 sm:gap-1 lg:grid-cols-3 xl:gap-1">

        <li class="relative" v-for="(i, index) in types[selected].variations[selectedVariation].ambients" :key="index">

          <div
            class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden  bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">

            <img :src="i.img" alt="Elemento Torre Norte" class="pointer-events-none object-cover" />

          </div>
          <div class="relative left-0 text-xs text-white -mt-8 md:pl-6 pl-4">Imágenes con fines ilustrativos.</div>
        </li>
      </ul>
    </div>
  </div>
  <!--------
  <div class="grid bg-gray-50 lg:flex lg:p-14 p-8" id="tour">
    <div class="lg:mt-0 mt-4 lg:w-full">
      <h1 class="text-a1 mt-0 text-base font-normal">Elemento Norte</h1>
      <p
        class="font-special text-a1 mt-1 text-2xl font-[400] tracking-wider lg:text-3xl"
      >
        Tour 360 - {{ types[selectedVariation].name }} ({{ types[selected].variations[selectedVariation].type }})
      </p>
      <div class="flex w-full md:w-[32rem]">
        <div class="mt-3 w-full border-b-2 border-secondary"></div>
      </div>
      <iframe
        class="w-full rounded-lg lg:h-[46rem] mt-4 h-[22rem]"
        :src="types[selected].variations[selectedVariation].tour"
        frameborder="0"
      ></iframe>
    </div>
  </div>
 --------->
</template>

<script>
//import ZoomComponent from "../Layout/ZoomComponent.vue";
export default {
  components: {},
  data() {
    return {
      selectedVariation: 0,
      selected: 0,
      types: [
        {
          name: "Tipo A",
          rooms: "2",
          description: "2 habitaciones - 1 baño",
          sqm: "57.41 m2",
          variations: [
            {
              type: "Flex",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo-a.png",
              ///ambients: [
              //  {
              //    text: "Flex",
              //    img: "https://owwny-b2b-base-files.s3.amazonaws.com/projects/5d760884-5eba-4574-919d-3b8dfa0077a0/planes/A135Flex.jpg.jpeg",
              //  },
              ////  {
              //    text: "Flex",
              //    img: "https://owwny-b2b-base-files.s3.amazonaws.com/projects/5d760884-5eba-4574-919d-3b8dfa0077a0/planes/A135Flex.jpg.jpeg",
              //  },
              //  {
              //    text: "Flex",
              //    img: "https://owwny-b2b-base-files.s3.amazonaws.com/projects/5d760884-5eba-4574-919d-3b8dfa0077a0/planes/A135Flex.jpg.jpeg",
              //  },
              // ],
            },
            // {
            //   type: "Estudio",
            ////   img: "https://owwny-b2b-base-files.s3-accelerate.amazonaws.com/projects/5d760884-5eba-4574-919d-3b8dfa0077a0/planes/A135Estudio.jpg.jpeg",
            //  tour: "https://d1753dmw4aba11.cloudfront.net/",

            // },
          ],
        },
        {
          name: "Tipo B",
          description: "2 habitaciones - 2 baños",
          sqm: "61.70 m2",
          rooms: "2",
          variations: [
            {
              type: "Flex",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo+b.png",
              tour: "https://d2tgcbuyu72jum.cloudfront.net/",

            },
            //  {
            //     type: "Estudio",
            //     img: "https://owwny-b2b-base-files.s3.amazonaws.com/websites/arena/B110Estudio.jpg",
            ///     tour: "https://d18pl05u9z8gvq.cloudfront.net/",

            //   },
            //  {
            //    type: "3 Dorms",
            //    img: "https://owwny-b2b-base-files.s3.amazonaws.com/websites/arena/B110-3-dorms-.jpg",
            //     tour: "https://d18pl05u9z8gvq.cloudfront.net/",

            //   }

          ],
        },
        {
          name: "Tipo C",
          description: "3 habitaciones - 2 baños - Estudio",
          rooms: "1",
          sqm: "91.82 m2",
          variations: [
            {
              type: "Balcon",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo+c.png",
              tour: "https://diwnv16sf46d0.cloudfront.net/",

            }
          ],
        },
      ],
    };
  },

  mounted() {
    this.selected = 1;
  },
  methods: {
    popUpImg(img) {
      this.$store.commit("ui/IMAGE_TO_POPUP", img);
      this.$store.commit("ui/TOGGLE_POPUP_IMAGE", true);
    },
    toScroll(v) {
      const myEl = document.getElementById(v);
      this.openMovileMenu = false;
      this.$smoothScroll({
        scrollTo: myEl,
        duration: 1000,
        offset: -50,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>