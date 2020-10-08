<template>
    <div id="header">
        <div class="container">
            <div class="header_wrapper">
                <div class="row justify-content">
                    <div class="col-xl-2 logo">
                        <router-link
                            v-bind:to="{name: 'home'}"
                            class="ico-main"
                        >
                            <img src="@/assets/logo1.jpg" alt="Логотип">
                            <!--<span style="font-family: 'Mon Amour Two Medium', arial; color: #ffffff; font-size: 47px; text-decoration: none !important;">A</span>-->
                        </router-link>
                    </div>
                    <div class="col-xl-8 title">
                        <router-link
                            v-bind:to="{name: 'home'}"
                            class="header_link"
                        >
                            Главная
                        </router-link>
                        <router-link
                            v-bind:to="{name: 'catalog2'}"
                            class="header_link"
                        >
                            Каталог
                        </router-link>
                        <router-link
                            v-bind:to="{name: 'cart'}"
                            class="header_link"
                        >
                            Корзина
                        </router-link>
                    </div>
                    <div class="col-xl-2 cart">
                        <router-link
                                v-bind:to="{name: 'cart', params: {cardData: cart}}"
                                class="icon-cart"
                        >
                        <div class="cart">
                            <img src="@/assets/cart1.png" alt="Корзина">
                            <div class="count-products">
                                {{cartCount}}
                            </div>
                        </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Cart from  '@/components/Cart'

    export default {
        name: "Header",
        components: {
            Cart: Cart
        },
        computed: {
            ...mapGetters(['cart']),
            ...mapGetters(['cartCount'])
        }
    }
</script>