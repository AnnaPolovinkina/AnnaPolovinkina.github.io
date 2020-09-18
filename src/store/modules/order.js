export default {
    actions: {
        changeOrder({commit}, contentOrder) {
            commit('setOrder', contentOrder);
        },
        resetOrder({commit}) {
            commit('resetOrder');
        }
    },
    mutations: {
        setOrder(state, contentOrder) {
            state.order = contentOrder;
        },
        resetOrder(state) {
            state.order = []
        }
    },
    state: {
        order: []
    },
    getters: {
        getOrder(state) {
            return state.order
        }
    }
}