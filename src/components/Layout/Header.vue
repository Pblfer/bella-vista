<template>
  
  <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" v-if="showMenu">

  <div class="fixed inset-0 bg-four bg-opacity-10 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-secondary py-6 shadow-xl">
            <div class="px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <div class="ml-3 flex h-7 items-center">
                  <button type="button" @click="showMenu = false" class="relative rounded-sm bg-primary text-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    <span class="absolute -inset-2.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
              <div
          class="ease-in-out duration-300"
          role="dialog"
          aria-modal="true"

        >
          
            <div class="flex justify-center  mt-10">
              <a href="/">
                <img
                  src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny"
                  alt=" Apartamentos Zona "
                  class="h-32 mx-auto fl"
                />
              </a>
             
            </div>
            <div
              class="mt-6 flow-root"
              v-show="showMenu"
              role="dialog"
              aria-modal="true"
            >
              <div class="-my-6 divide-y divide-primary/25">
                <div class="space-y-2 py-6 text-center text-white">
                  <a
                    href="#" @click="toScroll('Ubicacion')"
                    class="-mx-3 block rounded-sm px-3 py-2 text-lg font-semibold leading-7 text-primary hover:text-secondary hover:bg-four"
                    >Ubicación</a
                  >
                  <a
                    href="#" @click="toScroll('entorno')"
 class="-mx-3 block rounded-sm px-3 py-2 text-lg font-semibold leading-7 text-primary hover:text-secondary hover:bg-four"
                    >Tu Entorno</a
                  >
                  <a
                    href="#" @click="toScroll('Amenidades')"
                     class="-mx-3 block rounded-sm px-3 py-2 text-lg font-semibold leading-7 text-primary hover:text-secondary hover:bg-four"
                    >Amenidades</a
                  >
                  <a
                    href="#" @click="toScroll('types')"
                     class="-mx-3 block rounded-sm px-3 py-2 text-lg font-semibold leading-7 text-primary hover:text-secondary hover:bg-four"
                    >Apartamentos</a
                  >
                  
                  <!-- <a
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-third"
                    >IA</a
                  > -->
                </div>
                <div class="py-6 text-center text-white">
                  <a
                    @click="toScroll('cotizar')"
                                        class="-mx-3 block rounded-sm px-3 py-2 text-lg font-semibold leading-7 text-secondary bg-primary hover:text-secondary hover:bg-four"
                    >Cotizar apartamento →</a
                  >
                </div>
              </div>
            </div>
          </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  <div class="bg-secondary p-[5%] pt-[0%]">
    <div
        class="flex justify-end justify-content-end pt-5 pb-0 w-full"
      >
    <button
          @click="showMenu = true"
          type="button"
          class="-m-1.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    <div class="flex justify-center mb-4 h-auto w-2/1">
      <img src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny" alt=" Apartamentos Zona "
        class="w-full max-w-[600px] h-full object-cover " />
    </div>
    <div class="">
      <!-- Imagen principal (parte superior izquierda) grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -->
      <div class="flex flex-col md:flex-row pb-[1%] md:pb-[1%]">

        <div class="w-full md:w-3/5 mb-[2%] md:mb-0 row-span-10 relative ">
          <img src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny"
            alt=" " class="w-full h-full object-cover " />
          <div class="absolute bottom-0 w-full bg-white bg-opacity-80 p-4">
            <h2 class="text-xl font-semibold text-gray-900">Consectetur</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
        </div>

        <!-- Imagen superior derecha -->
        <div class="relative w-full mb-[2%] md:mb-[0%] md:w-2/5 md:pl-[1%]">
          <img src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny"
            alt=" " class="w-full h-full object-cover " />
        </div>


      </div>
      <div class="flex flex-col md:flex-row justify-between pb-[1%]">

        <!-- Imagenes inferiores -->
        <div class="relative mb-[2%] md:mb-[0%]">
          <img src="https://fakeimg.pl/1500x1200/171a1f/9d7ee7?text=Owwny"
            alt=" " class="w-full h-full object-cover " />
        </div>
        <div class="relative mb-[2%] md:mb-[0%] md:mx-[1%]">
          <img src="https://fakeimg.pl/1500x1200/171a1f/9d7ee7?text=Owwny"
            alt=" " class="w-full h-full object-cover " />
        </div>
        <div class="relative">
          <img
            src="https://fakeimg.pl/1500x1200/171a1f/9d7ee7?text=Owwny"
            alt=" " class="w-full h-full object-cover " />
          <div class="absolute bottom-0 w-full bg-white bg-opacity-80 p-4">
            <h2 class="text-xl font-semibold text-gray-900">Consectetur</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet </p>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      showMenu: false,

    };
  },
  methods: {

    toScroll(v) {
      const myEl = document.getElementById(v);
      this.$smoothScroll({
        scrollTo: myEl,
        duration: 1000,
        offset: 10,
      });
      this.showMenu = false;
    },
  },

};
</script>

<style scoped>
/* Puedes añadir estilos adicionales si es necesario */
</style>