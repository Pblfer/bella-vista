<template>
  <div class="mt-4 p-1">
    <Listbox as="div" v-model="selected">
      <ListboxLabel class="ml-2 block text-sm font-bold text-gray-700">
        Entidades disponibles:
      </ListboxLabel>
      <div class="mt-1 ml-2 block">
        <ListboxButton
          class="relative w-full cursor-default  border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
        >
          <span class="block truncate">{{ selected.bankDetail.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-60 w-2/3 overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              as="template"
              v-for="b in projectProfile[0].financingEntities"
              :key="b.id"
              :value="b"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'bg-primary text-white' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-3 pr-9',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'block truncate',
                  ]"
                >
                  {{ b.bankDetail.name }}
                </span>

                <span
                  v-if="selected"
                  :class="[
                    active ? 'text-white' : 'text-primary',
                    'absolute inset-y-0 right-0 flex items-center pr-4',
                  ]"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
        <div class="mt-4 ">
              <label for="months" class="block text-sm font-bold text-gray-700"
                >Años:</label
              >
              <div class="relative mt-1">
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
                  v-model="years"
                  name="years"
                  id="years"
                  class="block w-auto border-gray-300 pl-10 focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
      </div>
    </Listbox>
    <div class="mt-4 bg-green-900/10 p-2 md:ml-3">
      <div class="flex">
        <div class="flex-shrink-0">
          <InformationCircleIcon
            class="h-5 w-5 text-primary"
            aria-hidden="true"
          />
        </div>
        <div class="ml-3 flex-1 md:flex md:justify-between">
          <p class="text-sm font-semibold text-primary">
            La tasa de interes de la entidad es de:
            {{ selected.monthly_interest_fee }}%
          </p>
        </div>
      </div>
    </div>

    <div class="mt-2 rounded-md bg-green-900/10 p-2 md:ml-3">
      <div class="flex">
        <div class="flex-shrink-0">
          <CalendarIcon class="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div class="ml-3 flex-1 md:flex md:justify-between">
          <p class="text-sm font-semibold text-primary">
            El plazo máximo de la entidad es de:
            {{ selected.max_financing_years }} años
          </p>
        </div>
      </div>
    </div>
    <div class="mt-6 border-l-4 border-primary bg-transparent p-4">
      <div class="flex w-full">
        <div class="ml-2 w-full text-left">
          <div class="flex">
            <div class="flex-shrink-0">
              <CashIcon class="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div class="ml-2 flex-1 md:flex md:justify-between">
              <p class="text-sm text-primary">
                Tu cuota mensual de financiamiento queda en:
                {{ currencyFormater(financingQuote) }} al mes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 border-l-4 border-primary bg-transparent p-2">
          <div class="flex w-full">
              <UserGroupIcon
                    class="h-5 w-5 text-primary ml-4"
                    aria-hidden="true"
                  />
            <div class="ml-2 w-full text-left">
              <p class="text-sm font-normal tracking-normal text-primary">
                Ingresos familiares requeridos:

                {{
                  currencyFormater(
                    (finalDepositInput /
                      projectProfile[0].initial_fee_month_fractionation) *
                      3
                  )
                }}
              </p>
            </div>
          </div>
        </div>

    <div class="mr-2 mt-6 flex justify-between md:mt-8">
      <button @click="toStep(2)">
        <ArrowLeftIcon
          class="-mt-7 ml-4 h-6 w-6 text-primary"
          aria-hidden="true"
        />
      </button>
      <button
        v-if="finalDepositInput == 0"
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
        @click="getUserData()"
        type="button"
        class="mb-8 flex justify-center border border-transparent bg-primary px-8 py-2 text-lg font-normal tracking-wider text-white shadow-lg shadow-four/30 hover:animate-none hover:bg-four focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:ml-3 sm:w-auto md:text-lg"
      >
        <MailOpenIcon class="mr-2 mt-0.5 h-5 w-5" aria-hidden="true" />
        Enviar por Mail
      </button>
    </div>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import {
  ArrowLeftIcon,
  MailOpenIcon,
  CheckIcon,
  SelectorIcon,
  CashIcon,
  InformationCircleIcon,
  CalendarIcon,
  RefreshIcon,
  UserGroupIcon
} from "@heroicons/vue/outline";
import { mapGetters, mapState } from "vuex";
import clientApi from "@/graphql/client";
import quotesApi from "@/graphql/quotes";
export default {
  data() {
    return {
      selected: [],
      randomId: "",
      dateCreatedQuote: "",
      actualSeller: [],
      years:0
    };
  },
  components: {
    ArrowLeftIcon,
    MailOpenIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
    InformationCircleIcon,
    CashIcon,
    CalendarIcon,
    RefreshIcon,
    UserGroupIcon
  },
  watch:{
    years() {
      setTimeout(() => {
        if (this.years > this.selected.max_financing_years) {
          this.years = this.selected.max_financing_years
        } 
      }, 1000);
    },
  },
  methods: {
    currencyFormater(value) {
      const res = value.toLocaleString("es-US", {
        style: "currency",
        currency: "USD",
      });
      return res;
    },
    toStep(s) {
      this.$store.commit("ui/CHANGE_TO_STEP", s);
    },
    currencyFormater(value) {
      const res = value.toLocaleString("es-GT", {
        style: "currency",
        currency: "USD",
      });
      return res;
    },
    async getUserData() {
      const email = this.userProfile.email;
      const res = await clientApi.getClient(email).then((v) => {
        if (v.length == 0) {
          this.$router.push("/");
        } else {
          this.actualSeller = v[0].companyRelations[0].sellerProfile;
          this.postData(v[0]);
          this.saveQuoteToClient(v[0]);
          this.$store.commit("ui/TOGGLE_QUOTER", false);
        }
      });
    },
    async saveQuoteToClient(user) {
      const fileUploadName = `${this.randomId}${user.phone}`;
      const monthDeposit = (this.finalDepositInput /
        this.finalMonthInput);
      const res = await quotesApi.createQuoteToClient(
        this.viewProperty.id,
        user.email,
        this.viewProperty.price,
        this.viewProperty.living_area,
        this.viewProperty.bedrooms,
        this.viewProperty.bathrooms,
        this.finalReserveInput,
        this.finalDepositInput,
        this.finalMonthInput,
        monthDeposit,
        this.selected.bankDetail.name,
        this.selected.monthly_interest_fee,
        this.financingMonthAmount,
        this.years,
        `https://owwny-b2b-base-files.s3.amazonaws.com/${fileUploadName}.pdf`,
        "quoter-express"
      );
    },
    async postData(user) {
      const url = "https://sq1.owwny.com/webhook/#####";
      const aditionalParking =
        this.selectedExtraParking.length == 0
          ? 0
          : [this.selectedExtraParking].length;
      const parkingAssignedCount =
        this.viewProperty.parkings_relation.length == undefined
          ? 0
          : this.viewProperty.parkings_relation.length;
      const totalParkings = aditionalParking + parkingAssignedCount;
      const aditionalWarehouse = 0;
      const warehouseCount = 0;
      const totalWarehouses = aditionalWarehouse + warehouseCount;
      const monthDeposit = await (this.finalDepositInput /
        this.finalMonthInput);
      const familyIncoming = monthDeposit * 3;
      const fileUploadName = `${this.randomId}${user.phone}`;
      let formData = new FormData();
      formData.append("dateCreated", this.dateCreatedQuote);
      formData.append("utm_source", this.utms.utm_source);
      formData.append("utm_medium", "Owwny");
      formData.append("utm_campaign", this.utms.utm_campaign);
      formData.append("utm_id", this.utms.utm_id);
      formData.append("utm_term", this.utms.utm_term);
      formData.append("utm_content", this.utms.utm_content);
      formData.append("first_name", this.firstName);
      formData.append("email", user.email);
      formData.append("complete_name", user.displayName);
      formData.append("phone", user.phone);
      formData.append("proyectId", this.viewProperty.proyect_id);
      formData.append("companyId", this.projectProfile[0].company_id)
      formData.append("planeImgUrl", this.viewProperty.base_plane);
      formData.append("tower", this.viewProperty.tower);
      formData.append("unitNumber", this.viewProperty.unit_name);
      formData.append("bedrooms", this.viewProperty.bedrooms);
      formData.append("bathrooms", this.viewProperty.bathrooms);
      formData.append("level", this.viewProperty.level);
      formData.append("livingArea", this.viewProperty.construction_area);
      formData.append("unitPrice", this.viewProperty.price);
      formData.append("parkingsCount", totalParkings);
      formData.append("warehouseCount", totalWarehouses);
      formData.append("reserveAmount", this.finalReserveInput);
      formData.append("depositTotalAmount", this.finalDepositInput);
      formData.append("familyAmount", familyIncoming);
      formData.append("monthDepoistFractions", this.finalMonthInput);
      formData.append("monthDepositAmount", monthDeposit);
      formData.append("fileName", fileUploadName);
      formData.append("financingEntitie", this.selected.bankDetail.name);
      formData.append("SellerName", "Equipo de");
      formData.append("SellerLastname", "ventas");
      formData.append("SellerEmail", "info@#####.gt");
      formData.append("SellerPhone", 23108600);
      formData.append("interestEntitie", this.selected.monthly_interest_fee);
      formData.append("ref", this.viewProperty.reference);
      formData.append(
        "financingYearSelected",
        this.years
      );
      formData.append("financingMonthAmount", this.financingMonthAmount);
      const request = new Request(url, {
        method: "POST",
        mode: "no-cors",
        body: formData,
        headers: {
          accept: "application/json;odata=verbose",
          contentType: "text/xml",
        },
      });
      this.$store.commit("ui/CHANGE_TO_STEP", 1);
      this.$store.commit("user/PROPERTY_VIEW", []);
      this.$store.commit("user/UNIT_PROPERTY_PRICE", 0);
      this.$store.commit("user/PREASSIGNED_PARKING_PRICE", 0);
      this.$store.commit("user/FINAL_DEPOSIT_INPUT", 0);
      this.$store.commit("user/FINAL_MONTH_INPUT", 0);
      this.$store.commit("user/FINAL_RESERVE_INPUT", 0);
      // pass request object to `fetch()`
      fetch(request)
      this.$moshaToast("Cotización enviada 📨📬", {
        type: "success",
        transition: "slide",
        position: "bottom-right",
        showIcon: true,
        hideProgressBar: false,
      });
        //.then((res) => res.json())
        //.then((res) => console.log(res));
    },
  },
  created() {
    this.selected = this.projectProfile[0].financingEntities[0];
    this.years = this.selected.max_financing_years
  },
  computed: {
    ...mapState("user", [
      "projectProfile",
      "viewProperty",
      "extraParkingPrice",
      "preassignedParkingPrice",
      "unitPropertyPrice",
      "finalDepositInput",
      "finalMonthInput",
      "finalReserveInput",
      "financingMonthAmount",
      "userProfile",
      "entitySelected",
      "selectedExtraParking",
    ]),
    ...mapState("ui", ["utms"]),
    ...mapGetters("user", ["propertyTotalAmountWithTaxes"]),
    totalFinancing() {
      let total =
        this.propertyTotalAmountWithTaxes -
        this.finalDepositInput -
        this.finalReserveInput;
      const quote =
        (total * (this.selected.monthly_interest_fee / 1200)) /
        (1 -
          Math.pow(
            1 + this.selected.monthly_interest_fee / 1200,
            -(this.selected.max_financing_years * 12)
          ));
      const res = quote * 12 * this.selected.max_financing_years;
      this.$store.commit("user/TOTAL_FINANCING", res);
      return res;
    },
    financingQuote() {
      let total =
        this.propertyTotalAmountWithTaxes -
        this.finalDepositInput -
        this.finalReserveInput;

      const val =
        (total * (this.selected.monthly_interest_fee / 1200)) /
        (1 -
          Math.pow(
            1 + this.selected.monthly_interest_fee / 1200,
            -(this.years * 12)
          ));
      this.$store.commit("user/FINANCING_MONTH_AMOUNT", val);
      return val;
    },
  },
  mounted() {
    const t = new Date();
    let d = t.getDate();
    let month = t.getMonth();
    let year = t.getFullYear();
    let m = t.getMinutes();
    let s = t.getSeconds();
    let ss = t.getMilliseconds();
    this.dateCreatedQuote = `${d}/${month + 1}/${year}`;
    this.randomId = `${d}${m}${s}${ss}`;
  },
};
</script>

<style lang="scss" scoped></style>
