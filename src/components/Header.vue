<template>
    <div id="header">
        <div class="container">
            <div class="header-wrapper">
                <div class="row justify-content">
                    <div class="col-xl-2 logo">
                        <a href="/">
                            <img src="@/assets/logo1.jpg" alt="Логотип">
                        </a>
                    </div>
                    <div class="col-xl-8 title">
                        <h3 style="font-family: 'Marck Script', cursive;">
                            Accessories - интернет-магазин модных аксессуаров
                        </h3>

                    </div>
                    <div class="col-xl-2 cart">
                        <!--<router-link v-bind:to="{name: 'cart', params: {cardData: cart}}">
                            <div class="cart-btn">Корзина: {{cart.length}}</div>
                        </router-link>-->

                        <router-link v-bind:to="{name: 'cart', params: {cardData: cart}}">
                        <div class="cart">
                            <img src="@/assets/cart1.png" alt="Корзина">
                            <div class="count-products">
                                {{cart.length}}
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
            ...mapGetters(['cart'])
        }
    }
</script>

<style scoped>
    #header {
        background: #FFFFFF;
    }
    .header-wrapper {
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
</style>