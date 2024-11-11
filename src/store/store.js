import { createStore } from "vuex";

import user from "./modules/user"
import ui from "./modules/ui";

const store = createStore({
  modules:{
      user,
      ui
  }
})

export default store