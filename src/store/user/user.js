import Auth from "../../services/Auth.js";

export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        user: state => state.user,
    },
    actions: {
        login({ commit }, data) {
            Auth.login(data).then(response => {
                commit('setUser', response.data)
            })
        },
        logout({ commit }) {
            commit('logout')
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        logout(state) {
            state.user = null
        }
    }
}
