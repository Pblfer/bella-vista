<template>
    <div id="entorno" class="bg-primary p-[4%] py-[1%]">
        <div class="flex flex-col-reverse lg:flex-row">
            
            <div
                class="flex flex-col justify-center items-center lg:items-center w-full  p-[8%] lg:px-[4%] lg:py-[0%] text-center lg:text-center text-secondary">
                <h1 class="text-sm md:text-base font-normal">
                    Proin cursus
                </h1>

                <div class=" font-badScript text-4xl md:text-5xl xl:text-5xl font-bold mb-2 xl:mb-10 ">Tu Entorno</div>
                <p class=" text-xl mb-2 md:mb-4">
                    Sit deserunt proident consectetur aute anim enim occaecat labore cupidatat Lorem velit pariatur tempor ut sunt sit Lorem. Eiusmod ad fugiat occaecat ex exercitation eiusmod voluptate elit do ut reprehenderit anim deserunt duis enim enim tempor ut. 

                </p>
                <button @click="toScroll('cotizar')"
                    class="mb-2 px-12 py-2 bg-secondary text-white border-2 duration-600 ">Obtener detalles</button>

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