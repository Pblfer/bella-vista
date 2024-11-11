<template>
  <div v-show="tourToggle">
    <div
      class="relative z-30"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 -mt-20 overflow-y-auto md:-mt-24">
        <div
          class="mt-0 flex min-h-screen items-end justify-center px-4 pt-4 text-center sm:p-0"
        >
          <span class="hidden h-screen sm:inline-block" aria-hidden="true"
            >&#8203;</span
          >

          <div
            class="relative h-full overflow-hidden bg-primary px-4 pt-5 pb-4 text-left shadow-xl transition-all"
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
                  class="h-8 w-8"
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
              <div class="-ml-14 hidden grid-cols-1 md:grid"></div>
            </div>

            <div class="flex h-[42rem] md:w-[86rem] w-full justify-center md:p-2 p-0">
              <iframe
                class="h-full w-full"
                src="https://eyeflytech.viewin360.co/share/collection/7vcNb?logo=1&info=0&logosize=130&fs=1&vr=1&thumbs=1"
              ></iframe>
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
      this.$store.commit("ui/TOGGLE_TOUR", v);
    },
  },
  unmounted() {
    ///this.$store.commit("ui/IMAGE_TO_POPUP", [])
  },
  computed: {
    ...mapState("ui", ["tourToggle"]),
  },
};
</script>
