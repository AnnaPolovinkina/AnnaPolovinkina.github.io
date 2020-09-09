import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import './assets/styles/stylesss.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue, VueAxios, axios)

new Vue({
    store: store,
    router: router,
    render: function (h) { return h(App) },
}).$mount('#app')
