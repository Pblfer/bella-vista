<template>
    <div id="Amenidades" class="bg-primary ">
        <div class="flex flex-col lg:flex-row">
            <div
                class="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 p-[8%] lg:px-[6%] lg:py-[2%] text-center lg:text-left text-secondary">
                <h4 class="text-sm md:text-base font-normal">
                    Proin cursus
                </h4>

                <div class="font-abrilFat text-4xl md:text-5xl xl:text-5xl font-bold mb-2 xl:mb-10 ">Amenidades</div>
                <p class=" text-xl mb-2 md:mb-4">
                    Vestibulum tempus quam pretium rutrum lacinia. <strong class="text-black">Etiam nulla</strong>
                    Maecenas efficitur scelerisque odio in faucibus. Nam orci augue, fringilla eu vulputate eu, consectetur sed diam. Curabitur a pulvinar erat. 
                </p>
                <p class=" text-xl mb-2 md:mb-4">
                    Nam et ante id nulla fringilla pulvinar. Donec tristique hendrerit quam, ac lacinia leo tincidunt quis. Praesent consectetur non eros eget commodo. 
                </p>
                <button @click="toScroll('cotizar')"
                    class="mb-2 px-12 py-2 bg-secondary text-white border-2 duration-600 ">Conocer más →</button>

            </div>

            <div class="w-full flex justify-center lg:w-1/2 ">
                <img src="https://fakeimg.pl/1200x1200/171a1f/9d7ee7?text=Owwny"
                    alt=" " class=" w-full m-auto " />
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