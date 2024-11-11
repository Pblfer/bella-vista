import Landing from "./views/Landing.vue";
import NotFound from "./views/NotFound.vue";
import Expectation from './views/Expectation.vue'
import Thanks from "./views/Thanks.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Expectation, meta: { title: "Expectation" } },
  { path: "/home", component: Landing, meta: { title: "Landing" } },
  { path: "/thanks", component: Thanks, meta: { title: "Agradecimientos" } },
  { path: "/:path(.*)", component: NotFound },
];
