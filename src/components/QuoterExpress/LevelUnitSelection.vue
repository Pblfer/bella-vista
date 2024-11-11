<template>
 <div class="flex justify-end">
    <img
      class="mt-4 h-14 w-14 rounded-full"
      :src="userProfile.photoURL"
      alt=""
    />
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="mt-8 mr-4 flex items-center bg-transparent text-white hover:text-white"
        >
          <span class="sr-only">Open options</span>
          <DotsVerticalIcon class="h-6 w-6" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute right-0 mt-2 mr-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="py-1">
            <div class="bg-gray-100 pt-4 pl-4 pb-2">
              <p class="text-sm font-semibold text-gray-700">
                {{ userProfile.displayName }}
              </p>
              <p class="text-sm text-gray-700">{{ userProfile.email }}</p>
            </div>
            <MenuItem v-slot="{ active }" class="hover:bg-gray-100">
              <a
                href="https://owwny.com"
                target="_blank"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm font-semibold',
                ]"
                >Mi Dashboard<br />
                <p class="text-xs font-normal">
                  Ingresa en owwny.com y ve todas tus cotizaciones generadas.
                </p></a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }" class="hover:bg-gray-100">
              <a
                href="https://owwny.com/terms"
                target="_blank"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm',
                ]"
                >Términos y condiciones</a
              >
            </MenuItem>

            <MenuItem v-slot="{ active }" class="hover:bg-gray-100">
              <button
                @click="logOut"
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block w-full px-4 py-2 text-left text-sm',
                ]"
              >
                Cerrar sesión
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
  <div class="mt-0 grid p-4 md:mt-0 md:justify-center md:p-8">
    <div class="mt-12 md:mt-8">
      <p class="text-center text-lg font-thin text-white/60 md:text-center">
        #####
      </p>
      <p
        class="mt-1 text-center text-4xl font-light tracking-wider text-white md:text-center"
      >
        Disponibilidad
      </p>
      <div class="mb-8 flex justify-start md:justify-center">
        <div
          class="mx-8 mt-2 w-full border-2 border-b border-four md:w-96"
        ></div>
      </div>
    </div>
  </div>

  <div class="flex grid-cols-1 gap-0">
    <div
      class="mt-26 w-[6rem] border-0 border-four bg-local bg-top object-contain md:w-[14rem] md:bg-top lg:w-[20rem] xl:w-[24rem]"
    >
      <img
        class="h-full w-auto object-cover"
        src="https://owwny-b2b-base-files.s3.amazonaws.com/websites/#####/QuoterImg1"
        alt=""
      />
    </div>
    <div
      class="lg:mt-22 grid-col-1 mt-0 mb-24 w-full justify-start font-semibold md:mt-24"
    >
      <div class="mt-0 flex grid-cols-2 md:mt-6">
        <div
          class="relative h-auto w-full justify-left md:border-4 border-0 border-four bg-primary px-0 md:relative md:-ml-9 md:w-auto lg:absolute lg:right-12 md:-mt-12"
        >
          <div class="mt-8 md:mt-3 mb-4 p-2 text-left">
            <div class="mb-8 justify-center hidden">
              <img
                src="https://owwny-b2b-base-files.s3.amazonaws.com/websites/#####/Logo140"
                alt=""
              />
            </div>

            <fieldset class="gap-4 space-y-2 p-2 grid grid-cols-3">
              <legend class="font-ligth  tracking-wider text-white">
                Típos:
              </legend>
              <div
                class="relative flex-grow md:flex grid-cols-3 gap-1 items-start"
                v-for="t in typesArea"
                :key="t.index"
              >
                <div class="flex h-5">
                  <input
                    v-model="typeSelection"
                    id="comments"
                    :value="t.type"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    class="h-6 w-6 rounded border-primary text-secondary focus:ring-secondary"
                  />
                </div>
                <div class="ml-0 md:mt-1 mt-2 text-sm mr-4">
                  <label for="comments" class="font-medium text-white/80"
                    >{{ t.title
                    }}</label
                  >
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div
        class="mt-1 ml-0 flex h-20 gap-1 overflow-x-auto overflow-y-clip overscroll-x-contain md:-ml-2"
        v-for="l in getFilterLevels"
        :key="l.index"
      >
        <div
          class="mt-0 h-20 w-20 flex-none border-2 border-secondary bg-secondary text-center text-sm text-white/80 duration-300 ease-linear md:w-24 md:text-base"
        >
          <p class="font-base mt-8 tracking-wide text-white/80 md:mt-6">
            Nivel {{ l }}
          </p>
        </div>
        <individual-level :level="l" />
      </div>
    </div>
  </div>
</template>

<script>
import propertiesApi from "@/graphql/properties";
import apiProject from "@/graphql/projects";
import IndividualLevel from "./IndividualLevel.vue";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import { mapState } from "vuex";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { DotsVerticalIcon } from "@heroicons/vue/solid";
export default {
  components: { IndividualLevel,  Menu, MenuButton, MenuItem, MenuItems, DotsVerticalIcon },
  data() {
    return {
      properties: [],
      allLevels: [],
      filterLevels: [],
      levels: [],
      typesArea: [
        { id: "78", title: "78m2", type: "A" },
        { id: "105", title: "105m2", type: "B" },
        { id: "117", title: "117m2", type: "C" },
        { id: "156", title: "156m2", type: "D" },
        { id: "JARDIN", title: "Jardín", type: "JARDIN" },
        { id: "PH", title: "PH", type: "PH" },
        { id: "76", title: "76m2", type: "E" },
        { id: "LOCAL", title: "Local", type: "LOCAL" },
      ],
     
      filter: "",
      typeSelection: [],
    };
  },
  watch: {
    properties() {
      this.properties.forEach((e) => {
        this.allLevels.push(e.level);
      });
    },
    typeSelection() {
      this.$store.commit("ui/FILTER_PROPERTIES", this.typeSelection);
    },
  },
   methods: {
    logOut() {
      signOut(auth)
        .then(() => {
          this.$moshaToast(`Sesión cerrada`, {
            type: "success",
            transition: "slide",
            position: "bottom-right",
            showIcon: true,
            hideProgressBar: false,
            toastBackgroundColor: "#5e7462",
          });
          this.$store.commit("ui/AUTH_QUOTER_CONTAINER_STEP", 0);
          this.$store.commit("user/SEND_PROFILE_DATA", []);
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
  computed: {
    ...mapState("user", ["userProfile"]),
    getFilterLevels() {
      const levels = [...new Set(this.allLevels)];
      const des = levels.sort((a, b) => {
        return b - a;
      });
      return des;
    },
  },
  mounted() {
    this.typeSelection = ["B", "D", "JARDIN", "PH", "A", "C"];
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit("user/SEND_PROFILE_DATA", user.providerData[0]);
      }
    });
  },
  beforeMount() {
    const resProject = apiProject
      .getProjectData("a3ad7146-6670-4f03-b486-b551a59f3699")
      .then((data) => {
        this.$store.commit("user/PROJECT_DATA", data);
      });
    this.$store.commit("ui/SHOW_LOADING_AT_PROPERTIES", true);
    const resProperties = propertiesApi
      .getAllProperties("a3ad7146-6670-4f03-b486-b551a59f3699")
      .then((v) => {
        this.properties = v;
        this.$store.commit("user/SEND_PROPERTIES", v);
        this.$store.commit("ui/SHOW_LOADING_AT_PROPERTIES", false);
      });
  },
};
</script>
