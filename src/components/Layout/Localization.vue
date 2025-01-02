<template>

    <!------

    <div class="md:mt-[4%] w-[100%] p-[4%] lg:p-[2%] " id="Ubicacion">
        <div class="flex flex-col md:flex-row place-items-center justify-between px-[2%] text-center md:text-left">
            <div class="font-sans max-w-[580px] text-3xl md:text-4xl xl:text-4xl font-bold mb-2 xl:mb-0 ">
                En la mejor ubicación de Puerto Barrios
                <div
                    class="font-badScript max-w-[580px] text-5xl md:text-5xl text-secondary xl:text-5xl font-bold mb-2 xl:mb-10 leading-loose  md:mt-[20px]">
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
----->
    <div class="flex flex-col lg:flex-row md:mt-[0%] w-[100%] p-[4%] lg:p-[2%] bg-gray-100" id="Ubicacion">
            <div
                class="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 p-[8%] lg:px-[4%] lg:py-[0%] text-center lg:text-left text-secondary">
                
                <div class=" font- text-5xl md:text-5xl xl:text-5xl font-bold text-secondary mb-0 mt-2">Ubicación</div>
                <h4 class="text-base md:text-xl mt-6 font-normal mb-2 xl:mb-4">
                    En la mejor ubicación de Puerto Barrios  Colonia EX-UFCO
                </h4>

                
                <p class="text-lg mb-2 md:mb-4">
                    Descubre un nuevo estilo de vida en el proyecto residencial Bella Vista, ubicado estratégicamente en
                    <span class="font-bold">la Colonia ExUFCO</span> de Puerto Barrios. Este desarrollo inmobiliario combina modernidad, accesibilidad
                    y seguridad para ofrecer un entorno perfecto para ti y tu familia.

                </p>
                
                <p class="text-lg mb-2 md:mb-4">
                    brindando apartamentos diseñados para maximizar la funcionalidad y el confort. Con espacios bien optimizados y acabados de alta calidad, este es el lugar ideal para disfrutar de la comodidad que mereces y mejorar tu calidad de vida.
                </p>
                <button @click="toScroll('cotizar')" class="mb-2 px-12 py-2.5 bg-four text-white text-lg duration-600 mt-4">Obtener cotización →</button>

            </div>

            <div class="w-full flex justify-center lg:w-1/2 overflow-hidden rounded-lg">
                <img src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/Mapa.png"
                    alt=" " class=" h-auto object-cover " />
            </div>


        </div>


    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5431.173529702356!2d-88.59791906800001!3d15.728924981299013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f66d900057ee0d7%3A0xfec4f3e8ddb94397!2sBella%20Vista!5e0!3m2!1ses-419!2sgt!4v1731609509075!5m2!1ses-419!2sgt" class="w-full" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
   
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