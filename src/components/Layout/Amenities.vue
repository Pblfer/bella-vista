<template>

    <div class="bg-primarey md:mt-[1%] w-[100%] p-[4%] lg:p-[2%]" id="Amenidades">
        <div class="flex flex-col-reverse md:flex-row place-items-center justify-between px-[2%]">
            <div class="font-badScript text-7xl md:text-7xl xl:text-7xl font-bold text-secondary mb-6 xl:mb-10 mt-2">Amenidades</div>
            <h1 class="w-full text-lg mb-4 md:mb-0 ml-1 md:text-right text-center text-third ">
                Bella Vista - Puerto Barrios
            </h1>
  
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
            <!-- Itera sobre el array de imágenes y crea un elemento para cada una -->
            <div v-for="(image, index) in images" :key="index" class="relative">
                <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover rounded-sm" />
                <!-- Superposición de título y fondo -->
                <div class="absolute bottom-0 left-0 w-full bg-secondary/90 text-white text-center py-2">
                    <p class="font-bold text-xl p-2">{{ image.title }}</p>
                </div>
            </div>
        </div>
    </div>






   <!--
    <div id="Amenidades" class="bg-primary ">
        <div class="flex flex-col lg:flex-row">
            <div
                class="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 p-[8%] lg:px-[6%] lg:py-[2%] text-center lg:text-left text-secondary">
                <h4 class="text-sm md:text-base font-normal">
                    Proin cursus
                </h4>

                <div class="font-badScript text-4xl md:text-5xl xl:text-5xl font-bold mb-2 xl:mb-10 ">Amenidades</div>
                <p class=" text-xl mb-2 md:mb-4">
                    Vestibulum tempus quam pretium rutrum lacinia. <strong class="text-black">Etiam nulla</strong>
                    Maecenas efficitur scelerisque odio in faucibus. Nam orci augue, fringilla eu vulputate eu,
                    consectetur sed diam. Curabitur a pulvinar erat.
                </p>
                <p class=" text-xl mb-2 md:mb-4">
                    Nam et ante id nulla fringilla pulvinar. Donec tristique hendrerit quam, ac lacinia leo tincidunt
                    quis. Praesent consectetur non eros eget commodo.
                </p>
                <button @click="toScroll('cotizar')"
                    class="mb-2 px-12 py-2 bg-secondary text-white border-2 duration-600 ">Conocer más →</button>

            </div>

            <div class="w-full flex justify-center lg:w-1/2 ">
                <img src="https://fakeimg.pl/1200x1200/171a1f/9d7ee7?text=Owwny" alt=" " class=" w-full m-auto " />
            </div>


        </div>


    </div>-->

</template>

<script>
export default {
    name: "ImageGallery",
    data() {
        return {
            showMenu: false,
            images: [
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-1.png", alt: "Piscinas", title: "Piscinas" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-2.png", alt: "Áreas verdes", title: "Áreas verdes" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-3.png", alt: "Juegos infantiles", title: "Juegos infantiles" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-4.png", alt: "Áreas para eventos", title: "Áreas para eventos" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-5.png", alt: "Gimnasio y Pilates", title: "Gimnasio y Pilates" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-6.png", alt: "Terrazas", title: "Terrazas" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-7.png", alt: "Churrasqueras", title: "Churrasqueras" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-8.png", alt: "Ludoteca", title: "Ludoteca" },
            ]

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