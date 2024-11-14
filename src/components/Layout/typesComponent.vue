<template>
  <div id="types">
    <div
      class="overflow-hidden flex flex-col items-center justify-center content-center bg-primary text-secondary py-5  md:px-[1%] lg:px-[4%]">
      <div class="mx-auto w-full px-5 md:px-4 lg:px-14">
        <div class="">
          <div class="px-4 flex flex-col items-center justify-center content-center md:px-0 lg:pr-4 lg:pt-0">
            <div class="w-full lg:mx-0 flex flex-col justify-center content-center ">
              <h3 class="text-lg ml-1 text-right text-third">
                Bella Vista - Puerto Barrios
              </h3>
              <p class="font-badScript text-4xl md:text-5xl xl:text-5xl font-bold tracking-tight mt-4">
                Apartamentos
              </p>
              <p class="mt-4 max-w-[660px] w-[90%] tracking-wide text-center md:text-left">
                Apartamentos de 2, 3 y 4 Habitaciones en Puesto Barrios.

              </p>
              <div class="grid grid-cols gap-4 pt-8 w-full text-2xl tracking-wider">

                <div class="flex  ">
                  <button @click="selectType(0)" :class="typeSelected === 0 ? activeClass : inactiveClass">
                   Tipo A
                  </button>
                  <button @click="selectType(1)" :class="typeSelected === 1 ? activeClass : inactiveClass">
                  Tipo B
                  </button>
                  <button @click="selectType(2)" :class="typeSelected === 2 ? activeClass : inactiveClass">
                  Tipo C
                  </button>
                </div>
                <div v-if="typeSelected === 0" class="flex justify-evenly tracking-wider gap-1 pt-1">
                </div>


                <div v-if="typeSelected === 1" class="flex justify-center tracking-wider gap-1 pt-1">

                </div>
             
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="flex flex-col content-center items-center justify-center w-full md:px-4 lg:px-14">
        <img class="w-full h-auto px-[0%] md:px-[12%] lg:px-[14%]" :src="selectedImage" alt=" ">
        <p class=" text-xl my-2 md:my-4 text-center px-[5%]">
                    Sit deserunt proident consectetur aute anim enim occaecat labore cupidatat Lorem velit pariatur tempor ut sunt sit Lorem. Eiusmod ad fugiat occaecat ex exercitation eiusmod voluptate elit do ut reprehenderit anim deserunt duis enim enim tempor ut. 
                </p>
                <button @click="toScroll('cotizar')"
                    class="flex text-xl md:text-2xl my-2 px-14 py-4 bg-four text-white border-2 duration-600 rounded-md">
                    Obtener detalles
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 ml-2 mt-[6px] text-primary">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
      </div>          
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeSelected: 0,
      subTypeSelected: 0,
      types: [
        { type: 1, img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo+a.png" },
        { type: 2, img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo+b.png" },
        { type: 3, img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo+c.png" },
     
      ]
    }
  },
  computed: {
    selectedImage() {
      if (this.typeSelected === 1) {
        return this.subTypeSelected === 0 ? this.types[1].img : this.types[2].img;
      }
      return this.types[this.typeSelected].img;
    },
    activeClass() {
      return 'min-w-[80px] text-white text-base mx-1 py-2 px-6 flex font-semibold justify-center ease-in-out duration-500  bg-four text-secondary rounded-md ';
    },
    inactiveClass() {
      return 'min-w-[80px] bg-fifth text-base mx-1 py-2 px-6 flex font-semibold justify-center ease-in-out duration-500 border-secondary bg-fifth hover:bg-bg-four hover:text-primary rounded-md';
    }
  },
  methods: {
    selectType(type) {
      this.typeSelected = type;
      this.subTypeSelected = 0; // Reset sub type when changing the main type
    },
    toScroll(v) {
      this.showMenu = false
      const myEl = document.getElementById(v)
      this.$smoothScroll({
        scrollTo: myEl,
        duration: 1000,
        offset: -50,
      })
    },
  }
};
</script>

<style lang="scss" scoped></style>
