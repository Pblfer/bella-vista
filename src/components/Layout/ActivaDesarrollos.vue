<template>
    <div id="respaldo" class="bg-primary p-[5%] pt-[5%] pb-[0%]">
        <div class="flex flex-col lg:flex-col">
            <div
                class="flex flex-col mb-6 justify-center items-center lg:items-center w-full  p-[8%] lg:px-[4%] lg:py-[0%] text-center md:text-left text-secondary">

                <div
                    class="w-full font-badScript text-5xl md:text-6xl xl:text-6xl font-bold mb-2 text-center lg:text-left">
                    Activa Desarrollos
                </div>
                <p class=" text-lg mb-0 text-center lg:text-left mt-6">
                    Con una trayectoria sólida en el desarrollo de proyectos inmobiliarios de alta calidad, ACTIVA
                    Desarrollos se especializa en residencias que enriquecen la vida de sus habitantes. Nos enfocamos en
                    integrar sostenibilidad y modernidad en cada diseño, asegurando una inversión sólida que incrementa
                    su valor con el tiempo.
                </p>
                <div class="flex md:justify-start justify-center w-full">
                    <a href="https://www.desarrollosactiva.com/" target="_blank" class="mb-2 px-12 py-2.5 bg-none text-secondary bg-secondary/10 text-xl duration-600 mt-4">Ver sitio web →</a>
                </div>
               
            </div>

        </div>
    </div>

    <div>
      <ul
        role="list"
        class="grid grid-cols-2 gap-x-1 gap-y-1 sm:grid-cols-3 sm:gap-x-0 lg:grid-cols-0 xl:gap-x-1"
      >
        <li class="relative" v-for="(i, index) in images" :key="index">
          <div
            class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden bg-gray-50"
          >
            <img
              :src="i.url"
              alt="Elemento apartamentos, plaza berlín"
              class="pointer-events-none object-cover"
            />
            <div class="absolute bottom-0 inset-0 hover:bg-secondary/50 bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
                                
                <!-- Contenido principal -->
                <div class="absolute inset-0 bg-cover bg-center rounded-lg" style="background-image: url('https://via.placeholder.com/150');"></div>
                
                <!-- Texto que aparece en hover -->
                <p class="absolute text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {{i.title}}
                </p>


            </div>
          </div>
        </li>
  
        <!-- More files... -->
      </ul>
    </div>

</template>
<script>

export default {

    data() {
        return {
            images:[
                  {text:"", title:"Residenciales los Apóstoles", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/apostoles_1.png"},
                  {text:"", title:"Residenciales los Apóstoles", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/apostoles_4.png"},
                  {text:"", title:"Residenciales los Apóstoles", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/apostoles_3.jpeg"},
                  {text:"", title:"Óptima centro de negocios", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima_1.jpg"},
                  {text:"", title:"Óptima centro de negocios", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/optima_2.jpg"},
                  {text:"", title:"La Serenísima complejo residencial", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima_1.jpg"},  
                  {text:"", title:"La Serenísima complejo residencial", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima_2.jpg"},
                  {text:"", title:"La Serenísima complejo residencial", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima_4.jpg"},    
                  {text:"", title:"La Serenísima complejo residencial", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/serenisima_3.jpg"},   
                  {text:"", title:"Platina centro de negocios", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina_2.jpg"},
                  {text:"", title:"Platina centro de negocios", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina_3.jpg"},   
                  {text:"", title:"Platina centro de negocios", url:"https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/platina_1.jpg"},
              ]
        };
    },
    methods: {
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


  