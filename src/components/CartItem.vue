<template>
    <div class="cart-item">
        <img v-bind:src="cartItemData.img_preview">
        <div class="cart-item_title">{{cartItemData.title}}</div>
        <div class="cart-item_price">
            <div class="cart-item_caption">Цена</div>
            <div>{{cartItemData.price}}</div>
        </div>
        <div class="cart-item_category">
            <div class="cart-item_caption">Категория</div>
            <div>{{cartItemData.category}}</div>
        </div>
        <div class="cart-item_count">
            <div class="cart-item_caption">Количество</div>
            <div>
                <button
                        v-on:click="increment"
                        class="btn btn_dark-green"
                >+</button>
                {{cartItemData.count}}
                <button
                        v-on:click="decrement"
                        class="btn btn_dark-green"
                >-</button>
            </div>
        </div>
        <button
            class="btn btn_dark-green"
            v-on:click="deleteCartItem"
        >x</button>
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
        }

    }
</script>

<style>
    .cart-item {
        border: none;
    }
</style>