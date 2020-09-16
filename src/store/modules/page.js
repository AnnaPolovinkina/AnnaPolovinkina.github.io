export default {
    actions: {
        changePage({commit}, pageNumber) {
            commit('setPage', pageNumber);
        }
    },
    mutations: {
        setPage(state, pageNumber) {
            state.page = pageNumber;
        }
    },
    state: {
        page: 1
    },
    getters: {
        getPage(state) {
            return state.page
        }
    }
}