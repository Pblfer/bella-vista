<template>
  <div
    class="flex flex-col items-center justify-center content-center bg-primary text-secondary py-5 md:px-[1%] lg:px-[4%]"
    id="types">
    <div class="w-full flex flex-col lg:mt-4">
      <div class="flex flex-col-reverse md:flex-row place-items-center justify-between ">
        <p
          class="font-badScript text-6xl md:text-7xl xl:text-7xl font-bold md:ml-0 -ml-7 tracking-tight mt-4 lg:text-left text-center mb-4 xl:mb-6">
          Apartamentos
        </p>
        <h2 class="w-full text-lg mb-4 md:mb-0 ml-1 md:text-right text-center text-third ">
          Bella Vista - Puerto Barrios
        </h2>
        
    </div>

      <p class="mt-4 lg:max-w-[660px] w-[100%] px-[10%] lg:px-[1%] tracking-wide text-center text-2xl lg:text-left ">
        Apartamentos de 2, 3 y 4 Habitaciones en Puesto Barrios.
      </p>

      <!-- Lista de Tipos -->
      <div class="w-full">
        <fieldset class="mt-6">
          <div class="flex flex-row items-center justify-center lg:justify-start">
            <div
              v-for="(type, index) in types"
              :key="index"
              :class="[ 
                'flex items-center border-0 py-[10px] px-[4%]  mx-1 rounded-md cursor-pointer',
                selected === index ? 'bg-four text-white' : 'bg-fifth text-secondary',
                'hover:bg-four hover:text-white'
              ]"
              @click="updateSelection(index)">
              
              <label
                for="type"
                class="ml-2 block text-base md:text-lg lg:text-xl font-normal leading-6 tracking-wider">
                {{ type.name }}
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <!-- Información del Tipo Seleccionado -->
      <div class="mt-10 w-full flex flex-col items-center md:mt-4">
        <p class="font-special text-a1 mt-1 text-xl font-[400] tracking-wider md:text-2xl lg:text-3xl">
          {{ types[selected].name }}
        </p>
        <p class="font-normal text-base md:text-lg lg:text-xl tracking-widest mt-6">
          {{ types[selected].description }}
        </p>
        <img
          class="w-full h-auto px-[0%] md:px-[16%] lg:px-[17%] ease-linear duration-300"
          :src="types[selected].variations[selectedVariation].img"
          alt="elemento apartamentos" />
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
          name: "Tipo A",
          description: "2 habitaciones - 1 baño",
          variations: [
            {
              type: "Flex",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo-a.png",
            },
          ],
        },
        {
          name: "Tipo B",
          description: "2 habitaciones - 2 baños",
          variations: [
            {
              type: "Flex",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo+b.png",
            },
          ],
        },
        {
          name: "Tipo C",
          description: "3 habitaciones - 2 baños - Estudio",
          variations: [
            {
              type: "Balcon",
              img: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/tipo+c.png",
            },
          ],
        },
      ],
    };
  },
  methods: {
    updateSelection(index) {
      this.selected = index;
      this.selectedVariation = 0; // Reinicia variación al cambiar de tipo
    },
  },
};
</script>


<style lang="scss" scoped></style>