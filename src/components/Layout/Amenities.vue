<template>

    <div class="bg-primarey md:mt-[1%] w-[100%] p-[4%] lg:p-[2%]" id="Amenidades">
        <div class="flex flex-col-reverse md:flex-row place-items-center justify-between px-[2%]">
            <div class=" font-badScript text-6xl md:text-7xl xl:text-7xl font-bold text-secondary mb-6 xl:mb-10 mt-2">Amenidades</div>
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







</template>

<script>
export default {
    name: "ImageGallery",
    data() {
        return {
            showMenu: false,
            images: [
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-6.png", alt: "Piscinas", title: "Piscinas" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-5.png", alt: "Áreas verdes", title: "Áreas verdes" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-3.png", alt: "Juegos infantiles", title: "Juegos infantiles" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Area+Eventos.jpeg", alt: "Áreas para eventos", title: "Áreas para eventos" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/amenidades-7.png", alt: "Gimnasio y Pilates", title: "Gimnasio y Pilates" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/terraza-a.png", alt: "Terrazas", title: "Terrazas" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Churrasqueras.jpg", alt: "Churrasqueras", title: "Churrasqueras" },
                { src: "https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Ludoteca.jpg", alt: "Ludoteca", title: "Ludoteca" },
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