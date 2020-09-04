<template>
    <div class="cart-item">
        <img v-bind:src="cartItemData.img_preview" alt="">
        <div class="cart-item_title">{{cartItemData.title}}</div>
        <div class="cart-item_description">{{cartItemData.description}}</div>
        <div class="cart-item_price">{{cartItemData.price}}</div>
        <div class="cart-item_category">{{cartItemData.category}}</div>

        <button v-on:click="increment">+</button>
        <div class="cart-item_count">Кол-во: {{cartItemData.count}}</div>
        <button v-on:click="decrement">-</button>

        <div class="cart-item_delete" v-on:click="deleteCartItem">УДАЛИТЬ</div>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: {
            cartItemData: {
                type: Object
            }
        },
        methods: {
            deleteCartItem() {
                this.$emit('deleteFromCart')
            },
            increment() {
                this.$emit('incrementCount');
            },
            decrement() {
                this.$emit('decrementCount');
            }
        },
        mounted() {
            this.$set(this.cartItemData, 'count', 1)
        }

    }
</script>

<style scoped>
    .cart-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    .cart-item_description {
        max-height: 72px;
        max-width: 500px;
        overflow: hidden;
    }

</style>