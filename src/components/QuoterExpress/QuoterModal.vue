<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="showQuoter">
    <Dialog as="div" class="relative z-10" @click="toggleQuoter(false)">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-secondary bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="my-48 flex items-center justify-center px-4 pt-4 text-center align-middle sm:p-0 md:my-0"
        >
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative inline-block w-full max-w-2xl transform overflow-hidden border-8 border-primary bg-white p-8 px-4 pt-5 pb-4 text-left align-middle shadow-xl transition-all"
            >
              <div class="absolute top-0 right-0 block pt-4 pr-4">
                <button
                  type="button"
                  class="rounded-md bg-white text-primary hover:text-four focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0"
                  @click="toggleQuoter(false)"
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-9 w-9" aria-hidden="true" />
                </button>
              </div>
              <div class="flex items-start">
                <div
                  class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary sm:mx-0 sm:h-10 sm:w-10"
                >
                  <CubeIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div class="mt-0 ml-4 grid text-left">
                  <DialogTitle
                    as="h3"
                    class="mt-0 text-lg font-medium leading-6 text-gray-900"
                  >
                    Unidad {{ viewProperty.unit_name }}
                  </DialogTitle>
                  <DialogTitle
                    as="h4"
                    class="text-sm font-medium text-gray-900"
                  >
                    Nivel: {{ viewProperty.level }} -
                    {{ viewProperty.construction_area }}m2
                  </DialogTitle>
                  <DialogTitle
                    as="h4"
                    class="text-sm font-medium text-gray-900"
                  >
                    Tipo: {{ viewProperty.typology }}
                  </DialogTitle>
                  <div class="mt-2"></div>
                </div>
              </div>
              <description-component v-if="quoterStep == 1" />
              <reservation-component v-if="quoterStep == 2" />
              <financing-component v-if="quoterStep == 3" />
              <steper-component />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CubeIcon, XIcon, ArrowRightIcon } from "@heroicons/vue/outline";
import SteperComponent from "@/components/QuoterExpress/Layout/SteperComponent.vue";
import { mapState } from "vuex";
import DescriptionComponent from "./modules/DescriptionComponent.vue";
import ReservationComponent from "./modules/ReservationComponent.vue";
import FinancingComponent from "./modules/FinancingComponent.vue";
export default {
  setup() {
    return {};
  },
  computed: {
    ...mapState("ui", ["showQuoter", "quoterStep"]),
    ...mapState("user", ["viewProperty"]),
  },
  methods: {
    toggleQuoter(v) {
      this.$store.commit("ui/TOGGLE_QUOTER", v);
      if (v == false) {
        this.$store.commit("ui/TOGGLE_QUOTER", v);
        this.$store.commit("ui/CHANGE_TO_STEP", 1);
        this.$store.commit("user/UNIT_PROPERTY_PRICE", 0);
        this.$store.commit("user/PREASSIGNED_PARKING_PRICE", 0);
        this.$store.commit("user/FINAL_DEPOSIT_INPUT", 0);
        this.$store.commit("user/FINAL_MONTH_INPUT", 0);
        this.$store.commit("user/FINAL_RESERVE_INPUT", 0);
      }
    },
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CubeIcon,
    XIcon,
    ArrowRightIcon,
    SteperComponent,
    DescriptionComponent,
    ReservationComponent,
    FinancingComponent,
  },
};
</script>
