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
            return new Promise((resolve, reject) => {
                Auth.login(data)
                    .then(response => {
                        commit('setUser', response.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            });
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
