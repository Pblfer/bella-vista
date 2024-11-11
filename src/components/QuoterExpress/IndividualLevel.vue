<template>
  <div class="mt-0 flex gap-0.5" v-for="p in properties" :key="p.id">
    <div
      @click="openQuoter(p), (selectedProperty = p)"
      class="h-18 mt-0 w-24 border-2 border-secondary bg-transparent text-center font-thin text-white duration-300 ease-linear 
      hover:border-0 hover:bg-secondary hover:font-normal hover:text-white hover:shadow hover:shadow-secondary md:w-24 lg:w-28 xl:w-28"
    >
      <p
        class="scroll-mt-1.5 mr-1.5 text-right text-xs font-thin tracking-wider md:mt-1.5 md:text-xs mt-1.5"
      >
        {{ p.construction_area.toFixed(0) }}m2
      </p>
      <p
        class="mt-1.5 text-center text-sm font-bold tracking-wider md:mt-1.5 md:text-sm"
      >
        {{ p.unit_name }}
      </p>
      <p class="mt-0 text-center text-xs font-light">
        {{ p.reference }}
      </p>
    </div>
  </div>
</template>

<script>
import propertiesApi from "@/graphql/properties";
import { mapState } from "vuex";
export default {
  props: {
    level: Number,
  },
  mounted() {
    const res = propertiesApi
      .getPropertiesByLevel(
        "a3ad7146-6670-4f03-b486-b551a59f3699",
        this.level,
        `${this.filterPropeties}`
      )
      .then((v) => {
        this.properties = v;
      });
  },
  data() {
    return {
      properties: [],
      selectedProperty: [],
    };
  },

  computed: {
    ...mapState("ui", ["filterPropeties"]),
  },
  watch: {
    filterPropeties() {
      const res = propertiesApi
        .getPropertiesByLevel(
          "a3ad7146-6670-4f03-b486-b551a59f3699",
          this.level,
          `${this.filterPropeties}`
        )
        .then((v) => {
          this.properties = v;
        });
    },
  },
  methods: {
    openQuoter(property) {
      this.$store.commit("ui/TOGGLE_QUOTER", true);
      this.$store.commit("user/PROPERTY_VIEW", property);
      this.$store.commit("user/UNIT_PROPERTY_PRICE", property.price);
      this.$store.commit("user/FINAL_RESERVE_INPUT", property.reservation);
      if (property.parkings_relation.length > 0) {
        this.$store.commit(
          "user/PREASSIGNED_PARKING_PRICE",
          property.parkings_relation[0].price
        );
      }
    },
  },
};
</script>
