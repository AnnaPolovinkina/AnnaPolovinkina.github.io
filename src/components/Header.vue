<template>
    <div id="header">
        <div class="container">
            <div class="header_wrapper">
                <div class="row justify-content">
                    <div class="col-xl-2 logo">
                        <router-link v-bind:to="{name: 'home'}">
                            <img src="@/assets/logo1.jpg" alt="Логотип">
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

<style scoped>
    #header {
        background: #FFFFFF;
    }
    .header_wrapper {
        height: 70px;
        overflow: hidden;
    }
    .justify-content {
        justify-content: space-between;
        align-items: center;
    }
    img {
        width: auto;
        height: 70px;
    }
    .cart {
        position: relative;
        display: inline-block;
    }
    .cart img {
        width: 45px;
        height: auto;
    }
    .count-products {
        position: absolute;
        top: -4px;
        left: auto;
        right: -18px;
        width: 27px;
        height: 27px;
        background: gray;
        color: #FFFFFF;
        font-size: 14px;
        line-height: 27px;
        border-radius: 50%;
    }
    .header_link {
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
    }
    .header_link+.header_link {
        margin-left: 20px;
    }
</style>