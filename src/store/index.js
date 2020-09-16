import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import filters from './modules/filters'
import page from './modules/page'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products: products,
        cart: cart,
        filters: filters,
        page: page
    },
    plugins: [createPersistedState()]
})