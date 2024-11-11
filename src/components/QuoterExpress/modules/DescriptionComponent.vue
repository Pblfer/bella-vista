<template>
  <div>
    <div>
      <div>
        <img
          :src="viewProperty.base_plane"
          class="mt-4 mb-0 object-contain p-1 md:mb-2 md:p-8"
          alt=""
        />
      </div>
      <div class="mx-8 mt-4 mb-8 flex gap-4 md:mx-16 md:mt-0 md:mb-0">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-6 w-6"
            viewBox="0 0 512 512"
          >
            <title>Bed</title>
            <path
              d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16M256 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
          <p class="ml-2 text-lg">{{ viewProperty.bedrooms }}</p>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-6 w-6"
            viewBox="0 0 512 512"
          >
            <title>Car Sport</title>
            <path
              d="M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4zM400 384h56v16h-56zM56 384h56v16H56z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84zM431.57 243.05a3.23 3.23 0 00-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 00-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0052.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 00.49-16.51zM80.43 243.05a3.23 3.23 0 013.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0130.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 01-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 01-.49-16.51z"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M432 192h16M64 192h16M78 211s46.35-12 178-12 178 12 178 12"
            />
          </svg>
          <p class="ml-2 text-lg">2</p>
        </div>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon h-6 w-6"
            viewBox="0 0 512 512"
          >
            <title>Compass</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z"
            />
          </svg>
          <p class="ml-1 text-lg">{{ viewProperty.reference }}</p>
        </div>
      </div>
    </div>
    <div class="mr-2 sm:flex sm:flex-row-reverse md:mt-4">
      <button
        @click="toStep(2)"
        type="button"
        class="mb-8 flex w-full justify-center border border-transparent bg-primary px-8 py-2 text-lg font-medium tracking-wider text-white shadow-lg shadow-third/30 hover:animate-none hover:bg-four focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-3 sm:w-auto md:text-lg"
      >
        Enganche
        <ArrowRightIcon class="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ArrowRightIcon } from "@heroicons/vue/outline";
export default {
  data() {
    return {};
  },
  components: {
    ArrowRightIcon,
  },
  computed: {
    ...mapState("user", ["viewProperty"]),
    ...mapState("ui", ["quoterStep"]),
  },
  methods: {
    toStep(s) {
      this.$store.commit("ui/CHANGE_TO_STEP", s);
    },
  },
};
</script>
