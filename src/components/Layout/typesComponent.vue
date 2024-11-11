<template>
  <div id="types">
    <div
      class="overflow-hidden flex flex-col items-center justify-center content-center bg-secondary text-primary py-20  md:px-[1%] lg:px-[4%]">
      <div class="mx-auto w-full px-5 md:px-4 lg:px-14">
        <div class="">
          <div class="px-4 flex flex-col items-center justify-center content-center md:px-0 lg:pr-4 lg:pt-4">
            <div class="w-full lg:mx-0 flex flex-col items-center justify-center content-center ">
              <h3 class="font-light text-base ml-1">
                Proin cursus
              </h3>
              <p class="font-abrilFat text-4xl md:text-5xl xl:text-5xl font-bold tracking-tight">
                Apartamentos
              </p>
              <p class="  mt-4 max-w-[660px] w-[90%] tracking-wide text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus elit nec lectus ornare tincidunt.

              </p>
              <div class="grid grid-cols gap-4 pt-8 w-full text-2xl tracking-wider">

                <div class="flex items-center justify-center content-center ">
                  <button @click="selectType(0)" :class="typeSelected === 0 ? activeClass : inactiveClass">
                    2 Habitaciones
                  </button>
                  <button @click="selectType(1)" :class="typeSelected === 1 ? activeClass : inactiveClass">
                    3 Habitaciones
                  </button>
                </div>
                <div v-if="typeSelected === 0" class="flex justify-evenly tracking-wider gap-1 pt-1">

                  <button @click="subTypeSelected = 0" :class="subTypeSelected === 0 ? activeClass : inactiveClass">
                    1A
                  </button>
                </div>


                <div v-if="typeSelected === 1" class="flex justify-center tracking-wider gap-1 pt-1">
                  <button @click="subTypeSelected = 1" :class="subTypeSelected === 3 ? activeClass : inactiveClass">
                    2A
                  </button>
                  <button @click="subTypeSelected = 0" :class="subTypeSelected === 0 ? activeClass : inactiveClass">
                    2B
                  </button>

                </div>
              </div>
            </div>
            <div class=" flex w-auto m-4 ">


              <a href="#" @click="toScroll('cotizar')"
                class="borde underline md:flex hidden md:mt-6 mt-4 leading-4  w-auto items-center border-transparent px-8 pt-0 md:text-base tracking-widest text-primary shadow-xl duration-500 ease-in-out  hover:text-white ">
                Cotizar apartamento
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                  stroke="currentColor" class="size-6 mt-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full m-4">
        <img class="md:h-[32rem] h-auto px-6 md:px-0" :src="selectedImage" alt=" ">
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
        { type: 1, img: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny" },
        { type: 2, img: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny" },
        { type: 3, img: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny" },
        { type: 4, img: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny" },
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
      return 'min-w-[80px] text-base mx-1 py-2 px-6 flex font-semibold justify-center border ease-in-out duration-500  bg-primary border-primary text-secondary';
    },
    inactiveClass() {
      return 'min-w-[80px] bg-white/5 text-base mx-1 py-2 px-6 flex font-semibold justify-center border border-gray-200/70 ease-in-out duration-500 border-secondary  hover:bg-primary hover:border-primary hover:text-secondary ';
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
