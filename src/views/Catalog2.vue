<template>
    <div>
        <h3>Каталог</h3>
        <!--<Cart v-if="cart.length" v-bind:cardData="cart"></Cart>-->
<!--        <router-link v-bind:to="{name: 'cart', params: {cardData: cart}}">
            <div class="cart-btn">Корзина: {{cart.length}}</div>
        </router-link>-->

        <SelectCategory v-on:changeFilter="filterCategory = $event"></SelectCategory>
        <br>
        <select v-model="filterSale">
            <!--<option value="all">Все товары</option>-->
            <option value="true">Со скидкой</option>
            <option value="false">Без скидки</option>
        </select>
        <select v-model="filterPrice">
            <!--<option value="default">По умолчанию</option>-->
            <option value="increment">По возрастанию</option>
            <option value="decrement">По убыванию</option>
        </select>
        <br>
        <div class="row">
            <ProductCard2 v-for="card in filteredCards" v-bind:card="card" v-on:addCardToCart="toCart"></ProductCard2>
        </div>
        <InfoPopup></InfoPopup>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import ProductCard2 from '@/components/ProductCard2'
    import SelectCategory from '@/components/SelectCategory'
    import InfoPopup from '@/components/InfoPopup'
    import Cart from  '@/components/Cart'

    export default {
        name: 'Catalog',
        data() {
            return {
                filterCategory: '',
                filterPrice: '',
                filterSale: '',
            }
        },
        components: {
            ProductCard2: ProductCard2,
            SelectCategory: SelectCategory,
            InfoPopup: InfoPopup,
            Cart: Cart
        },
        methods: {
            ...mapActions(['addToCart']),
            toCart(data) {
                this.addToCart(data);
            }
        },
        computed: {
            ...mapGetters(['allProducts']),
            ...mapGetters(['cart']),
            filteredCards() {
                var filterCategory = this.filterCategory,
                    filterSale = this.filterSale,
                    filterPrice = this.filterPrice,
                    allResult = this.$store.getters.allProducts,
                    cardResult = [],
                    arrFilter = [];
                arrFilter.push(filterCategory, filterSale, filterPrice);
/*
                arrFilter.forEach(function (item) {
                });
*/


                allResult.forEach(function (item, i, arr) {
                    if (item.category == filterCategory) {
                        cardResult.push(item);
                    }
                    // if (filterCategory.length && filterSale.length) {
                        /*if (item.category == filterCategory || String(item.isSale) == filterSale) {
                            cardResult.push(item);
                        }*/

/*                    if (filterCategory.length) {
                        if (item.category == filterCategory) {
                            cardResult.push(item);
                        }
                    }*/
                    // }
                });

                return cardResult;
            }
        },
    }

</script>

<style scoped>
    .cart-btn {
        width: 100px;
        height: 100px;
        background: yellow;
    }

</style>