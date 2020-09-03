<template>
    <div>
        <h3>Корзина</h3>
        <CartItem v-for="(item, index) in cardData" v-bind:cartItemData="item" v-on:deleteFromCart="deleteCartItemFromCart(index)"></CartItem>
    </div>
</template>

<script>
    import CartItem from '@/components/CartItem'
    import {mapActions} from 'vuex'

    export default {
        name: "Cart",
        components: {
            CartItem: CartItem
        },
        props: {
            cardData: {
                type: Array
            }
        },
        methods: {
            ...mapActions(['deleteFromCart']),
            deleteCartItemFromCart(index) {
                this.deleteFromCart(index);
            }
        },
    }
</script>

<style scoped>

</style>