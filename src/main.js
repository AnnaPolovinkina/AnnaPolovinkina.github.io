import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue, VueAxios, axios)

export var store = {
    data: null
};

new Vue({
    router,
    render: function (h) { return h(App) },
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get('https://next.json-generator.com/api/json/get/EyZhLBabK')
            .then(response => {this.info = response; store.data = response;})
    },
}).$mount('#app')
