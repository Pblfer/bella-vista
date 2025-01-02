<template>
  <div
    class="flex flex-col items-center justify-center content-center bg-primary text-secondary py-5 md:px-[1%] lg:px-[6%]"
    id="types">
    <div class="w-full flex flex-col lg:mt-4 lg:pr-12 pt-10">
      <h2 class="text-sm ml-1 md:text-start text-third text-center">
        Bella Vista - Puerto Barrios
      </h2>
      <p
        class="text-5xl md:text-5xl xl:text-5xl font-bold md:ml-0 -ml-7 tracking-tight mt-2 lg:text-left text-center">
        Apartamentos
      </p>
      <p class="mt-7 lg:max-w-[660px] w-[100%] px-[10%] lg:px-[0%] tracking-wide text-center text-2xl lg:text-left ">
        Apartamentos de 2, 3 y 4 Habitaciones en Puerto Barrios.
      </p>

      <!-- Lista de Tipos -->
      <div class="w-full">
        <fieldset class="mt-6">
          <div class="flex flex-row items-center justify-center lg:justify-start">
            <div
              v-for="(type, index) in types"
              :key="index"
              :class="[ 
                'grid items-center justify-text-center border-0 p-3 px-2 md:px-6 mx-1 rounded-sm cursor-pointer',
                selected === index ? 'bg-four text-white' : 'bg-fifth text-secondary',
                'hover:bg-four hover:text-white'
              ]"
              @click="updateSelection(index, type)">
              
              <label
                for="type"
                class="px-4 block text-sm md:text-lg lg:text-xl font-normal text-center leading-6 tracking-wider">
                {{ type.name }}
              </label>
              <div class="text-center">
                <p class="text-xs tracking-wider mt-0.5">{{type.des}}</p>
              </div>
            </div>
            
          </div>
        </fieldset>
      </div>

      <!-- Información del Tipo Seleccionado -->
      <div class="mt-10 w-full flex flex-col items-center md:mt-16">
        <p class="font-special text-a1 mt-1 text-xl font-[400] tracking-wider md:text-2xl lg:text-3xl">
          {{ types[selected].name }}
        </p>
        <p class="font-normal text-base md:text-lg lg:text-xl tracking-widest mt-4">
          {{ types[selected].description }}
        </p>
        <img
          class="md:w-[80%] w-[100%] object-cover ease-linear duration-300 md:mx-10 mx-2 mt-4"
          :src="types[selected].variations[selectedVariation].img"
          alt="elemento apartamentos" />
          <button @click="toScroll('cotizar')" class="mb-2 px-12 py-2.5 bg-four text-white text-lg duration-600 mt-8">Cotizar apartamento →</button>
      </div>
      
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedVariation: 0,
      selected: 0,
      types: [
        {
          name: "Modelo A",
          description: "2 habitaciones - 1 baño",
          des: "Desde 60m2",
          variations: [
            {
              type: "Flex",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/APTO+-+A.png",
            },
          ],
        },
        {
          name: "Modelo B",
          description: "2 habitaciones - 2 baños",
          des: "Desde 60m2 a 89m2",
          variations: [
            {
              type: "Flex",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/APTO+-+B.png",
              des: "Desde 60m2 a 89m2",
            },
          ],
        },
        {
          name: "Modelo C",
          description: "3 habitaciones - 2 baños - Estudio",
          des: "Desde 86m2 a 90m2",
          variations: [
            {
              type: "Balcon",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/APTO+-+C.png",
              des: "Desde 86m2 a 90m2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    updateSelection(index, type) {
      this.$store.commit("ui/TYPE_SELECTION", `${type.name}`)
      this.selected = index;
      this.selectedVariation = 0; // Reinicia variación al cambiar de tipo
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
  },
  
};
</script>


<style lang="scss" scoped></style>