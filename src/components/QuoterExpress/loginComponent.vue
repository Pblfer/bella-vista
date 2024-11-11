<template>
  <div
    id="login"
    class="flex h-screen min-h-full flex-col justify-center bg-primary bg-fixed p-4 py-32 sm:px-6 lg:px-8"
    style="
      background-image: url(https://owwny-b2b-base-files.s3.amazonaws.com/websites/#####/PatterBigV2%404x.png);
    "
  >
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <div
        class="bg-white py-8 px-4 shadow-2xl shadow-four/40 hover:shadow-four/80 duration-500 ease-linear sm:px-10"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            class="mx-auto h-40 w-auto p-2"
            src="https://owwny-b2b-base-files.s3.amazonaws.com/websites/#####/Logo#####V2_320"
            alt=""
          />
        </div>
        <div class="relative mt-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-four border-2" />
          </div>
          <div class="relative flex justify-center">
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-4">
          <div>
            <button
              v-if="!loadingGoogle"
              @click="loginWithFacebook"
              href="#"
              class="hover:white inline-flex w-full justify-center rounded-none bg-secondary py-4 px-4 text-sm font-light text-white duration-500 ease-linear hover:bg-primary hover:shadow-2xl hover:shadow-secondary/75"
            >
              <span class="sr-only">Sign in with Facebook</span>

              <svg class="mr-3 mt-1 h-6 w-6" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                ></path>
              </svg>
              <p class="mt-0.5 text-lg tracking-wider">Ingresa con Facebook</p>
            </button>
          </div>

          <div>
            <button
              v-if="!loadingGoogle"
              @click="loginWithGoogle"
              href=""
              class="hover:white inline-flex w-full justify-center rounded-none bg-secondary py-4 px-4 text-sm font-light text-white duration-500 ease-linear hover:bg-primary hover:shadow-2xl hover:shadow-secondary/75"
            >
              <span class="sr-only">Sign in with Google</span>

              <svg
                aria-hidden="true"
                class="mr-3 -ml-3 mt-1 h-6 w-6"
                viewBox="0 0 512 512"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              <p class="mt-0.5 text-lg tracking-wider">Ingresa con Google</p>
            </button>
            <button
              v-else
              href=""
              class="inline-flex w-full justify-center rounded-md bg-secondary py-4 px-4 text-sm font-medium text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-3 h-7 w-7 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <p class="mt-0.5 text-lg">Cargando...</p>
            </button>
          </div>
          <div class="flex justify-center">
            <p class="font-light text-lg text-four mt-2">Inicia sesión para cotizar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/services/firebase";
import apiProjects from "@/graphql/projects";
import clientApi from "@/graphql/client";


import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";


export default {
  data () {
    return {
      phone: "",
      loadingGoogle: false,
    }
  },
   methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/userinfo.email");
      signInWithRedirect(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          this.loadingGoogle = true;
          this.$store.commit(
            "user/SEND_PROFILE_DATA",
            result.user.providerData[0]
          );
          this.checkUserProfile(result.user.providerData[0].email);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },

    loginWithFacebook() {
      const provider = new FacebookAuthProvider();
      provider.addScope("email");
      signInWithRedirect(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          this.loadingGoogle = true;
          this.$store.commit(
            "user/SEND_PROFILE_DATA",
            result.user.providerData[0]
          );
          this.checkUserProfile(result.user.providerData[0].email);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
          // ...
        });
    },

    checkUserProfile(email) {
      const res = clientApi.getClient(email).then((v) => {
        if (v.length == 0) {
          this.$store.commit("ui/AUTH_QUOTER_CONTAINER_STEP", 1);
        } else {
          this.$store.commit("ui/AUTH_QUOTER_CONTAINER_STEP", 2);
        }
      });
    },
  },
  async beforeMount() {
    const res = await apiProjects
      .getProjectData("a3ad7146-6670-4f03-b486-b551a59f3699")
      .then((v) => {
        this.$store.commit("user/PROJECT_DATA", v[0]);
      });
  },
  unmounted() {
    this.loadingGoogle = false;
  },
}
</script>