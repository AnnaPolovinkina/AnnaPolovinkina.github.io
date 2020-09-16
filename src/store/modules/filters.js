export default {
    actions: {
        changeCategory({commit}, category) {
            commit('setCategory', category);
        },
        changeSale({commit}, sale) {
            commit('setSale', sale);
        },
        changePrice({commit}, price) {
            commit('setPrice', price);
        }
    },
    mutations: {
        setCategory(state, category) {
            state.filterCategory = category;
        },
        setSale(state, sale) {
            state.filterSale = sale;
        },
        setPrice(state, price) {
            state.filterPrice = price;
        }
    },
    state: {
        filterCategory: 'Все категории',
        filterSale: '',
        filterPrice: ''
    },
    getters: {
        getCategory(state) {
            return state.filterCategory
        },
        getSale(state) {
            return state.filterSale
        },
        getPrice(state) {
            return state.filterPrice
        }
    }
}