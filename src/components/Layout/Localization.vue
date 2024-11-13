<template>
    <!--  
    <div id="Lorem Ipsum" class="bg-primary p-[5%] py-[5%]">
        <div class="flex flex-col lg:flex-row">
            <div
                class="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 p-[8%] lg:px-[4%] lg:py-[0%] text-center lg:text-left text-secondary">
                <h4 class="text-sm md:text-base font-normal">
                    Proin cursus
                </h4>

                <div class="font-badScript text-4xl md:text-5xl xl:text-5xl font-bold mb-2 xl:mb-10 ">Ubicación</div>
                <p class=" text-xl mb-2 md:mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus elit nec lectus ornare tincidunt. Quisque vel quam ex. Aenean vestibulum ligula dignissim urna tristique,
                </p>
                <p class=" text-xl mb-2 md:mb-4">
                    a ultrices ipsum lacinia. Integer congue placerat nisl, malesuada pulvinar sem auctor sed. Nullam pharetra nulla odio, vitae lacinia nunc dictum a. Nullam tempor massa in orci porttitor, ac hendrerit leo mollis. Nulla congue orci nulla, vel consequat justo luctus vitae. 
                </p>
                <button @click="toScroll('cotizar')" class="mb-2 px-12 py-2 bg-secondary text-white border-2 duration-600 ">Obtener cotización →</button>

            </div>

            <div class="w-full flex justify-center lg:w-1/2 ">
                <img src="https://fakeimg.pl/1000x1000/171a1f/9d7ee7?text=Owwny"
                    alt=" " class=" w-full m-auto " />
            </div>


        </div>


    </div>-->
    <div class="bg-primarey md:mt-[4%] w-[100%] p-[4%] lg:p-[2%]">
        <div class="flex flex-col md:flex-row place-items-center justify-between px-[2%] text-center md:text-left">
            <div class="font-badScript max-w-[580px] text-4xl md:text-4xl xl:text-4xl font-bold mb-2 xl:mb-10 ">En la mejor ubicación de Puerto Barrios 
                <div class="font-badScript max-w-[580px] text-4xl md:text-4xl xl:text-4xl font-bold mb-2 xl:mb-10 leading-loose -mt-[10px] md:mt-[12px]">Colonia EX-UFCO</div>
            </div>
            <h1 class="flex text-third text-sm md:text-base font-bold">
                Ir con waze
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 ml-2 mt-[5px] text-secondary">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>


            </h1>
  
        </div>
    </div>
    <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/localizacion.png"
                    alt=" " class=" w-full m-auto " />
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