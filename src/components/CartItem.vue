<template>
    <div class="cart-item">
        <img v-bind:src="cartItemData.img_preview" alt="">
        <div class="cart-item_title">{{cartItemData.title}}</div>
        <div class="cart-item_description">{{cartItemData.description}}</div>
        <div class="cart-item_price">
            <div class="card-item__caption">Цена</div>
            <div>{{cartItemData.price}}</div>
        </div>
        <div class="cart-item_category">
            <div class="card-item__caption">Категория</div>
            <div>{{cartItemData.category}}</div>
        </div>


        <div class="cart-item_count">
            <div class="card-item__caption">Количество</div>
            <div>
                <button v-on:click="increment">+</button>
                {{cartItemData.count}}
                <button v-on:click="decrement">-</button>
            </div>
        </div>


        <button class="cart-item_delete" v-on:click="deleteCartItem">x</button>
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
        margin-top: 30px;
        border: 2px solid #ef98aa;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 5px 15px;
    }
    .cart-item_description {
        max-height: 72px;
        max-width: 500px;
        overflow: hidden;
    }
    .card-item__caption {
        font-weight: bold;
    }
</style>