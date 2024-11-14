<template>
    <div id="Home">
        <div class="absolute w-full">
            <header class=" absolute inset-x-0 z-50">
                <nav class="bg-secondary mx-auto flex items-center justify-between px-3 pt-[3.5%] pb-[5%] md:pt-[2%] md:pb-[2%] lg:px-14 w-full"
                    aria-label="Global">
                    <div class="absolute flex lg:flex-1 ">
                        <a href="/" class=" pt-2 px-4 bg-secondary">
                            <span class="sr-only">Bella Vista</span>
                            <img class="h-16 md:h-36 mt-14 w-auto"
                                src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/BELLA+VISTA+Logo.png"
                                alt="BELLA VISTA - Club Residencial" />
                        </a>
                    </div>
                    <div class="flex lg:hidden bg-third/5">
                        <button type="button" @click="showMenu = true"
                            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-10 w-10 text-third ease-linear duration-300 hover:text-white" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div class="w-full content-end justify-end hidden lg:flex lg:gap-x-4 mt-0">

                        <a href="#" @click="toScroll('Amenidades')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:bg-four px-6 hover:shadow-lg hover:shadow-white/5 rounded-sm py-2 leading-6 text-white">Amenidades</a>
                        <a href="#" @click="toScroll('Newsletter')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:bg-four px-6 hover:shadow-lg hover:shadow-white/5 rounded-sm py-2 leading-6 text-white">Ubicación</a>
                        <a href="#" @click="toScroll('cotizar')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:bg-four px-6 hover:shadow-lg hover:shadow-white/5 rounded-sm py-2 leading-6 text-white">Apartamentos</a>
                        <a href="#" @click="toScroll('cotizar')"
                            class="text-lg tracking-wide font-semibold ease-in-out duration-700 hover:bg-four px-6 hover:shadow-lg hover:shadow-white/5 rounded-sm py-2 leading-6 text-white">Respaldo</a>
                        <p class="text-2xl text-white">|</p>
                        <a href="#" @click="toScroll('cotizar')"
                            class="text-lg tracking-wide font-semibold duration-600 bg-four px-10 shadow-xl hover:shadow-lg ease-in-out duration-500 hover:shadow-white/5 rounded-sm py-2 leading-6 text-white">Cotizar</a>
                    </div>
                </nav>
                <!-- Mobile menu, show/hide based on menu open state. -->
                <div class="lg:hidden" role="dialog" aria-modal="true" v-if="showMenu">
                    <!-- Background backdrop, show/hide based on slide-over state. -->
                    <div class="fixed inset-0 z-50"></div>
                    <div
                        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary ease-linear duration-300 px-8 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div class="flex items-end justify-end">

                            <button @click="showMenu = false" type="button"
                                class="-m-2.5 rounded-md p-2.5 text-white hover:text-third ease-linear duration-300">
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
                                <img class="h-24 w-auto"
                                    src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/BELLA+VISTA+Logo.png"
                                    alt="BELLA VISTA - Club Residencial" />
                            </router-link>
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-4 py-6 grid justify-center text-center mt-4 -ml-4 text-white">
                                    <a href="#" @click="toScroll('Home')"
                                        class="text-lg font-semibold ease-linear duration-600 hover:bg-third px-4 tracking-wider text-white rounded-md py-2 leading-6 hover:text-secondary">Inicio</a>
                                    <a href="#" @click="toScroll('Amenidades')"
                                        class="text-lg font-semibold ease-linear duration-600 hover:bg-third px-4 tracking-wider text-white rounded-md py-2 leading-6 hover:text-secondary">Amenidades</a>
                                    <a href="#" @click="toScroll('Newsletter')"
                                        class="text-lg font-semibold ease-linear duration-600 hover:bg-third px-4 tracking-wider text-white rounded-md py-2 leading-6 hover:text-secondary">Newsletter</a>
                                    <a href="#" @click="toScroll('cotizar')"
                                        class="text-lg font-semibold ease-linear duration-600 hover:bg-third px-4 tracking-wider text-white rounded-md py-2 leading-6 hover:text-secondary">Contáctanos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>

    </div>
    <div class="relative flex justify-center flex-col lg:flex-row pt-20">
        <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/banner.jpg" alt=" "
            class="relative m-auto object-cover -z-10 " />
    </div>

    <div class="relative flex justify-center flex-col lg:flex-row mb-10 z-10 mt-14">

        <div
            class="flex flex-col md:flex-row flex-grow relative -mt-[15%] md:-mt-[10%] w-[100%] lg:w-[680px] px-[4.5%] lg:px-[2.5%]  z-10">
            <div class="w-[100%] shadow-2xl p-[14%] md:p-[5%] m-2 bg-primary z-10">
                <div class="font-refile text-secondary font-bold text-3xl md:text-5xl lg:text-6xl text-center mb-4">79
                </div>
                <div class="font-semibold  text-secondary text-xl md:text-1xl lg:text-2xl text-center">
                    Apartamentos </div>
            </div>
            <div class="w-[100%] shadow-2xl p-[14%] md:p-[5%] m-2 bg-primary z-10">
                <div class="font-refile text-secondary font-bold text-3xl md:text-5xl lg:text-6xl text-center mb-4">133
                </div>
                <div class="font-refile text-secondary font-bold text-xl md:text-1xl lg:text-2xl text-center">Parqueos
                    de vehículos</div>
            </div>
            <div class="w-[100%] shadow-2xl p-[14%] md:p-[5%] m-2 bg-primary z-10">
                <div class="font-refile text-secondary font-bold text-3xl md:text-5xl lg:text-6xl text-center mb-4">88
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
                duration: 300,
                offset: -50,
            });
            this.showMenu = false
        },
        prevSlide() {
            if (this.currentSlide === 0) {
                this.currentSlide = this.totalSlides - 1;
            } else {
                this.currentSlide--;
            }
        },
        // Ir a la diapositiva siguiente
        nextSlide() {
            if (this.currentSlide === this.totalSlides - 1) {
                this.currentSlide = 0;
            } else {
                this.currentSlide++;
            }
        },
        goToSlide(index) {
            this.currentSlide = index;
        },
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