<template>

    <div class="md:mt-[4%] w-[100%] p-[4%] lg:p-[2%]">
        <div class="flex flex-col md:flex-row place-items-center justify-between px-[2%] text-center md:text-left">
            <div class="font-sans max-w-[580px] text-4xl md:text-4xl xl:text-4xl font-bold mb-2 xl:mb-0 ">
                En la mejor ubicación de Puerto Barrios
                <div
                    class="font-badScript max-w-[580px] text-4xl md:text-5xl text-secondary xl:text-5xl font-bold mb-2 xl:mb-10 leading-loose -mt-[10px] md:mt-[20px]">
                    Colonia EX-UFCO</div>
            </div>
            <a href="#" target="_blank" class="flex hover:underline ease-in-out duration-700 text-black text-lg md:text-xl font-semibold">
                Ir con waze
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-5 ml-2 mt-0 text-secondary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>


            </a>

        </div>
    </div>
    <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/localizacion.png"
        alt="bella vista puerto barrios aeropuerto" class=" w-full m-auto " />
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

<style scoped></style>