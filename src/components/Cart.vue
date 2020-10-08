<template>
    <div class="cart">
        <h1>Корзина</h1>
        <div v-if="!cardData.length">Корзина пуста</div>
        <CartItem
            v-for="(item, index) in cardData"
            v-bind:cartItemData="item"
            v-on:deleteFromCart="deleteCartItemFromCart(index)"
            v-on:incrementCount="incrementItemCart(index)"
            v-on:decrementCount="decrementItemCart(index)"
        ></CartItem>
        <div class="cart-total" v-if="cardData.length">
            Итого: <span class="total-sum">{{cartTotalSum}} Р.</span>
        </div>
        <router-link
            v-if="cardData.length"
            v-bind:to="{name: 'order', params: {cardData: cardData}}"
        >
            <button class="btn btn_red">Оформить заказ</button>
        </router-link>
        <button
                class="btn btn_default"
                v-on:click="resetCart"
                v-if="cardData.length"
        >Очистить корзину</button>
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
                type: Array,
                default() {
                    return this.$store.getters.cart;
                }
            }
        },
        computed: {
          cartTotalSum() { //Рассчет общей суммы корзины
              var result = [];
              if (this.cardData.length) {
                  this.cardData.forEach(function (elem, ind) {
                      result.push(elem.price * elem.count);
                  });
                  result = result.reduce(function (sum, elem) {
                      return sum + elem;
                  });
                  return Math.floor(result * 100) / 100;
              } else return 0;
          }
        },
        methods: {
            ...mapActions(['deleteFromCart']),
            deleteCartItemFromCart(index) { //Удаление товара из корзины
                this.deleteFromCart(index);
            },
            ...mapActions(['incrementCartItem']),
            ...mapActions(['decrementCartItem']),
            incrementItemCart(index) { //Увеличение количества одного товара
                this.incrementCartItem(index);
            },
            decrementItemCart(index) { //Уменьшение количества одного товара
                this.decrementCartItem(index);
            },
            resetCart() {
                this.$store.dispatch('resetCart');
                this.cardData = []
            }
        }
    }
</script>