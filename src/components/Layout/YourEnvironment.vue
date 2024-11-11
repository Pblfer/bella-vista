<template>
    <div id="entorno" class="bg-primary p-[5%] py-[5%]">
        <div class="flex flex-col-reverse lg:flex-row">
            <div class="w-full flex flex-col justify-center lg:w-1/2 ">

                <div class="flex justify-between mb-[2%] md:pb-[0.5%]">
                    <img src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny"
                        alt=" " class="w-full h-full object-cover " />
                </div>


                <div class="flex flex-col md:flex-row justify-between pb-[1%]">
                    <!-- Imagenes inferiores -->
                    <div class="w-full md:w-1/2 mb-[2%]  md:mb-[0%]">
                        <img src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny"
                            alt=" " class="w-full h-full object-fill object-center " />
                    </div>

                    <div class=" w-full md:w-1/2 pl-[0%] md:pl-[2%]">
                        <img src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny"
                            alt=" " class="w-full h-full object-center object-cover " />

                    </div>
                </div>
            </div>
            <div
                class="flex flex-col justify-center items-center lg:items-end w-full lg:w-1/2 p-[8%] lg:px-[4%] lg:py-[0%] text-center lg:text-right text-secondary">
                <h1 class="text-sm md:text-base font-normal">
                    Proin cursus
                </h1>

                <div class=" font-abrilFat text-4xl md:text-5xl xl:text-5xl font-bold mb-2 xl:mb-10 ">Tu Entorno</div>
                <p class=" text-xl mb-2 md:mb-4">
                    Nunc semper orci ut ex porta, eget consequat augue vestibulum. Sed eget quam quis ligula gravida lacinia ut at odio. Praesent nec aliquam nisl.Aliquam erat volutpat. 
                </p>
                <p class=" text-xl mb-2 md:mb-4">
                    Integer sit amet nisi nec mauris sollicitudin auctor ac eu orci. Aliquam erat volutpat. Fusce enim mauris, ullamcorper sit amet ultricies ut, venenatis id nibh. Mauris non lacinia.


                </p>
                <button @click="toScroll('cotizar')"
                    class="mb-2 px-12 py-2 bg-secondary text-white border-2 duration-600 ">Más información</button>

            </div>




        </div>


    </div>
    <img src="https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny"
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