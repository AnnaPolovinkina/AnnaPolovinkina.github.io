import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

var info = [];
var response;
export default {
    actions: {
        async fetchProducts(ctx) {
            axios
                .get('https://next.json-generator.com/api/json/get/EyZhLBabK')
                .then(response => { info = response.data; ctx.commit('updateProducts', info); }); //Массив из json
        }
    },
    mutations: {
        updateProducts(state, info) {
            state.products = info;
        }
    },
    state: {
        products: []
    },
    getters: {
        allProducts(state) {
            return state.products
        },
    },
}
