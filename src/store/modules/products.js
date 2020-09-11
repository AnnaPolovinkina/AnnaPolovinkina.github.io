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
                .get('http://www.json-generator.com/api/json/get/cfkAhblmZK?indent=2')
                .then(response => { info = response.data; ctx.commit('updateProducts', info);}); //Массив из json
        },
        fillCategoriesProducts({commit}, arrJson) {
            commit('addCategoriesProducts', arrJson);
        }
    },
    mutations: {
        updateProducts(state, info) {
            state.products = info;
        },
        addCategoriesProducts(state, arrJson) {
            var categoryResult = [];
            arrJson.forEach(function (item) {
                if (!categoryResult.includes(item.category)) {
                    categoryResult.push(item.category);
                }
            });
            categoryResult = categoryResult.map(function (item) {
                return {name: item, category: item};
            });
            state.categoriesProducts = categoryResult;
        }
    },
    state: {
        products: [],
        categoriesProducts: []
    },
    getters: {
        allProducts(state) {
            return state.products
        },
        allCategoriesProducts(state) {
            return state.categoriesProducts
        },
    },
}
