<template>
    <div id="entorno" class="bg-primary p-[4%] py-[4%]">
        <div class="flex flex-col-reverse lg:flex-row">

            <div
                class="flex flex-col justify-center items-center lg:items-center w-full  p-[8%] lg:px-[4%] lg:py-[0%] text-center lg:text-center text-secondary">
<!-- 
                <div class="flex w-full max-w-[70%] justify-around">
                    <div class=" bg-fifth mb-2 xl:mb-10 rounded-full w-24 h-24">
                    </div>
                    <div class=" bg-fifth mb-2 xl:mb-10 rounded-full w-24 h-24">
                    </div>
                    <div class=" bg-fifth mb-2 xl:mb-10 rounded-full w-24 h-24">
                    </div>
                    <div class=" bg-fifth mb-2 xl:mb-10 rounded-full w-24 h-24">
                    </div>
                    <div class=" bg-fifth mb-2 xl:mb-10 rounded-full w-24 h-24">
                    </div>
                </div>
 -->
               
                <button @click="toScroll('cotizar')"
                    class="flex text-lg md:text-lg my-2 px-10 py-3 bg-secondary ease-in-out duration-700 text-white  duration-600 rounded-sm shadow-lg hover:bg-four hover:shadow-none">
                    Obtener detalles
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-6 ml-2 mt-0.5 text-primary">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
    <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Bella-vista-pisina-zona-8.jpg"
        alt=" " class=" w-full m-auto object-cover" />
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