<template>
    <div id="Home">
        <div class="absolute w-full">
            <header class=" fixed inset-x-0 z-50">
                <nav class="bg-secondary mx-auto content-center flex items-center justify-end px-3 pt-[4%] pb-[4%] md:pt-[2%] md:pb-[2%] lg:px-14 w-full"
                    aria-label="Global">

                    <div class="absolute flex lg:flex-1 left-0">

                        <a href="/" class=" pt-0 md:pt-2 px-4 bg-secondary w-auto ml-4 ">
                            <span class="sr-only">Bella Vista</span>
                            <img class="h-24 md:h-32 mt-16 w-auto m-2 hidden md:block"
                                src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/BELLA+VISTA+Logo.png"
                                alt="BELLA VISTA - Club Residencial" />
                            <img class="h-16 w-auto m-0 md:hidden "
                                src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/logo+horizontal+blanco.png"
                                alt="BELLA VISTA - Club Residencial" />
                        </a>
                    </div>
                    <div class="flex lg:hidden bg-third/5">
                        <button type="button" @click="showMenu = true"
                            class="-m-2.5 inline-flex items-center justify-center rounded-sm p-2.5 text-white">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-10 w-10 text-primary ease-in-out duration-300 hover:text-white" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div class="w-full content-end justify-end hidden lg:flex lg:gap-x-2 ">


                        <a href="#" @click="toScroll('Amenidades')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:shadow-lg duration-600 hover:shadow-white/5 hover:bg-four py-[12px] px-6 hover:text-fifth  rounded-sm leading-6 text-white">Amenidades</a>
                        <a href="#" @click="toScroll('Ubicacion')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:shadow-lg duration-600 hover:shadow-white/5 hover:bg-four py-[12px] px-6 hover:text-fifth  rounded-sm leading-6 text-white">Ubicación</a>
                        <a href="#" @click="toScroll('types')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:shadow-lg duration-600 hover:shadow-white/5 hover:bg-four py-[12px] px-6 hover:text-fifth  rounded-sm leading-6 text-white">Apartamentos</a>
                        <a href="#" @click="toScroll('respaldo')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:shadow-lg duration-600 hover:shadow-white/5 hover:bg-four py-[12px] px-6 hover:text-fifth rounded-sm leading-6 text-white">Respaldo</a>
                        <a href="#" @click="toScroll('cotizar')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:shadow-lg hover:shadow-white/5 duration-600 bg-four hover:bg-four py-[12px] px-10 hover:text-fifth rounded-sm leading-6 text-white">Cotizar</a>
                    </div>
                </nav>
                <!-- Mobile menu, show/hide based on menu open state. -->
                <div class="lg:hidden" role="dialog" aria-modal="true" v-if="showMenu">
                    <!-- Background backdrop, show/hide based on slide-over state. -->
                    <div class="fixed inset-0 z-50"></div>
                    <div
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-secondary ease-in-out duration-300 px-8 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-end justify-end">

                            <button @click="showMenu = false" type="button"
                                class="-m-2.5 rounded-sm p-2.5 text-white/50 hover:text-white ease-in-out duration-300">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-10 w-full flex flex-col items-center">
                            <router-link to="/" class="-m-1.5 p-1.5">
                                <span class="sr-only">Bella Vista</span>
                                <img class="h-[14rem] w-auto"
                                    src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/BELLA+VISTA+Logo.png"
                                    alt="BELLA VISTA - Club Residencial" />
                            </router-link>
                            <div class="-my-6 divide-y divide-gray-500/10 ml-4">
                                <div class="space-y-6 py-6 grid justify-center text-center mt-4 -ml-4 text-white">

                                    <a href="#" @click="toScroll('Amenidades')"
                                        class="text-lg font-semibold  duration-600 hover:bg-four px-10 tracking-wider ease-in-out duration-700 hover:shadow-lg hover:shadow-white/5 text-white rounded-sm py-2 leading-6 hover:text-white">Amenidades</a>
                                    <a href="#" @click="toScroll('Ubicacion')"
                                        class="text-lg font-semibold  duration-600 hover:bg-four px-4 tracking-wider ease-in-out duration-700 hover:shadow-lg hover:shadow-white/5 text-white rounded-sm py-2 leading-6 hover:text-white">Ubicación</a>
                                    <a href="#" @click="toScroll('types')"
                                        class="text-lg font-semibold  duration-600 hover:bg-four px-4 tracking-wider ease-in-out duration-700 hover:shadow-lg hover:shadow-white/5 text-white rounded-sm py-2 leading-6 hover:text-white">Apartamentos</a>
                                    <a href="#" @click="toScroll('respaldo')"
                                        class="text-lg font-semibold  duration-600 hover:bg-four px-10 tracking-wider ease-in-out duration-700 hover:shadow-lg hover:shadow-white/5 text-white rounded-sm py-2 leading-6 hover:text-white">Respaldo</a>
                                    <a href="#" @click="toScroll('cotizar')"
                                        class="text-lg tracking-wide font-semibold  hover:shadow duration-600 bg-four shadow-lg ease-in-out duration-700 shadow-white/5 hover:bg-four py-[12px] px-10 hover:text-fifth rounded-sm leading-6 text-white">Cotizar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>

    </div>
    <div class="relative flex justify-center flex-col lg:flex-row md:pt-[4rem] pt-[4rem] xl:pt-[5rem]">
        <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/banner.jpg"
            alt="Bella vista puerto barrios"
            class="relative m-auto object-cover md:object-center object-left -z-10 h-[30rem] md:h-auto" />
    </div>

    <div class="relative flex justify-center flex-col lg:flex-row mb-10 z-10 mt-14">

        <div
            class="flex flex-col md:flex-row flex-grow relative -mt-[15%] md:-mt-[10%] w-[100%] lg:w-[680px] px-[4.5%] lg:px-[2%] z-10">
            <div class="w-[100%] shadow-2xl p-[7%] md:p-[6%] m-2 bg-primary z-10">
                <div class="font-refile text-secondary font-bold text-5xl md:text-5xl lg:text-6xl text-center mb-4">79
                </div>
                <div class="font-refile text-secondary font-bold text-xl md:text-1xl lg:text-2xl text-center">
                    Apartamentos </div>
            </div>
            <div class="w-[100%] shadow-2xl p-[7%] md:p-[6%] m-2 bg-primary z-10">
                <div class="font-refile text-secondary font-bold text-5xl md:text-5xl lg:text-6xl text-center mb-4">133
                </div>
                <div class="font-refile text-secondary font-bold text-xl md:text-1xl lg:text-2xl text-center">Parqueos
                    de vehículos</div>
            </div>
            <div class="w-[100%] shadow-2xl p-[7%] md:p-[6%] m-2 bg-primary z-10">
                <div class="font-refile text-secondary font-bold text-5xl md:text-5xl lg:text-6xl text-center mb-4">88
                </div>
                <div class="font-refile text-secondary font-bold text-xl md:text-1xl lg:text-2xl text-center">Parqueos
                    de motocicleta</div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
            currentSlide: 0,
            totalSlides: 3,
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

    }
};
</script>

<style lang="scss" scoped></style>