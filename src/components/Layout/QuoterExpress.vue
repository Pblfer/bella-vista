<template>
  <div id="quoter" class="bg-primary mb-24">
    <login-component class="h-full w-full" v-if="authContainerStep == 0" />
    <verification-component v-if="authContainerStep == 1" />
    <data-user v-if="authContainerStep == 2" />
    <level-unit-selection v-if="authContainerStep == 3" />
    <quoter-modal/>
    <div class="-mt-12 h-auto w-full bg-transparent">
      <a class="w-full" href="https://owwny.com" target="_blank">
        <img
          src="https://owwny-b2b-base-files.s3.amazonaws.com/logo-light.png"
          class="absolute right-8 h-5 opacity-40 duration-500 ease-linear hover:opacity-100 md:mt-0"
          alt="Owwny, La plataforma de propietarios modernos"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import clientApi from "@/graphql/client";
import sellersApi from "@/graphql/sellers";
import LevelUnitSelection from "../QuoterExpress/LevelUnitSelection.vue";
import loginComponent from "../QuoterExpress/loginComponent.vue";
import VerificationComponent from "../QuoterExpress/VerificationComponent.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/services/firebase";
import QuoterModal from '../QuoterExpress/QuoterModal.vue';
import DataUser from '../QuoterExpress/DataUser.vue';

export default {
  components: {
     loginComponent,
    VerificationComponent,
    LevelUnitSelection,
    QuoterModal,
    DataUser,
  },
  data() {
    return {
      randomSeller: [],
    };
  },
   computed: {
    ...mapState("ui", ["authContainerStep"]),
    ...mapState("user", ["userProfile", "firstName", "projectProfile"]),
  },
  methods: {
    async checkUserProfile(email) {
      const res = await clientApi.getClient(email).then((v) => {
        if (v.length == 0) {
          this.$store.commit("ui/AUTH_QUOTER_CONTAINER_STEP", 1);
        } else {
           if (v[0].companyRelations.length == 0) {
            this.$store.commit("ui/AUTH_QUOTER_CONTAINER_STEP", 2)
           } else {
             this.$store.commit("ui/AUTH_QUOTER_CONTAINER_STEP", 3);  
           }
        }
      });
    },
   
    async createClientToCompanyRelation() {
      const res = await clientApi.createClientRelationToCompany(
        this.userProfile.email,
        "93c5b728-8f87-4603-b67a-abc323dbe134",
        this.randomSeller.email
      ).then((v)=>{
         //console.log("Realtion Created")
      })
    },
  },
    mounted() {
    const res = sellersApi.getSellersByProyect("92b7aac2-579d-44a4-899b-d9a6feaaa1f0").then((r) => {
        var randomSeller = Math.floor(Math.random() * r.length);
        this.randomSeller = r[randomSeller];
      });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit("user/SEND_PROFILE_DATA", user.providerData[0]);
        this.checkUserProfile(user.providerData[0].email);
        this.$moshaToast(`Ahora puedes cotizar.`, {
        type: "success",
        transition: "slide",
        position: "bottom-right",
        showIcon: true,
        hideProgressBar: false,
        toastBackgroundColor:"#122347"
      });
      }
    });
  },
};
</script>
