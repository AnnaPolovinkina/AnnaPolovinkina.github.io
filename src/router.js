import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import('./views/Catalog.vue')
        },
        {
            path: '/catalog2',
            name: 'catalog2',
            component: () => import('./views/Catalog2.vue')
        },
        {
            path: '/product',
            name: 'product',
            component: () => import('./components/ProductPage.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./components/Cart.vue'),
            props: true
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./views/Order.vue'),
            props: true
        }
    ]
})