<template>
  <div>
    <div>
      <div>
        <div class="mt-0 p-1">
          <div class="flex">
            <div class="flex w-full">
              <div class="w-full">
                <div class="mt-1">
                  <label
                    for="price"
                    class="flex text-sm font-bold text-gray-700"
                    >Reserva:</label
                  >
                  <div class="relative mt-1 w-full shadow-sm">
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <span class="text-gray-500 sm:text-sm"> $. </span>
                    </div>
                    <input
                      type="number"
                      name="reserve"
                      id="reserve"
                      v-model="reserve"
                      class="w-full border-gray-300 pl-7 focus:border-primary focus:ring-primary"
                      aria-describedby="price-currency"
                    />
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      <span class="text-primary sm:text-sm" id="price-currency">
                        USD
                      </span>
                    </div>
                  </div>
                  <p class="mt-0.5 p-1 text-xs">
                    La reserva mínima es de:
                    {{ currencyFormater(getReservation) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-1 p-1">
          <div class="w-full grid-cols-1 gap-2 md:flex md:grid-cols-2">
            <div class="mt-0 w-full md:ml-0">
              <label for="price" class="block text-sm font-bold text-gray-700"
                >Enganche (20%)</label
              >
              <div class="relative mt-1 shadow-sm">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <span class="text-gray-500 sm:text-sm"> $. </span>
                </div>
                <input
                  type="number"
                  name="price"
                  id="price"
                  v-model="deposit"
                  class="block w-full border-gray-300 pl-7 pr-12 focus:border-primary focus:ring-primary sm:text-sm"
                  aria-describedby="price-currency"
                />
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <span class="text-primary sm:text-sm" id="price-currency">
                    USD
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4 md:mt-0">
              <label for="months" class="block text-sm font-bold text-gray-700"
                >Meses</label
              >
              <div class="relative mt-1 shadow-sm">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <CalendarIcon
                    class="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="number"
                  v-model="months"
                  name="months"
                  id="months"
                  class="block w-full rounded-md border-gray-300 pl-10 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 border-l-4 border-primary bg-transparent p-2">
          <div class="flex w-full">
            <div class="ml-2 w-full text-left">
              <div class="flex">
                <div class="flex-shrink-0">
                  <CalendarIcon
                    class="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div class="ml-2 flex-1 md:flex md:justify-between">
                  <p class="text-sm text-primary">
                    Tu cuota de enganche queda en:
                    {{ currencyFormater(deposit / months) }} al mes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mr-2 mt-6 flex justify-between md:mt-8">
      <button @click="toStep(1)">
        <ArrowLeftIcon
          class="-mt-7 ml-4 h-6 w-6 text-primary"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="finalReserveInput == 0"
        type="button"
        disabled
        class="mb-8 flex justify-center border border-transparent bg-primary/20 px-8 py-2 text-lg font-light tracking-wider text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-3 sm:w-auto md:text-lg"
      >
        <RefreshIcon
          class="mt- mr-2 mt-1 h-5 w-5 animate-spin"
          aria-hidden="true"
        />
        Calculando...
      </button>
      <button
        v-else
        @click="toStep(3)"
        type="button"
        dis
        class="font-base mb-8 flex justify-center border border-transparent bg-primary px-8 py-2 text-lg tracking-wider text-white shadow-lg shadow-four/30 hover:animate-none hover:bg-four focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-3 sm:w-auto md:text-lg"
      >
        Financiamiento
        <ArrowRightIcon class="mt- ml-2 mt-1 h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script>
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  InformationCircleIcon,
  CalendarIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  CashIcon,
  RefreshIcon,
} from "@heroicons/vue/outline";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      months: 0,
      deposit: 0,
      reserve: 0,
    };
  },
  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
    InformationCircleIcon,
    CalendarIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
    CashIcon,
    RefreshIcon,
  },
  methods: {
    toStep(s) {
      this.$store.commit("ui/CHANGE_TO_STEP", s);
    },
    resetMonths() {
      this.months = this.projectProfile[0].initial_fee_month_fractionation;
    },
    resetDeposit() {
      this.deposit = this.totalDeposit;
    },
    resetReserve() {
      this.reserve = this.viewProperty.reservation;
    },
    currencyFormater(value) {
      const res = value.toLocaleString("es-US", {
        style: "currency",
        currency: "USD",
      });
      return res;
    },

    currencyFormater2(value) {
      const convert = value * 7.81;
      const res = convert.toLocaleString("es-GT", {
        style: "currency",
        currency: "GTQ",
      });
      return res;
    },
  },
  watch: {
    months() {
      if (
        this.months > this.projectProfile[0].initial_fee_month_fractionation
      ) {
        this.resetMonths();
      } else {
        this.$store.commit("user/FINAL_MONTH_INPUT", this.months);
      }
    },
    deposit() {
      setTimeout(() => {
        if (this.deposit < this.totalDeposit) {
          this.resetDeposit();
          this.$store.commit("user/FINAL_DEPOSIT_INPUT", this.deposit);
        } else {
          this.$store.commit("user/FINAL_DEPOSIT_INPUT", this.deposit);
        }
      }, 6000);
    },
    reserve() {
      setTimeout(() => {
        if (this.reserve < this.viewProperty.reservation) {
          this.resetReserve();
          this.$store.commit(
            "user/FINAL_RESERVE_INPUT",
            this.viewProperty.reservation
          );
        } else {
          this.$store.commit("user/FINAL_RESERVE_INPUT", this.reserve);
        }
      }, 3000);
    },
  },
  computed: {
    ...mapState("user", [
      "projectProfile",
      "selectedExtraParking",
      "viewProperty",
      "finalReserveInput",
      "finalDepositInput",
    ]),
    ...mapGetters("user", ["totalDeposit"]),
    getMaxMonth() {
      const max = this.projectProfile[0].initial_fee_month_fractionation;
      this.months = max;
      return max;
    },
    getDeposit() {
      const minDeposit = this.totalDeposit;
      this.deposit = minDeposit;
      return minDeposit;
    },
    getReservation() {
      const minReservation = this.viewProperty.reservation;
      this.reserve = minReservation;
      return minReservation;
    },
  },
  mounted() {
    const minReservation = this.viewProperty.reservation;
    this.reserve = minReservation;
    const minDeposit = this.totalDeposit;
    this.deposit = minDeposit;
    const max = this.projectProfile[0].initial_fee_month_fractionation;
    this.months = max;
  },
};
</script>
