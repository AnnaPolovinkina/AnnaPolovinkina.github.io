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
            deleteCartItem() { //Удаление товара из корзины
                this.$emit('deleteFromCart')
            },
            increment() { //Увеличение количества одного товара
                this.$emit('incrementCount');
            },
            decrement() { //Уменьшение количества одного товара
                this.$emit('decrementCount');
            }
        }

    }
</script>