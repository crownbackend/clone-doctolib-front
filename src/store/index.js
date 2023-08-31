import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import user from "./user/user.js";
export default createStore({
    modules: {
        user
    },
    plugins: [createPersistedState({
        paths: ["user"]
    })]
})