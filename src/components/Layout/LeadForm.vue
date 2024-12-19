<template>
  <div class="grid bg-secondary p-6 lg:p-20" id="cotizar">
    <div class="lg:mt-0 lg:w-full">

    </div>
    <div>
      <div class="lg:mt-12 mt-10 flex justify-center">
        <div class="w-full rounded-sm  p-2  md:w-2/5 ">
          <div class="flex flex-col items-center justify-center">

            <img class="w-[240px]"
              src="https://owwny-b2b-base-files.s3.us-east-1.amazonaws.com/websites/bella-vista/BELLA+VISTA+Logo.png"
              alt="BELLA VISTA - Club Residencial" />

          </div>
          <div
            class="relative mb-2 border-0  border-b  shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-secondary mt-14">
            <label for="name"
              class="text-md absolute -top-5  left-0 -mt-2 inline-block text-white font-thin tracking-widest text-a1">Nombre</label>
            <input type="text" name="name" id="name"
              class="block h-9 w-full border-0 bg-transparent p-1 text-lg font-normal tracking-widest text-a1 placeholder-gray-950 text-white focus:ring-0"
              placeholder="" v-model="name" />
          </div>
          <div class="flex gap-2 mt-4">
            <div class="w-2/3 border-0 rounded-md">

              <div class="mt-7 md:mt-1 h-14 p-1">
                <p class="text-white font-thin tracking-wider ml-0">Área</p>
                <vue3-country-intl v-model="countryCode" :onlyValue="true" placeholder="Código"
                  autocomplete="off"></vue3-country-intl>
              </div>
            </div>
            <div
              class="relative md:mt-9 mt-14 w-full border-0  border-b  shadow-sm focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary">
              <label for="name"
                class="text-md absolute -top-5  left-0 -mt-2 inline-block text-white font-thin tracking-widest text-a1">Teléfono</label>
              <input type="phone" name="phone" maxlength="10" id="phone"
                class="block h-9 w-full ring-0 border-0  text-white bg-transparent p-1 text-lg font-normal tracking-widest text-a1 placeholder-gray-500 focus:ring-0"
                placeholder="" v-model="phone" />
            </div>
          </div>

          <div
            class="relative mt-14 border-0  border-b  shadow-sm focus-within:border-secondary focus-within:ring-0 focus-within:ring-a1">
            <label for="name"
              class="text-md absolute -top-5  left-0 -mt-2 inline-block text-white font-thin tracking-widest text-a1">Correo</label>
            <input type="email" name="email" id="email"
              class="block h-9 w-full border-0 bg-none text-white bg-transparent p-1 text-lg font-normal tracking-widest text-a1 placeholder-gray-500 focus:ring-0"
              placeholder="" v-model="email" />
          </div>

          <div class="mt-10 flex justify-end md:mt-12">
            <button v-if="!showLoading && checkData == false"
              class="mb-4 w-full rounded-md cursor-help bg-a3 py-[10px] px-[4%] text-base md:text-lg font-semibold tracking-wider text-white opacity-30 border ">
              Completa tus datos
            </button>
            <button @click="sendLead()" v-if="!showLoading && checkData != false"
              class="mb-2 w-full bg-primary ease-in-out duration-700 ring-0 border-none focus:ring-0 py-[10px] px-[4%] text-base md:text-lg font-semibold tracking-wider text-a1 hover:bg-four hover:text-white hover:shadow-none">
              Solicitar información
            </button>
            <button v-if="showLoading"
              class="disabled mb-2 flex w-full cursor-none touch-none rounded-full bg-secondary py-[10px] px-[4%]  text-base md:text-lg font-semibold tracking-wider text-primary ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="mr-2 mt-0.5 h-6 w-6 animate-spin">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>

              Enviando
            </button>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      countryCode: "502",
      name: "",
      phone: null,
      email: "",
      showLoading: false,
    };
  },
  computed: {
    ...mapState("ui", ["utms"]),
    checkData() {
      if (
        this.name != "" &&
        this.name != null &&
        this.phone != null &&
        this.phone.length > 7 &&
        this.email != ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    sendLead() {
      if (this.checkData == true) {
        this.showLoading = true;
        const url = "https://sq1.owwny.com/webhook/bella-vista-leads";
        let formData = new FormData();
        formData.append("lead_Name", this.name);
        formData.append("lead_Phone", `+${this.countryCode}${this.phone}`);
        formData.append("lead_Email", this.email);
        formData.append("utm_source", this.utms.utm_source);
        formData.append("utm_medium", "Owwny");
        formData.append("utm_campaign", this.utms.utm_campaign);
        formData.append("utm_id", this.utms.utm_id);
        formData.append("utm_term", this.utms.utm_term);
        formData.append("utm_content", this.utms.utm_content);
        const request = new Request(url, {
          method: "POST",
          mode: "no-cors",
          body: formData,
          headers: {
            accept: "application/json;odata=verbose",
            contentType: "text/xml",
          },
        });

        fetch(request);
        setTimeout(() => {
          this.showLoading = false;
          this.$router.push("/thanks")
        }, 2000);

      }
    },
  },
};
</script>

<style lang="css">
.vue-country-intl-input {
  background-color: transparent !important;
}

.vue-country-intl-input .country-intl-label {
  border-color: #16232d !important;
  height: 2.6rem !important;
  background-color: #122347 !important;
  color: #ffffff !important;
  border-radius: 0px !important;
  border: none !important;
}

.vue-country-intl-input .country-intl-label {
  height: 2.2rem !important;
  padding-top: 11px !important;
  border: none !important;
}

.vue-country-intl-input .country-intl-input {

  height: 2.4rem !important;
  color: #ffffff !important;
  border-top: 0 solid #16232d !important;
  border-left: 0 solid #16232d !important;
  border-right: 0 solid #16232d !important;
  border-radius: 0px !important;
  border-bottom: 1px solid #FFFFFF !important;
}

.vue-country-intl-input::placeholder,
.vue-country-intl-input::-webkit-input-placeholder,
.vue-country-intl-input::-moz-placeholder {
  background-color: #16232d !important;
}

.vue-country-intl-input .country-intl-input {
  background-color: #16232d !important;
}

.vue-country-intl-input .dropdown-flag {
  top: 8px !important;
  border: none !important;

}
</style>