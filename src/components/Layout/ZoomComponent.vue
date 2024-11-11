<template>
  <div v-show="popupImage">
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto md:-mt-24 -mt-20">
        <div
          class="flex min-h-screen mt-0 items-end justify-center px-4 pt-4 text-center sm:p-0"
        >
          <span class="hidden h-screen sm:inline-block" aria-hidden="true"
            >&#8203;</span
          >

          <div
            class="relative h-auto md:w-3/4 lg:w-2/3 overflow-hidden  bg-primary px-4 pt-5 pb-4 text-left shadow-xl transition-all"
          >
            <div class="absolute top-0 right-0 mt-1 mr-2 block pt-0">
              <button
                type="button"
                @click="toggleModal(false)"
                class="bg-primary text-secondary hover:text-white focus:outline-none focus:ring-0 focus:ring-four focus:ring-offset-0"
              >
                <span class="sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
               <div class="hidden md:grid grid-cols-1 -ml-14">
            <button @click="changeImage(i)" :class="`bg-primary h-14 w-14 m-1 object-cover border-4 ${getBorderStyle(i.id)}`" v-for="i in imageGallery" :key="i.index">
              <img :src="i.url" class="object-cover h-full w-auto" alt="">
            </button>
          </div>
            </div>

            <div class="flex h-full justify-center object-contain">
              <img
                :src="imageSelected.url"
                alt=""
              />
            </div>
          </div>
         
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    toggleModal(v) {
      this.$store.commit("ui/TOGGLE_POPUP_IMAGE", v);
    },
    getBorderStyle(v){
      if (v == this.imageSelected.id) {
        return "border-white"
      } else {
        return "border-primary"
      }
    },
    changeImage(i){
      this.$store.commit("ui/CHANGE_SINGLE_IMAGE", i);
    }
  },
  unmounted(){
    this.$store.commit("ui/IMAGE_TO_POPUP", [])
  },
  computed: {
    ...mapState("ui", ["popupImage", "imageSelected", "imageGallery"]),
  },
};
</script>
